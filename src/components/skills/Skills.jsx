import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";

import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript ,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            {/* left box */}


            <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
              <div className="first2 flex flex-col gap-10">
                <SkillBox
                  logo={<IoLogoHtml5 />}
                  black={"white"}
                  white={"black"}
                  skill={"HTML"}
                />
                <SkillBox
                  logo={<IoLogoCss3 className="text-blue" />}
                  black={"blue"}
                  white={"green"}
                  skill={"CSS"}
                />
              </div>
              <div className="last2 flex flex-col gap-10">
                <SkillBox
                  logo={<SiTailwindcss />}
                  black={"black"}
                  white={"white"}
                  skill={"Tailwind CSS"}
                />
                <SkillBox
                  logo={
                    <SiTypescript  />
                  }
                  black={"black"}
                  white={"white"}
                  skill={"Type Script"}
                />

              </div>
              <div className="first2 flex flex-col gap-10">
                <SkillBox
                  logo={<IoLogoNodejs />}
                  black={"white"}
                  white={"black"}
                  skill={"Javascript"}
                />
                <SkillBox
                  logo={<FaReact />}
                  black={"white"}
                  white={"black"}
                  skill={"React Js"}
                />
              </div>
              <div className="last2 flex flex-col gap-10">
                <SkillBox
                  logo={<SiNextdotjs />}
                  black={"black"}
                  white={"white"}
                  skill={"Next Js"}
                />
                <SkillBox
                  className=""
                  logo={
                    <IoLogoNodejs />
                  }
                  black={"black"}
                  white={"white"}
                  skill={"Node Js"}
                />

              </div>
           
            </div>
          </div>
          {/* right box */}
          {/* <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<IoLogoNodejs />}
                black={"white"}
                white={"black"}
                skill={"Node Js"}
              />
              <SkillBox
                logo={<SiMongodb />}
                black={"white"}
                white={"black"}
                skill={"MongoDB"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiExpress />}
                black={"black"}
                white={"white"}
                skill={"Express Js"}
              />
              <SkillBox
                className=""
                logo={
                  <GrCode />
                }
                black={"black"}
                white={"white"}
                skill={"C++"}
              />
             
            </div>
          </div> */}
        </div>

        {/* icons */}
        {/* <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className=" container m-auto flex items-center justify-center mt-8 gap-8 md:gap-5"
        >
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/c-plus-plus-logo.png"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/python--v1.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios/50/null/react-native--v1.png"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/sass.png"
            />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/git.png"
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src="https://img.icons8.com/windows/50/null/sass--v1.png"
            />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/c-plus-plus-logo.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/python.png"
          />
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/javascript--v1.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/nodejs.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"/>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
