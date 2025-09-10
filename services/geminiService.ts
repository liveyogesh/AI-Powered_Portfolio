
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const schema = {
    type: 'OBJECT',
    properties: {
        coverLetter: {
            type: 'STRING',
            description: "A professional, concise, and compelling cover letter tailored for the provided role and job description. It should be written from the perspective of Yogesh Singh. It must highlight his most relevant skills and experiences from his resume data. The tone should be professional and confident. The output must be plain text with appropriate paragraph breaks using newline characters.",
        },
        resume: {
            type: 'OBJECT',
            properties: {
                summary: {
                    type: 'STRING',
                    description: "An updated, dynamic professional summary for the resume, specifically tailored to the job description. It should be 2-3 sentences long."
                },
                highlights: {
                    type: 'ARRAY',
                    items: {
                        type: 'STRING'
                    },
                    description: "A list of 3-5 bullet points summarizing the most relevant achievements or responsibilities from the base resume that directly match the requirements in the job description."
                }
            },
            required: ['summary', 'highlights']
        }
    },
    required: ['coverLetter', 'resume']
};


export const generateTailoredContent = async (
    baseResumeData,
    jobDescription,
    role
) => {

    const prompt = `
        My name is Yogesh Singh. Here is my comprehensive resume data in JSON format:
        ${baseResumeData}

        I am applying for the following role: ${role}
        Here is the job description:
        ${jobDescription}

        Please act as a professional career coach and resume writer. Your task is to generate two pieces of content for me based on my resume and the job description:
        1. A professional cover letter.
        2. An updated resume summary and a list of key highlights.

        You must strictly adhere to the provided JSON schema for your response.
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: schema,
                temperature: 0.5,
            }
        });

        const jsonText = response.text.trim();
        const parsedContent = JSON.parse(jsonText);

        // Basic validation to ensure the structure matches our type
        if (
            parsedContent.coverLetter &&
            parsedContent.resume &&
            parsedContent.resume.summary &&
            Array.isArray(parsedContent.resume.highlights)
        ) {
            return parsedContent;
        } else {
            throw new Error("Generated content does not match the expected structure.");
        }

    } catch (error) {
        console.error("Error generating content from Gemini API:", error);
        if (error instanceof Error) {
            throw new Error(`Gemini API Error: ${error.message}`);
        }
        throw new Error("An unknown error occurred while communicating with the Gemini API.");
    }
};
