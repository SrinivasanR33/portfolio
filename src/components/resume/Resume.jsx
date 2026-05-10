import React from "react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Coherent Pixels Systems Pvt Ltd, Chennai",
    client: "Freshworks",
    duration: "Aug 2025 - Present",
    summary:
      "Working with the Freshworks product team on scalable React and TypeScript applications. Built reusable component systems, improved UI performance, and used AI-assisted tools like GitHub Copilot and Cursor to speed up delivery and debugging.",
  },
  {
    role: "Senior Software Engineer",
    company: "DataTerrain India Private Ltd.",
    duration: "Sep 2024 - Aug 2025",
    summary:
      "Built scalable frontend solutions in React across hospital, mentoring, and volunteer-based applications. Contributed to multi-tenancy architecture, dynamic themes, and reusable global components while strengthening complex UI debugging.",
  },
  {
    role: "Senior Software Engineer",
    company: "Adhanam Infotech Private Limited",
    duration: "Jan 2022 - Sep 2024",
    summary:
      "Leveraged React to design and develop user-centric web applications. Integrated UI/UX design principles, collaborated with cross-functional teams, and delivered responsive, feature-rich interfaces.",
  },
  {
    role: "ReactJS Developer",
    company: "Isithora Software Solution",
    duration: "Sep 2021 - Dec 2021",
    summary:
      "Created modern React applications with a focus on performance and user experience. Collaborated with designers to translate concepts into intuitive interfaces and used Redux to improve application stability.",
  },
];

const education = {
  degree: "BCA",
  institution: "Sir Issac Newton College, Nagapattinam",
  duration: "2020",
  summary:
    "Completed Bachelor of Computer Applications with a strong foundation in computer science and software development.",
};

const TimelineCard = ({ title, children }) => (
  <div className="flex-1 flex items-stretch justify-center">
    <fieldset
      data-aos="zoom-in"
      className="w-full max-w-[380px] flex-grow h-full min-h-[500px] p-5 py-12 sm:py-8 sm:p-2 border rounded-lg shadow-lg bg-white"
    >
      <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
        {title}
      </legend>
      <div className="relative h-full">
        <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
          <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
          <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
          <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
        </div>
        <div className="flex flex-col gap-1 border-2 border-yellow-400 p-3 rounded-lg">
          {children}
        </div>
      </div>
    </fieldset>
  </div>
);

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
        {experiences.map((experience) => (
          <TimelineCard key={`${experience.company}-${experience.duration}`} title="Experience">
            <h1 className="text-[1.4rem] font-semibold leading-tight sm:text-xl">
              {experience.role}
            </h1>
            <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
              {experience.company}
              {experience.client ? ` (Client: ${experience.client})` : ""}
            </span>
            <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
              {experience.duration}
            </span>
            <p className="text-[.9rem] text-justify break-words text-gray-500">
              {experience.summary}
            </p>
          </TimelineCard>
        ))}

        {/* Education */}
        <TimelineCard title="Education">
          <h1 className="text-[1.4rem] font-semibold sm:text-xl">
            {education.degree}
          </h1>
          <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
            {education.institution}
          </span>
          <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
            {education.duration}
          </span>
          <p className="text-[.9rem] text-justify text-gray-500">
            {education.summary}
          </p>
        </TimelineCard>
      </div>
    </div>
  );
};

export default Resume;
