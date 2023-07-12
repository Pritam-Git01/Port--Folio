import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, project4 } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

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
          des=" Users can select the Specialized Doctors of their relevant
                disease and book the appointment of Video Calling Options and get
                a confirmation message that your doctor will contact within whatever 
                time you choose when booking your appointment.
         "
          src={projectOne}
          glinks={"https://github.com/Pritam-Git01/Practo-Clone"}
          wlinks={"#"}
        />
        <ProjectsCard
          title="GOOGLE DOCS"
          des=" It have some similar functionality like google Docs where users can 
              create and edit their text ducument and also able to download or print it in pdf."
          src={projectTwo}
          glinks="https://github.com/Pritam-Git01/Google-Doc"
          wlinks="https://google-docs-pritam-git01.vercel.app/"
        />
        <ProjectsCard
          title="TWITTER App"
          des="It is clone of popular social media platform Twitter where users can see the 
               others people tweet and also make a tweet and follow each other"
          src={projectThree}
          glinks="https://github.com/Pritam-Git01/Twitter--Clone"
          wlinks="https://twitter-clone-six-peach.vercel.app/"
        />
         <ProjectsCard
          title="CRYPTO CAVE"
          des=" It is a crypto currencies information app. which shows real time information
              of most of the cryto currencies available in market with actual graph presentation."
          src={project4}
          glinks="https://github.com/Pritam-Git01/Crypto-Cave"
          wlinks="https://crypto-cave.vercel.app/"
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
}

export default Projects