import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import {IoLogoJavascript,IoLogoCss3} from "react-icons/io";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
               <a href='https://github.com/Pritam-Git01'><FaGithub/></a>
            </span>
            <span className="bannerIcon">
              <a href='https://www.instagram.com/prit_am01/'><FaInstagram /></a>
            </span>
            <span className="bannerIcon">
              <a href='http://www.linkedin.com/in/pritam-kumar-yadav-9a95b918a'><FaLinkedinIn/></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <IoLogoJavascript />
            </span>
            <span className="bannerIcon">
              <IoLogoCss3 />
            </span>
            <span className="bannerIcon">
              <SiRedux />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media