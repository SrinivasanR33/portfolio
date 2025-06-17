import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="container m-auto mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-full">
          Here are my experiences and qualifications.
        </p>
      </div>

      {/* card wrapper */}
      <div className="card-wrapper w-full mt-5 flex flex-wrap justify-center gap-6">
        {/* Experience 1 */}
        <div className="flex-1 flex items-stretch justify-center">
          <fieldset
            data-aos="zoom-in"
            className="w-full max-w-[380px] flex-grow h-full min-h-[500px] p-5 py-12 sm:py-8 sm:p-2 border rounded-lg shadow-lg bg-white"
          >
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className="relative h-full">
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              <div className="flex flex-col gap-1 border-2 border-yellow-400 p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">Frontend Developer</h1>
                <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">Isithora Software</span>
                <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">Sep 2021 - Dec 2021</span>
                <p className="text-[.9rem] text-justify break-words text-gray-500">
                  With 4 months of immersive experience as a React developer at Isithora Software, I bring enthusiasm and a fresh perspective. I've honed my skills in building interactive UIs and collaborating with teams to deliver impactful projects.
                </p>
              </div>
            </div>
          </fieldset>
        </div>

        {/* Experience 2 */}
        <div className="flex-1 flex items-stretch justify-center">
          <fieldset
            data-aos="zoom-in"
            className="w-full max-w-[380px] flex-grow h-full min-h-[500px] p-5 py-12 sm:py-8 sm:p-2 border rounded-lg shadow-lg bg-white"
          >
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className="relative h-full">
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              <div className="flex flex-col gap-1 border-2 border-yellow-400 p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">Frontend Developer</h1>
                <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">Adhanam Infotech</span>
                <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">Jan 2022 - Sep 2024</span>
                <p className="text-[.9rem] text-justify break-words text-gray-500">
                  With over 2+ years at Adhanam Infotech, I've built robust web apps using ReactJS. Collaborating with teams and adapting to evolving requirements, I've refined my problem-solving and UI design capabilities.
                </p>
              </div>
            </div>
          </fieldset>
          
        </div>

        {/* Experience 3 */}

        <div className="flex-1 flex items-stretch justify-center">
          <fieldset
            data-aos="zoom-in"
            className="w-full max-w-[380px] flex-grow h-full min-h-[500px] p-5 py-12 sm:py-8 sm:p-2 border rounded-lg shadow-lg bg-white"
          >
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className="relative h-full">
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              <div className="flex flex-col gap-1 border-2 border-yellow-400 p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">Frontend Developer</h1>
                <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">DataTerrain India Private Ltd.</span>
                <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">Sep 2024 - Present</span>
                <p className="text-[.9rem] text-justify break-words text-gray-500">
                  At DataTerrain, I’ve built scalable apps using ReactJS and RTK Query. I've enhanced debugging speed, tackled UI challenges, and delivered efficient solutions through deep collaboration and agile responsiveness.
                </p>
              </div>
            </div>
          </fieldset>
        </div>

        {/* Education */}
        <div className="flex-1 flex items-stretch justify-center">
          <fieldset
            data-aos="zoom-in"
            className="w-full max-w-[380px] flex-grow h-full min-h-[500px] p-5 py-12 sm:py-8 sm:p-2 border rounded-lg shadow-lg bg-white"
          >
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className="relative h-full">
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              <div className="flex flex-col gap-1 border-2 border-yellow-400 p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">BCA, Computer Application</h1>
                <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">Sir Isaac Newton College</span>
                <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">2017 - 2020</span>
                <p className="text-[.9rem] text-justify text-gray-500">
                  I completed my BCA at Sir Isaac Newton College, developing strong foundations in computer science and software development, and gaining hands-on experience in full-stack projects.
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
