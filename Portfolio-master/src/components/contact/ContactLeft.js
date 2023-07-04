import React from 'react'
import {  FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Pritam Kr. Yadav</h3>
        <p className="text-lg font-normal text-gray-400">
          Frontend Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Don't be a Stranger, Connect with me also you can Hire me as a Frontend Developer
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9162XXXXXX</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">pritamyadav9162@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft