/*
  Central roadmap configuration.
  Edit only this file to add, remove, or rename roadmaps, milestones, modules,
  durations, and Microsoft Learn links.

  Shape:
  - title: visible name for cards and detail pages
  - slug: URL-safe identifier used by the detail page
  - description: short summary shown on the card and detail page
  - learningOutcomes: key outcomes for the roadmap
  - estimatedDuration: total time to complete the roadmap
  - microsoftLearnUrl: primary Microsoft Learn destination
  - milestones: ordered stages in the learning path
  - modules: ordered modules within the roadmap
*/

window.roadmapConfig = {
  siteTitle: 'TechForge',
  siteSubtitle: 'Choose a Microsoft learning path and explore its milestones, modules, and outcomes.',
  heroTitle: 'Master In-Demand Tech Skills Through Structured Learning Roadmaps',
  heroSubtitle: 'Explore curated learning journeys in AI, Cybersecurity, Data Science, and Azure. Structured roadmaps designed to build industry-ready skills and accelerate technology careers.',
  learnButtonLabel: 'Open Microsoft Learn',
  backButtonLabel: 'Back to all roadmaps',
  notFoundTitle: 'Roadmap not found',
  notFoundMessage: 'The roadmap you selected is not available. Return to the roadmap library and choose another path.',
  skillsTracks: [
    {
      title: 'Artificial Intelligence',
      skills: ['Prompt Engineering', 'Azure AI Foundry', 'AI Agents', 'RAG Systems', 'Azure OpenAI', 'Responsible AI','Content Safety','Model Evaluation']
    },
    {
      title: 'Cybersecurity',
      skills: ['Azure Networking', 'Microsoft Entra ID', 'Azure Security', 'Azure SQL', 'Azure Storage', 'Infrastructure as Code','Cloud Architecture','Azure AI Services']
    },
    {
      title: 'Data Science',
      skills: ['Python', 'SQL', 'Power BI', 'Data Visualization', 'Machine Learning', 'Azure Machine Learning','MLOps','Statistical Analysis']
    },
    {
      title: 'Azure Cloud',
      skills: ['Azure Networking', 'Microsoft Entra ID', 'Azure Security', 'Azure SQL', 'Azure Storage', 'Infrastructure as Code','Cloud Architecture','Azure AI Services']
    }
  ],
  careerOpportunities: [
    { role: 'AI Engineer', salary: '6-18 LPA', demand: 'Growing Demand' },
    { role: 'Security Analyst', salary: '5–15 LPA', demand: 'High Demand' },
    { role: 'Data Scientist', salary: '6–18 LPA', demand: 'High Demand' },
    { role: 'Cloud Engineer', salary: '5–16 LPA', demand: 'High Demand' },
    { role: 'ML Engineer', salary: '7–20 LPA', demand: 'Growing Demand' },
    { role: 'SOC Analyst', salary: '4–12 LPA', demand: 'Growing Demand' }
  ]
};

