
export interface SkillCategory {
    name: string;
    skills: string[];
}

export interface Experience {
    role: string;
    company: string;
    location: string;
    duration: string;
    responsibilities: string[];
}

export interface Education {
    degree: string;
    institution: string;
    year: string;
}

export interface Certification {
    name: string;
    issuer: string;
    year: string;
}

export interface Project {
    name: string;
    context: string;
    description: string;
    skills: string[];
}

export interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    linkedinUrl: string;
    summary: string;
    baseResumeData: {
        skills: SkillCategory[];
        experience: Experience[];
        projects: Project[];
        education: Education[];
        certifications: Certification[];
    }
}

export interface GeneratedContent {
    coverLetter: string;
    resume: {
        summary: string;
        highlights: string[];
    };
}
