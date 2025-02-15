import React from "react";
import projects from "../../public/projects";

export default function Project() {
  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.project}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
