// Footer.jsx

import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 p-8 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-3xl font-bold">Connect with Me</h2>
          <div className="flex space-x-4 mt-2">
            {/* React Icons for social media links */}
            <a href="#" className="text-lg hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-lg hover:text-gray-300">
              <FaLinkedin />
            </a>
            <a href="#" className="text-lg hover:text-gray-300">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          {/* Additional sections or quick links */}
          <div className="mb-4">
            <h2 className="text-3xl font-bold">Quick Links</h2>
            <ul className="mt-2">
              <li>
                <Link to={"/"} className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"about"} className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to={"project"} className="hover:text-gray-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link to={"blog"} className="hover:text-gray-300">
                  blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            {/* Contact form or additional information */}
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <p className="mt-2">Feel free to reach out:</p>
            <p>
              Email:{" "}
              <a href="mailto:dharmaseervijb18239@gmail.com">
                dharmaseervijb18239@gmail.com
              </a>
            </p>
            <p>
              Phone: <a href="tel:+919902464181">+91 9902464181</a>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 dharmaseervi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
