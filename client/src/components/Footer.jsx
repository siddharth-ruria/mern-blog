import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import React from "react";
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'

export default function FooterComp() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Siddharth's
              </span>{" "}
              Blog
            </Link>
          </div>
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
              <Footer.Icon href="https://www.linkedin.com/in/ruria-siddharth/" target="__blank" rel="noopener noreferrer" icon={BsLinkedin}/>
              <Footer.Icon href="https://github.com/siddharth-ruria" target="__blank" rel="noopener noreferrer" icon={BsGithub}/>
              <Footer.Icon href="https://x.com/airurdis" target="__blank" rel="noopener noreferrer" icon={BsTwitter}/>
              <Footer.Icon href="https://www.instagram.com/ruriasiddharth/" rel="noopener noreferrer" target="__blank" icon={BsInstagram}/>
            </div>
        </div>
      </div>
    </Footer>
  );
}
