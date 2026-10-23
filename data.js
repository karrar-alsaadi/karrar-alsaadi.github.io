// ============================================================
//  THE ONLY FILE YOU NEED TO EDIT.
//  Leave a link as "" and it is hidden automatically.
//  Only add things that are real and verified.
// ============================================================
const site = {
  tagline: "Software development graduate interested in bioinformatics, data analysis, and AI-driven approaches to biological research and drug discovery.",
  about: "I started in software development and I'm moving toward computational biology: single-nucleus omics, gene-expression analysis, network biology and computational approaches to therapeutic discovery.",
  contact: "Open to research collaborations, supervision enquiries and job opportunities.",
  email: "karrar.h.alsaadi@gmail.com",   // "name@example.com"
  cv: "",                        // set to "assets/cv.pdf" after you add the PDF to assets/
  links: {
    ORCID: "https://orcid.org/0009-0005-6259-2544",
    GitHub: "https://github.com/karrar-alsaadi",
    LinkedIn: "https://www.linkedin.com/in/karrar-alsaadi-7829a9217/",
    YouTube: "https://www.youtube.com/@KarrarHMahdi",
    ORCID: "",
    "Google Scholar": ""
  }
};

// status: "Completed" | "In progress" | "Planned" | "Preprint" | "Published"
const projects = [
  { title: "Alzheimer's disease snRNA-seq analysis", status: "In progress",
    description: "Quality control, clustering and differential expression of single-nucleus RNA-seq data.",
    tags: ["R", "Seurat", "Bioconductor"], link: "" },
  { title: "Microglia trajectory analysis", status: "In progress",
    description: "Pseudotime and trajectory analysis of microglial states.",
    tags: ["R", "Python"], link: "" },
  { title: "Gene-network and pathway analysis", status: "Planned",
    description: "Network biology and pathway enrichment to interpret expression results.",
    tags: ["R"], link: "" },
  { title: "Accessible audio and text-to-speech workflow", status: "Planned",
    description: "A workflow that turns text into accessible audio.",
    tags: ["Python"], link: "" }
];

// Keep interests, work in progress, preprints and papers clearly separate.
const research = [
  { title: "Research interests", status: "Interests",
    description: "Single-nucleus RNA sequencing, network biology, trajectory analysis and AI for drug discovery.",
    tags: [], link: "" }
];

// Add newest first. Example:
// { date: "2025", title: "Bachelor's degree in Software Development", description: "University name" }
const timeline = [];

const skills = [
  { group: "Programming and data analysis", items: ["Python", "R", "Git and GitHub"] },
  { group: "Bioinformatics", items: ["Bioconductor", "Seurat", "Differential expression", "Pathway enrichment"] },
  { group: "Research interests", items: ["Single-nucleus RNA sequencing", "Network biology", "Trajectory analysis", "AI for drug discovery"] }
];
