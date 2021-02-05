import React from "react";
import Page from "../../layout/Page/Page";
import HeaderTopBar from "../../navigation/HeaderTopBar/HeaderTopBar";
import projects from "../../data/projects";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import "./ProjectsPage.css";

interface ProjectsPageProps {}

const ProjectsPage: React.FC<ProjectsPageProps> = ({}) => {
  const data = projects;

  return (
    <Page
      options={{
        head: {
          title: "Joshua Eture / Apps & Projects",
          description: "Developed by Joshua Eture",
        },
      }}
    >
      <HeaderTopBar options={{ title: "Apps & Projects" }} />
      <div id="projects-grid">
        {data.map((project) => (
          <ProjectItem
            key={project.id}
            name={project.name}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </Page>
  );
};

export default ProjectsPage;
