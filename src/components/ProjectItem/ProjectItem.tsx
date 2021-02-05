import React from "react";
import "./ProjectItem.css";

interface ProjectItemProps {
  name: string;
  description: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  description,
  link,
}) => {
  return (
    <a href={link} className="project-item">
      <div className="project-item-name">{name}</div>
      <div className="project-item-description">{description}</div>
    </a>
  );
};

export default ProjectItem;
