import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../utils/projects.json";

function ProjectGallery() {
  console.log({ projects });
  return (
    <div>
      <h1>Project Gallery</h1>
      <p>Check out my projects.</p>
      <div className="card-group">
        <ProjectCard
          projectTitle={projects[0].projectTitle}
          projectImage={projects[0].projectImage}
          projectDescription={projects[0].projectDescription}
          projectCodeLink={projects[0].projectCodeLink}
        />
        <ProjectCard
          projectTitle={projects[1].projectTitle}
          projectImage={projects[1].projectImage}
          projectDescription={projects[1].projectDescription}
          projectCodeLink={projects[1].projectCodeLink}
        />
        <ProjectCard
          projectTitle={projects[2].projectTitle}
          projectImage={projects[2].projectImage}
          projectDescription={projects[2].projectDescription}
          projectCodeLink={projects[2].projectCodeLink}
          projectLiveLink={projects[2].projectLiveLink}
        />
      </div>
    </div>
  );
}

export default ProjectGallery;
