
import React from 'react';
import { Mail, Linkedin, Phone, Briefcase, Code, GraduationCap, Star, User, Settings, FileText } from 'lucide-react';
import { SKILLS, EXPERIENCES, EDUCATION, CERTIFICATIONS, PROJECTS, PERSONAL_INFO } from './constants';
import type { SkillCategory, Experience, Education as EducationType, Certification, Project } from './types';
import AiGenerator from './components/AiGenerator';

const Section: React.FC<{ id: string; title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ id, title, icon, children }) => (
    <section id={id} className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-bold font-display text-brand-primary mb-8 flex items-center gap-3">
            {icon}
            {title}
        </h2>
        {children}
    </section>
);

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => (
    <div className="mb-8 last:mb-0">
        <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-white">{experience.role}</h3>
            <p className="text-brand-accent text-sm whitespace-nowrap">{experience.duration}</p>
        </div>
        <div className="flex justify-between items-start mb-2">
             <p className="text-lg font-semibold text-brand-primary">{experience.company}</p>
             <p className="text-brand-accent text-sm">{experience.location}</p>
        </div>
        <ul className="list-disc list-inside text-brand-text/90 space-y-2">
            {experience.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
            ))}
        </ul>
    </div>
);

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-dark">
            <main className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
                <header id="home" className="text-center mb-24">
                    <h1 className="text-5xl md:text-6xl font-bold font-display text-white mb-2">{PERSONAL_INFO.name}</h1>
                    <p className="text-xl md:text-2xl text-brand-primary font-medium mb-6">{PERSONAL_INFO.title}</p>
                    <div className="flex justify-center items-center gap-6 flex-wrap">
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 text-brand-accent hover:text-brand-primary transition-colors">
                            <Mail size={20} /><span>{PERSONAL_INFO.email}</span>
                        </a>
                        <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-accent hover:text-brand-primary transition-colors">
                            <Linkedin size={20} /><span>LinkedIn</span>
                        </a>
                        <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-2 text-brand-accent hover:text-brand-primary transition-colors">
                            <Phone size={20} /><span>{PERSONAL_INFO.phone}</span>
                        </a>
                    </div>
                </header>

                <Section id="summary" title="Professional Summary" icon={<User />}>
                    <p className="text-lg text-brand-text/90 leading-relaxed">
                        {PERSONAL_INFO.summary}
                    </p>
                </Section>
                
                <Section id="skills" title="Core Skills" icon={<Star />}>
                    <div className="space-y-6">
                        {SKILLS.map((category: SkillCategory) => (
                            <div key={category.name}>
                                <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill: string) => (
                                        <span key={skill} className="bg-brand-mid text-brand-primary text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
                
                <Section id="experience" title="Work Experience" icon={<Briefcase />}>
                   {EXPERIENCES.map((exp, index) => (
                       <ExperienceCard key={index} experience={exp} />
                   ))}
                </Section>

                <Section id="projects" title="Key Projects" icon={<Code />}>
                    <div className="space-y-6">
                        {PROJECTS.map((project: Project, index: number) => (
                            <div key={index} className="bg-brand-mid p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                                <p className="text-brand-accent mb-2">{project.context}</p>
                                <p className="text-brand-text/90 mb-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.skills.map(skill => (
                                        <span key={skill} className="bg-brand-light text-brand-text text-xs font-medium px-2.5 py-0.5 rounded-full">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section id="education" title="Education & Certifications" icon={<GraduationCap />}>
                    <div className="space-y-6">
                        {EDUCATION.map((edu: EducationType, index: number) => (
                             <div key={index} className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                                    <p className="text-lg text-brand-accent">{edu.institution}</p>
                                </div>
                                <p className="text-brand-accent text-sm">{edu.year}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-brand-light">
                        <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
                        <ul className="space-y-4">
                            {CERTIFICATIONS.map((cert: Certification, index: number) => (
                                <li key={index}>
                                    <p className="font-bold text-white">{cert.name}</p>
                                    <p className="text-brand-accent">{cert.issuer} ({cert.year})</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Section>

                <Section id="generator" title="AI Resume & Cover Letter Generator" icon={<Settings />}>
                    <AiGenerator />
                </Section>

            </main>
            <footer className="text-center py-8 border-t border-brand-light">
                <p className="text-brand-accent">&copy; {new Date().getFullYear()} Yogesh Singh. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default App;
