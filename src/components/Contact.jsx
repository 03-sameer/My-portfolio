import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="my-10 min-h-46 w-screen px-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-black font-zentry mb-8 hover:animate-ping">Contact Me</h2>

      <div className="flex flex-row gap-5">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sameera03/"
          icon={<FaLinkedin />}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-purple-700 hover:scale-105"
        >
          <FaLinkedin className="text-2xl text-purple-400 transition-colors duration-300 hover:text-blue-500" />
          <span className="text-white font-semibold">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/03-sameer"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-purple-700 hover:scale-105"
        >
          <FaGithub className="text-2xl text-purple-400 transition-colors duration-300 hover:text-gray-200" />
          <span className="text-white font-semibold">GitHub</span>
        </a>

        {/* Email */}
        <a
          href="mailto:3sameer63@gmail.com"
          className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-purple-700 hover:scale-105"
        >
          <FaEnvelope className="text-2xl text-purple-400 transition-colors duration-300 hover:text-blue-300" />
          <span className="text-white font-semibold">Email Me</span>
        </a>

        
      </div>
    </div>
  );
};

export default Contact;
