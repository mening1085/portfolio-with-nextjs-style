import React, { ReactNode } from "react";
import { Icon } from "@iconify/react";

type CardProps = {
  children: ReactNode;
};

function CardSkill({ children }: CardProps) {
  return (
    <div className="border border-gray-200 hover:border-gray-400 transition-all duration-200 ease-in-out p-4 rounded-lg space-y-2">
      {children}
    </div>
  );
}
function BoxSkill({ children }: CardProps) {
  return (
    <div className="text-sm flex">
      <div className="flex-shrink-0">
        <Icon
          className="text-3xl -mt-1 -ml-2"
          icon="material-symbols-light:arrow-right"
        />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
function Skill() {
  return (
    <div id="skill">
      <div className="text-center mt-12">
        <div className="text-4xl font-semibold">
          What are my areas of expertise?
        </div>{" "}
        <div className="text-lg text-black/60 mt-2">
          To be honest,
          <span className="font-semibold">
            {" "}
            I'm really only proficient in VueJs, NuxtJs, Laravle and NodeJs.
          </span>{" "}
          Everything else? Well,{" "}
          <span className="font-semibold">
            I'm just a jack-of-all-trades, master of none!
          </span>{" "}
          <span className="text-black">🐣</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <CardSkill>
          <div className="text-lg font-semibold">🛠️ Technical Skills</div>
          <BoxSkill>
            <span className="font-semibold">Full Stack Development</span>{" "}
            Developing web applications on both Frontend and Backend
          </BoxSkill>
          <BoxSkill>
            <span className="font-semibold">Database Design & Management </span>{" "}
            Designing and managing databases efficiently with Mysql, MongoDB,
            Sql and postgreSql
          </BoxSkill>
          <BoxSkill>
            <span className="font-semibold">Frontend Technologies</span>{" "}
            Utilizing Vue.js, Nuxt.js, React.js, Next.js and Tailwind CSS to
            build modern UIs
          </BoxSkill>
          <BoxSkill>
            <span className="font-semibold">Backend Technologies</span>{" "}
            Developing APIs with NestJS + Typeorm, Laravel and Express.js
          </BoxSkill>
          <BoxSkill>
            <span className="font-semibold">DevOps & Deployment</span>{" "}
            Configuring and maintaining servers, CI/CD, and deployment via Plesk
          </BoxSkill>
        </CardSkill>

        <CardSkill>
          <div className="text-lg font-semibold">
            📌 Project Management & Workflow
          </div>
          <BoxSkill>
            <span className="font-semibold">Agile & Scrum</span> Working in
            teams using Agile and Scrum methodologies
          </BoxSkill>
          <BoxSkill>
            <span className="font-semibold">Jira Software </span> Planning and
            tracking tasks with Jira to improve work efficiency
          </BoxSkill>
          <BoxSkill>
            <span className="font-semibold">Version Control (Git)</span>{" "}
            Managing source code using Git and Bitbucket
          </BoxSkill>
        </CardSkill>

        <CardSkill>
          <div className="text-lg font-semibold">🤝 Soft Skills</div>
          <BoxSkill>
            <span className="font-semibold">Team Collaboration</span>{" "}
            Collaborating effectively with team members and providing guidance
          </BoxSkill>
          <BoxSkill>
            <span className="font-semibold">Problem-Solving</span> Analyzing and
            solving technical issues efficiently
          </BoxSkill>
          <BoxSkill>
            <span className="font-semibold">Continuous Learning</span> Always
            eager to learn and develop new skills
          </BoxSkill>
        </CardSkill>
      </div>
    </div>
  );
}

export default Skill;
