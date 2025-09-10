
export const SKILLS = [
    {
        name: 'Healthcare IT Systems',
        skills: ['HIS/HMS/EMR/EHR', 'PACS/RIS/LIS', 'HL7/DICOM Standards', 'Workflow Optimization', 'System Integration']
    },
    {
        name: 'ERP & CRM',
        skills: ['Dynamics NAV365', 'Salesforce', 'ERP Implementation', 'CRM Integration', 'Process Mapping']
    },
    {
        name: 'Technical & IT Operations',
        skills: ['SQL Server', 'System & Network Administration', 'Application Support', 'IT Infrastructure (Cloud & On-Premise)', 'UAT', 'SOP Documentation', 'Vendor Management']
    },
    {
        name: 'Management & Strategy',
        skills: ['Project Management', 'Change Management', 'Digital Transformation', 'Stakeholder Coordination', 'Risk Assessment', 'ISACA/NABH Compliance']
    }
];

export const EXPERIENCES = [
    {
        role: 'Asst. Manager (System Analyst, Application Support & IT Operations)',
        company: 'Evercare Group (Care Hospitals)',
        location: 'Hyderabad, Telangana',
        duration: 'Aug 2022 – Present',
        responsibilities: [
            'Led implementation and support for HIS and ERP systems across 16+ multi-site hospitals.',
            'Gathered and documented HIS/ERP requirements, ensuring smooth workflow integration.',
            'Managed UAT planning, execution, issue tracking, and change request handling.',
            'Created SOPs, training documentation, and functional workflows for clinical and administrative departments.',
            'Worked closely with vendors (e.g., Akhil Systems) to define and validate functional specs for HIS modules.'
        ]
    },
    {
        role: 'Asst. Manager (Business Analyst, Application Support & IT Operations)',
        company: 'ART Fertility Clinics',
        location: 'Gurugram, Haryana',
        duration: 'Oct 2021 – Aug 2022',
        responsibilities: [
            'Spearheaded the implementation of Dynamic NAV365 ERP and Salesforce CRM systems.',
            'Optimized healthcare operations and improved patient data management through system integration.',
            'Conducted stakeholder workshops to gather requirements and align IT solutions with business needs.',
            'Designed non-clinical modules in V-Repro Clinical Application, driving digital transformation.'
        ]
    },
    {
        role: 'Sr. Executive (Infra and Application Support & IT Operations)',
        company: 'Paras Super-Specialist Hospital (Paras Healthcare)',
        location: 'Panchkula, Haryana',
        duration: 'Sep 2018 – Oct 2021',
        responsibilities: [
            'Managed vendor relationships and coordinated with global teams for healthcare IT solutions.',
            'Implemented HIS modules and supported radiology/LIS integration for new greenfield hospital projects.',
            'Configured SQL backups, VPN, patch management, and ensured application uptime.',
            'Assessed hospital server infrastructure and provided recommendations for hardware/OS upgrades.'
        ]
    },
    {
        role: 'System Administrator – IT (Application & Infra Support)',
        company: 'Paras Bliss Hospital (Paras Healthcare)',
        location: 'Panchkula, Haryana',
        duration: 'Sep 2015 – Sep 2018',
        responsibilities: [
            'Led HIS implementation and managed Hospital Management Systems (HMS).',
            'Conducted UAT, trained end-users, and set up IT infrastructure for new hospital branches.',
            'Collaborated with stakeholders to gather requirements, resolve issues, and ensure system alignment.',
            'Provided technical support, managed vendor relationships, and maintained system functionality.'
        ]
    }
];

export const PROJECTS = [
    {
        name: 'Multi-Site Miracle HIS Implementation',
        context: 'Evercare Group (Care Hospitals) | 2023 – Present',
        description: 'Migrated legacy HIS to Miracle HIS across multiple hospitals (IPD, OPD, Billing, Pharmacy, Nursing, Inventory, Emergency modules). Coordinated UAT, training, and change management for over 1,000 staff members.',
        skills: ['HIS Migration', 'UAT', 'Training', 'Clinical Workflow Integration', 'Change Management']
    },
    {
        name: 'ERP & CRM Implementations',
        context: 'ART Fertility Clinics | 2021 – 2022',
        description: 'Spearheaded Microsoft NAV365 ERP rollout for Finance, Pharmacy, and Inventory modules. Led Salesforce CRM implementation to improve patient engagement and marketing workflows.',
        skills: ['ERP Implementation', 'CRM Integration', 'Workflow Mapping', 'Application Development']
    },
    {
        name: 'Greenfield Hospital IT Infrastructure & HIS Setup',
        context: 'Paras Healthcare | 2015 – 2018',
        description: 'Delivered end-to-end IT infrastructure setup for new hospitals, including HIS and ERP deployment. Implemented PACS/RIS/LIS and integrated radiology workflows. Drafted SOPs and trained clinicians to ensure NABH audit readiness.',
        skills: ['IT Infrastructure Setup', 'HIS Implementation', 'SOP Development', 'NABH Compliance']
    }
];

export const EDUCATION = [
    {
        degree: 'Bachelor of Science - Information Technology',
        institution: 'Lovely Professional University - Jalandhar, India',
        year: 'Expected 2025'
    },
    {
        degree: 'Diploma in Computer Science & Engineering',
        institution: 'Board of Technical Education - Lucknow, Uttar Pradesh',
        year: '2014'
    }
];

export const CERTIFICATIONS = [
    {
        name: 'Information Systems Auditing, Controls & Assurance',
        issuer: 'The Hong Kong University of Science And Technology',
        year: '2021'
    },
    {
        name: 'Computer And Information Systems Security',
        issuer: 'ALTTC, BSNL - Ghaziabad, Uttar Pradesh',
        year: '2012'
    }
];


export const PERSONAL_INFO = {
    name: 'Yogesh Singh',
    title: 'Healthcare IT Specialist | HIS/ERP/CRM Implementation & Digital Transformation',
    email: 'justyogeshsingh@gmail.com',
    phone: '+91-9990311779',
    linkedinUrl: 'https://www.linkedin.com/in/liveyogesh',
    summary: 'Experienced and results-driven Healthcare IT Specialist with over a decade of hands-on expertise in implementing, integrating, and optimizing HIS, ERP, CRM, and PACS/RIS/LIS systems across multi-specialty hospitals and clinics. Proven track record in requirement gathering, UAT, vendor coordination, and digital transformation to ensure seamless hospital operations. Skilled in bridging the gap between medical teams and technology to improve patient care, operational efficiency, and regulatory compliance (NABH/ISACA).',
    baseResumeData: {
        skills: SKILLS,
        experience: EXPERIENCES,
        projects: PROJECTS,
        education: EDUCATION,
        certifications: CERTIFICATIONS
    }
};
