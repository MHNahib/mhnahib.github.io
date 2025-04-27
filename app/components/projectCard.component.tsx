import React from "react";
import { GithubIcon, LinkIcon, OverviewIcon } from "./icon.component";

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
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
        <h4 className="text-xl text-slate-600 font-bold">{title}</h4>
      </div>

      <div className="p-4">
        <span className="mb-2 text-slate-800 text-lg font-semibold">
          Technologies
        </span>
        <p className="text-slate-600 leading-normal font-light">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to Naviglio where you can enjoy the main night life in
          Barcelona.
        </p>
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