window.roadmaps = [
  {
    title: 'Microsoft AI Roadmap: Beginner to Advanced Generative AI',
    slug: 'microsoft-ai-roadmap-beginner-to-advanced-generative-ai',
    subtitle: 'Generative AI, agents, and production RAG systems',
    difficulty: 'Beginner to Advanced',
    iconLabel: 'brain',
    description: 'Learn how to build, evaluate, and ship generative AI solutions using Microsoft tools and responsible AI practices.',
    estimatedDuration: '3 weeks',
    microsoftLearnUrl: 'https://learn.microsoft.com/en-us/plans/25dobgt82owjz4?tab=tab-created&sharingId=A65959111138C0C8&wt.mc_id=studentamb_518927',
    tags: ['Azure OpenAI', 'AI Agents', 'Responsible AI'],
    learningOutcomes: [
      'Understand foundational AI concepts, prompt design, and responsible AI principles.',
      'Build and refine generative AI experiences with Microsoft cloud services.',
      'Evaluate model behavior, quality, and deployment readiness.'
    ],
    milestones: [
      {
        name: 'AI Fundamentals',
        duration: '2 weeks',
        description: 'Core AI concepts, machine learning vocabulary, and Microsoft AI learning entry points.'
      },
      {
        name: 'Prompt Engineering',
        duration: '3 weeks',
        description: 'Prompt patterns, system messages, task decomposition, and safe output shaping.'
      },
      {
        name: 'Azure OpenAI Development',
        duration: '4 weeks',
        description: 'Build applications that connect to Azure OpenAI and orchestration services.'
      },
      {
        name: 'Advanced Generative AI Delivery',
        duration: '3 weeks',
        description: 'Evaluation, monitoring, grounding, and production release considerations.'
      }
    ],
    modules: [
      {
        name: 'AI Essentials on Microsoft Learn',
        duration: '2 weeks'
      },
      {
        name: 'Prompting and Responsible AI',
        duration: '3 weeks'
      },
      {
        name: 'Azure OpenAI Application Design',
        duration: '4 weeks'
      },
      {
        name: 'Evaluation, Safety, and Deployment',
        duration: '3 weeks'
      }
    ]
  },
  {
    title: 'Microsoft Cybersecurity Roadmap: Beginner to Security Professional',
    slug: 'microsoft-cybersecurity-roadmap-beginner-to-security-professional',
    subtitle: 'Threat hunting, zero trust, and incident response',
    difficulty: 'Beginner to Professional',
    iconLabel: 'shield',
    description: 'Develop practical security skills across identity, threat protection, governance, and incident response.',
    estimatedDuration: '4 weeks',
    microsoftLearnUrl: 'https://learn.microsoft.com/en-us/plans/jkgou3t1p6xz1k?tab=tab-created&sharingId=A65959111138C0C8&wt.mc_id=studentamb_518927',
    tags: ['Microsoft Sentinel', 'Defender', 'Zero Trust'],
    learningOutcomes: [
      'Understand the Microsoft security stack and shared responsibility model.',
      'Apply identity, access, and threat protection controls confidently.',
      'Analyze and respond to security incidents using modern Microsoft tools.'
    ],
    milestones: [
      {
        name: 'Security Foundations',
        duration: '3 weeks',
        description: 'Core concepts, threat landscapes, and Microsoft security terminology.'
      },
      {
        name: 'Identity and Access',
        duration: '3 weeks',
        description: 'Authentication, authorization, conditional access, and privileged controls.'
      },
      {
        name: 'Threat Protection',
        duration: '4 weeks',
        description: 'Defend endpoints, email, and cloud assets against modern threats.'
      },
      {
        name: 'Security Operations',
        duration: '4 weeks',
        description: 'Monitoring, incident triage, investigation, and response workflows.'
      }
    ],
    modules: [
      {
        name: 'Microsoft Security Basics',
        duration: '3 weeks'
      },
      {
        name: 'Identity Protection and Zero Trust',
        duration: '3 weeks'
      },
      {
        name: 'Defender and Security Monitoring',
        duration: '4 weeks'
      },
      {
        name: 'Incident Response and Governance',
        duration: '4 weeks'
      }
    ]
  },
  {
    title: 'Microsoft Data Science Roadmap: Beginner to Data Scientist',
    slug: 'microsoft-data-science-roadmap-beginner-to-data-scientist',
    subtitle: 'Machine learning, analytics, and MLOps workflows',
    difficulty: 'Beginner to Professional',
    iconLabel: 'chart-column',
    description: 'Learn data preparation, analysis, experimentation, and production-grade data science workflows with Microsoft tools.',
    estimatedDuration: '4 weeks',
    microsoftLearnUrl: 'https://learn.microsoft.com/en-us/plans/1oeqfot54zgrm0?tab=tab-created&sharingId=A65959111138C0C8&wt.mc_id=studentamb_518927',
    tags: ['Python', 'Power BI', 'Azure ML'],
    learningOutcomes: [
      'Prepare and explore datasets for analysis and modeling.',
      'Apply statistical thinking to solve practical business problems.',
      'Build repeatable data science workflows from notebook to deployment.'
    ],
    milestones: [
      {
        name: 'Data Foundations',
        duration: '3 weeks',
        description: 'Data types, acquisition, cleaning, and exploratory analysis basics.'
      },
      {
        name: 'Statistics and Visualization',
        duration: '3 weeks',
        description: 'Descriptive statistics, visualization, and hypothesis-driven thinking.'
      },
      {
        name: 'Machine Learning Workflows',
        duration: '4 weeks',
        description: 'Feature engineering, model selection, training, and evaluation.'
      },
      {
        name: 'Data Science Operations',
        duration: '3 weeks',
        description: 'Notebook automation, reproducibility, and operational handoff.'
      }
    ],
    modules: [
      {
        name: 'Data Preparation and Exploration',
        duration: '3 weeks'
      },
      {
        name: 'Statistics for Analysis',
        duration: '3 weeks'
      },
      {
        name: 'Model Building and Evaluation',
        duration: '4 weeks'
      },
      {
        name: 'Operationalizing Data Science',
        duration: '3 weeks'
      }
    ]
  },
  {
    title: 'Microsoft Azure Roadmap: From Cloud Fundamentals to AI Engineering',
    slug: 'microsoft-azure-roadmap-from-cloud-fundamentals-to-ai-engineering',
    subtitle: 'Infrastructure, networking, and AI engineering on Azure',
    difficulty: 'Beginner to Advanced',
    iconLabel: 'cloud',
    description: 'Progress from Azure fundamentals into cloud architecture, platform services, and AI engineering patterns.',
    estimatedDuration: '4 weeks',
    microsoftLearnUrl: 'https://learn.microsoft.com/en-us/plans/31o5f6tr8xm45q?sharingId=A65959111138C0C8&wt.mc_id=studentamb_518927',
    tags: ['Azure Networking', 'Entra ID', 'Azure SQL'],
    learningOutcomes: [
      'Understand Azure core services, governance, and architecture decisions.',
      'Design secure, scalable solutions across compute, storage, and networking.',
      'Extend Azure solutions into AI engineering and intelligent application patterns.'
    ],
    milestones: [
      {
        name: 'Azure Fundamentals',
        duration: '3 weeks',
        description: 'Cloud concepts, Azure services, and account governance essentials.'
      },
      {
        name: 'Azure Architecture',
        duration: '4 weeks',
        description: 'Design reliable, secure, and scalable cloud solutions.'
      },
      {
        name: 'Platform and Automation',
        duration: '5 weeks',
        description: 'Infrastructure as code, deployment automation, and operations patterns.'
      },
      {
        name: 'AI Engineering on Azure',
        duration: '4 weeks',
        description: 'Integrate AI services into cloud applications with production readiness in mind.'
      }
    ],
    modules: [
      {
        name: 'Azure Cloud Fundamentals',
        duration: '3 weeks'
      },
      {
        name: 'Architecture and Governance',
        duration: '4 weeks'
      },
      {
        name: 'Automation and Operations',
        duration: '5 weeks'
      },
      {
        name: 'AI Engineering on Azure',
        duration: '4 weeks'
      }
    ]
  }
];
