import React from "react";
import { GithubIcon, LinkIcon } from "./icon.component";
import { getReleventTech } from "~/common/techList";

interface ProjectCardProps {
  title: string;
  technologies: string[];
  tags: string[];
  github: string;
  liveDemo: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  technologies,
  tags,
  github,
  liveDemo,
}) => {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
      <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
        <h4 className="text-xl text-slate-600 font-bold">{title}</h4>
      </div>

      <div className="p-4">
        <span className="mb-2 text-slate-800 text-lg font-semibold">
          Technologies
        </span>
        <div className="flex gap-2 flex-wrap items-center">
          {technologies.map((tech, index) => (
            <img
              key={index}
              src={getReleventTech(tech).icon}
              alt={title + " Project of M. H. Nahib (Software Engineer)"}
              className="w-8 h-8"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <div className=" mb-0 border-b border-slate-200 pt-3 pb-4 px-1 flex items-center justify-around gap-4 bg-gray-100 hover:bg-green-300 transition-all duration-300 ease-in-out">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <LinkIcon />
        </a>
      </div>
    </div>
  );
};
