
import React, { useState, useCallback } from 'react';
import { generateTailoredContent } from '../services/geminiService';
import { PERSONAL_INFO } from '../constants';
import { Clipboard, Check, AlertTriangle, Download, FileText, Bot } from 'lucide-react';

const AiGenerator = () => {
    const [jobDescription, setJobDescription] = useState('');
    const [role, setRole] = useState('');
    const [generatedContent, setGeneratedContent] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('coverLetter');

    const [copied, setCopied] = useState(null);

    const handleGenerate = useCallback(async () => {
        if (!jobDescription.trim() || !role.trim()) {
            setError('Please provide both a role/designation and a job description.');
            return;
        }

        setIsLoading(true);
        setError(null);
        setGeneratedContent(null);

        try {
            const content = await generateTailoredContent(
                JSON.stringify(PERSONAL_INFO.baseResumeData),
                jobDescription,
                role
            );
            setGeneratedContent(content);
            setActiveTab('coverLetter');
        } catch (err) {
            console.error(err);
            setError('Failed to generate content. The AI model may be busy or an error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    }, [jobDescription, role]);

    const handleCopy = (content, type) => {
        navigator.clipboard.writeText(content);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };
    
    const formattedResume = generatedContent ? 
`PROFESSIONAL SUMMARY
--------------------
${generatedContent.resume.summary}

KEY HIGHLIGHTS & RELEVANT EXPERIENCE
-----------------------------------
${generatedContent.resume.highlights.map(h => `- ${h}`).join('\n')}`
: '';


    return (
        <div className="bg-brand-mid p-6 sm:p-8 rounded-lg border border-brand-light">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 <div>
                    <label htmlFor="role" className="block text-sm font-medium text-brand-accent mb-1">Role / Designation</label>
                    <input
                        id="role"
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="e.g., Senior Healthcare IT Analyst"
                        className="w-full bg-brand-dark border border-brand-light rounded-md px-3 py-2 text-brand-text focus:ring-2 focus:ring-brand-primary focus:outline-none transition"
                    />
                </div>
                <div className="md:col-span-2">
                    <label htmlFor="jobDescription" className="block text-sm font-medium text-brand-accent mb-1">Paste Job Description</label>
                    <textarea
                        id="jobDescription"
                        rows={8}
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        placeholder="Paste the full job description here to tailor your application..."
                        className="w-full bg-brand-dark border border-brand-light rounded-md px-3 py-2 text-brand-text focus:ring-2 focus:ring-brand-primary focus:outline-none transition"
                    />
                </div>
            </div>

            <button
                onClick={handleGenerate}
                disabled={isLoading}
                className="w-full flex justify-center items-center gap-2 bg-brand-primary text-white font-bold py-3 px-4 rounded-md hover:bg-blue-600 transition-colors disabled:bg-brand-light disabled:cursor-not-allowed"
            >
                {isLoading ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating...
                    </>
                ) : (
                   <><Bot size={20} /> Generate Tailored Content</>
                )}
            </button>

            {error && (
                <div className="mt-6 p-4 bg-red-900/50 border border-red-500 text-red-200 rounded-md flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 mt-0.5 text-red-400" />
                    <div>
                      <h4 className="font-bold">Error</h4>
                      <p>{error}</p>
                    </div>
                </div>
            )}

            {generatedContent && (
                <div className="mt-8">
                    <div className="border-b border-brand-light flex">
                        <button onClick={() => setActiveTab('coverLetter')} className={`py-2 px-4 font-semibold transition-colors ${activeTab === 'coverLetter' ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-brand-accent hover:text-white'}`}>
                           <FileText className="inline-block mr-2" size={16}/> Cover Letter
                        </button>
                        <button onClick={() => setActiveTab('resume')} className={`py-2 px-4 font-semibold transition-colors ${activeTab === 'resume' ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-brand-accent hover:text-white'}`}>
                           <FileText className="inline-block mr-2" size={16}/> Updated Resume Points
                        </button>
                    </div>
                    <div className="relative mt-4 p-4 bg-brand-dark rounded-md border border-brand-light/50">
                        {activeTab === 'coverLetter' && (
                            <div>
                                <button onClick={() => handleCopy(generatedContent.coverLetter, 'coverLetter')} className="absolute top-3 right-3 p-1.5 text-brand-accent bg-brand-mid rounded-md hover:bg-brand-light hover:text-white transition">
                                    {copied === 'coverLetter' ? <Check size={16} /> : <Clipboard size={16} />}
                                </button>
                                <pre className="whitespace-pre-wrap font-sans text-brand-text/90">{generatedContent.coverLetter}</pre>
                            </div>
                        )}
                        {activeTab === 'resume' && (
                             <div>
                                <button onClick={() => handleCopy(formattedResume, 'resume')} className="absolute top-3 right-3 p-1.5 text-brand-accent bg-brand-mid rounded-md hover:bg-brand-light hover:text-white transition">
                                    {copied === 'resume' ? <Check size={16} /> : <Clipboard size={16} />}
                                </button>
                                <pre className="whitespace-pre-wrap font-sans text-brand-text/90">{formattedResume}</pre>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </div>
    );
};

export default AiGenerator;
