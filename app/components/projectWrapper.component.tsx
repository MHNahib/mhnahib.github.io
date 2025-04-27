import { ProjectCard } from "./projectCard.component";

export const ProjectWrapper = () => {
  const projects = [
    {
      title: "bangladesh-postcodes-npm",
      technologies: ["JavaScript", "Node.js", "Express.js"],
      tags: ["npm-package", "javascript", "node.js", "express.js"],
      github: "https://github.com/MHNahib/bangladesh-postcodes-npm",
      liveDemo: "https://www.npmjs.com/package/bangladesh-postcodes-npm",
    },
    {
      title: "bd-phone-number-validator",
      technologies: ["JavaScript", "Node.js", "Express.js"],
      tags: ["npm-package", "javascript", "node.js", "express.js"],
      github: "https://github.com/MHNahib/bd-phone-number-validator",
      liveDemo: "https://www.npmjs.com/package/bd-phone-number-validator",
    },
    {
      title: "DIU Smart Booking System",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "EJS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      tags: [
        "html",
        "css",
        "javascript",
        "node.js",
        "express.js",
        "ejs",
        "mongodb",
      ],
      github: "https://github.com/MHNahib/diu-buses",
      liveDemo: "http://diutransport.herokuapp.com/",
    },
    {
      title: "Al Quran API",
      technologies: ["JavaScript", "Node.js", "Express.js"],
      tags: ["javascript", "node.js", "express.js", "api"],
      github: "https://github.com/MHNahib/random-alquran-quotes",
      liveDemo: "https://alquranapicls.herokuapp.com/",
    },
    {
      title: "DIU Result Bot",
      technologies: ["JavaScript", "Node.js", "Express.js", "Telegram"],
      tags: ["javascript", "node.js", "express.js", "api", "telegram-api"],
      github: "https://github.com/MHNahib/diu-result-telegram-bot",
      liveDemo: "https://t.me/DIUResultBot/",
    },
    {
      title: "Social Blocker Chrome Extension",
      technologies: ["HTML", "CSS", "JavaScript"],
      tags: ["html", "css", "javascript", "chrome-extension"],
      github: "https://github.com/MHNahib/Social-Blocker",
      liveDemo: "https://github.com/MHNahib/Social-Blocker",
    },
    {
      title: "No Code MongoDB Backend",
      technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
      tags: ["javascript", "node.js", "express.js", "mongodb", "api"],
      github: "https://github.com/MHNahib/no-code-mongodb-backend",
      liveDemo: "https://github.com/MHNahib/no-code-mongodb-backend",
    },
    {
      title: "Smart Plant Monitoring System",
      technologies: ["C", "C++", "Arduino", "Telegram"],
      tags: ["c", "c++", "arduino", "esp8266", "telegram-api"],
      github: "https://github.com/MHNahib/smart-plant-monitoring-system",
      liveDemo: "https://t.me/SmartPlantMonitoringSystemBot",
    },
    {
      title: "College Management System",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Django"],
      tags: ["html", "css", "javascript", "django"],
      github: "https://github.com/MHNahib/college-management-system-cms",
      liveDemo: "https://github.com/MHNahib/college-management-system-cms",
    },
  ];
  return (
    <div className="w-full h-auto py-4">
      <div className="container mx-auto text-center my-2">
        <h2 className="text-3xl font-semibold mb-6">Project Showcase</h2>
        <div className="h-1 bg-green-300 mx-auto w-24 mb-8"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-4 justify-items-center gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            technologies={project.technologies}
            tags={project.tags}
            github={project.github}
            liveDemo={project.liveDemo}
          />
        ))}
      </div>
    </div>
  );
};
