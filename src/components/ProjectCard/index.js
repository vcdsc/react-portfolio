import React from "react";
import "./style.css";

function ProjectCard({
  id,
  projectTitle,
  projectDescription,
  projectImage,
  projectCodeLink,
  projectLiveLink,
}) {
  return (
    <div className="row justify-content-center">
      <div className="col-sm-6">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={projectImage} alt="project" />
          <div className="card-body">
            <h5 className="card-title">{projectTitle}</h5>
            <p className="card-text text-muted">{projectDescription}</p>
            <a
              href={projectCodeLink}
              className="card-link btn btn-dark"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
            {projectLiveLink && (
              <a
                href={projectLiveLink}
                className="card-link btn btn-dark"
                target="_blank"
                rel="noreferrer"
              >
                Deployed Project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
