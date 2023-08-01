import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  project4,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="PRACTO CLONE"
          des="Developed Practo clone using React, Redux, CSS, Material UI, React-Icons, Node.js, 
          and Express.js. Integrated payment processing & consultation history for smooth transactions.
           Proficient in both frontend & backend, ensuring an intuitive user experience with seamless
            functionality in doctor appointment scheduling."
          src={projectOne}
          glinks={"https://github.com/Pritam-Git01/Practo-Clone"}
          wlinks={"#"}
        />
        <ProjectsCard
          title="CRYPTO CAVE"
          des="Built a real-time cryptocurrency app using React, Chakra UI, Chart.js,
           and React-Icons. Leveraged REST APIs for up-to-date global cryptocurrency 
           data. Created intuitive interfaces with Chakra UI for seamless user experience.
            Displayed interactive data with Chart.js to empower informed decisions."
          src={project4}
          glinks="https://github.com/Pritam-Git01/Crypto-Cave"
          wlinks="https://crypto-cave.vercel.app/"
        />
        <ProjectsCard
          title="TWITTER App"
          des="Developed Twitter-inspired social media project with React, Material UI,
           CSS, React-Icons, and JSON. User-friendly interface enables tweeting post 
           sign-up/log-in. Utilized Material UI for appealing design. Incorporated JSON 
           for smooth functionality, data storage, & tweet retrieval"
          src={projectThree}
          glinks="https://github.com/ARSHIKULSUM/Twitter-Clone"
          wlinks="https://twitter-clone-ua2p-pritam-git01.vercel.app/"
        />
        <ProjectsCard
          title="GOOGLE DOCS"
          des=" 
          Developed text editor app with React, html2canvas, CSS, Material UI,
           Redux. Users can create, edit, & format text documents. Added advanced 
           features to print & download documents as PDF. Redux for efficient state
            management, ensuring smooth user experience"
          src={projectTwo}
          glinks="https://github.com/Pritam-Git01/Google-Doc"
          wlinks="https://google-docs-pritam-git01.vercel.app/"
        />
        
        
        {/* <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />  */}
      </div>
    </section>
  );
};

export default Projects;
