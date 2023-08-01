import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Sc Physics Honors"
            subTitle="Patliputra University, Patna (2019 - 2022)"
            result="63.07%"
            des="The learning provided by my university in order to prepare me to work in various sectors.
                 In my graduation journey i learned  time-management such as submit assignment on time
                  along  with preparation for various tests ."
                
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="S D N Inter College (2017 - 2019)"
            result="85.80%"
            des="In my Higher education, I learned problem solving skills like how to approch a 
            problem these skills i learned when i solving math problem as well as physics problems."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="S D N High School (2016 - 2017)"
            result="75.60%"
            des="In my 10th standard i learned leadership skills because, I was captain of my school 
             Cricket where we participated in many tournaments and team performed very well under my 
             captaincy and i also maintain good relationship with coach as well as my team members ."
          />
        </div>
      </div>

      {/* part Two */}

      {/* // <div> */}
      {/* <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          /> */}
      {/* <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          /> */}
      {/* // </div> */}

      {/* </div> */}
    </motion.div>
  );
};

export default Education;
