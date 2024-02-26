import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[100%] sm:w-full mt-5 flex md:flex-col lg:flex-col sm:gap-3 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[90%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Frontend Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Isithora Software
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Sep 2021 - Dec 2021
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  With 4 months of immersive experience as a React developer at Isithora Software,
                  I bring enthusiasm and a fresh perspective to the field. In this short time,
                  I've delved deep into React development, honing my skills in building interactive user interfaces and collaborating
                  with teams to deliver impactful projects. My time at Isithora Software has provided me with valuable hands-on experience,
                  solidifying my foundation in front-end development. Eager to continue learning and growing,
                  I am excited to contribute my skills and passion to new challenges in the ever-evolving tech landscape.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[90%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Frontend Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Adhanam Infotech
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Jan 2022 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">

                  With over 2 years of experience as a React developer at Adhanma Infotech,
                  I've honed my skills in building robust and scalable web applications.
                  My journey in Adhanma Infotech has equipped me with comprehensive expertise in ReactJS,
                  enabling me to craft intuitive user interfaces and seamless user experiences.
                  Collaborating closely with teams, I've contributed to the successful delivery of projects,
                  demonstrating proficiency in problem-solving to evolving requirements.
                  Ready to take on new challenges, I am passionate about pushing the boundaries of web development with innovative solutions.
                </p>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[90%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  BCA, Computer Application
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Sir Issac Newtown collage
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2017 - Year 2020
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">

                  With a rigorous 3-year Bachelor's degree in Computer Applications (BCA) from Sir Isaac Newton College of Arts,
                  I've cultivated a profound understanding of fundamental concepts in computer science.
                  Through a blend of theoretical learning and practical projects, I've developed versatile skills in software development,
                  including front-end and back-end technologies.
                  Eager to apply this amalgamation of education and experience
                  My educational journey has instilled in me a passion for innovation and problem-solving,
                  preparing me to tackle complex challenges in the dynamic tech landscape.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
