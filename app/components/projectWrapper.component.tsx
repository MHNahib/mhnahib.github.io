import { ProjectCard } from "./projectCard.component";

export const ProjectWrapper = () => {
  return (
    <div className="w-full h-auto">
      <div className="container mx-auto text-center my-2">
        <h2 className="text-3xl font-semibold mb-6">
          Technologies I am working on
        </h2>
        <div className="h-1 bg-green-300 mx-auto w-24 mb-8"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-4 justify-items-center gap-4">
        <div className="">
          <ProjectCard
            title="bd-phone-number-validator"
            technologies={["JavaScript", "Node.js", "Express.js"]}
            tags={["npm-package", "javascript", "node.js", "express.js"]}
            github="https://github.com/MHNahib/bd-phone-number-validator"
            liveDemo="https://www.npmjs.com/package/bd-phone-number-validator"
          />
        </div>
        <div className="">
          <ProjectCard
            title="bd-phone-number-validator"
            technologies={["JavaScript", "Node.js", "Express.js"]}
            tags={["npm-package", "javascript", "node.js", "express.js"]}
            github="https://github.com/MHNahib/bd-phone-number-validator"
            liveDemo="https://www.npmjs.com/package/bd-phone-number-validator"
          />
        </div>
        <div className="">
          <ProjectCard
            title="bd-phone-number-validator"
            technologies={["JavaScript", "Node.js", "Express.js"]}
            tags={["npm-package", "javascript", "node.js", "express.js"]}
            github="https://github.com/MHNahib/bd-phone-number-validator"
            liveDemo="https://www.npmjs.com/package/bd-phone-number-validator"
          />
        </div>
        <div className="">
          <ProjectCard
            title="bd-phone-number-validator"
            technologies={["JavaScript", "Node.js", "Express.js"]}
            tags={["npm-package", "javascript", "node.js", "express.js"]}
            github="https://github.com/MHNahib/bd-phone-number-validator"
            liveDemo="https://www.npmjs.com/package/bd-phone-number-validator"
          />
        </div>
      </div>
    </div>
  );
};
