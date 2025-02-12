import React from 'react'

    const experiences = [
        {
          id: 1,
          company: "Deloitte Canada",
          title: "Solution Specialist - Full stack developer",
          date: "May 2021 - Present",
          description: [
            "Developed and maintained scalable web applications using HTML, CSS, React and Node.js.",
            "Requirement gathering from clients.",
            "Collaborated with cross-functional teams to deliver high-quality software solutions.",
            "Implemented CI/CD pipelines to automate deployment processes.",
            "Led a team of 9 members with different skill sets to deliver 3 microsites for Deloitte internal use",
            "Reponsible for SEO optimization of the site.",
            "Created back-end services using Node.js and Express.",
            "Implemented best practices and optimized code to reduce response time by 35%"
          ],
        },
        {
          id: 2,
          company: "Communitech",
          title: "UX/UI Designer - Intern",
          date: "September 2020 - December 2020",
          description: [
            "Created detailed wireframes, storyboards, user flows and process flows to effectively communicate design ideas",
            "Worked with the development team to ensure smooth transition from concept to production ready assets.",
            "Developed style guide for visual elements such as branding systems, typegraphy standards, color schemes.",
            "Responsible for developing and designing components for the website with major emphasis on designing using Tailwind CSS"
          ],
        },
        {
          id: 3,
          company: "Cognizant Technology Solutions",
          title: "Programmer Analyst - Web Developer",
          date: "September 2017 - May 2019",
          description: [
            "Maintained full stack web applications using Javascript, NodeJS, ReactJS, HTML, CSS, Postman, Github, Oracle Commerce Cloud",
            "Designed, built and documented RESTful APIs using Node JS and Express for interaction between front-end and back-end.",
            "Analyzed client requirements, developed new feature and fixed bugs on the website to ensure smooth user experience.",
            "Involved in Go-live phase which required extensive quality testing and fixing bugs on the production environment."
          ],
        },
      ];

  const ExperienceCard = ({ experience }) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {/* Timeline line */}
      <div className="absolute left-2 sm:left-24 h-full w-0.5 bg-white/20 group-first:top-4 group-last:h-10"></div>
      {/* Timeline dot */}
      <div className="absolute left-0 sm:left-20 w-4 h-4 rounded-full bg-blue-500 border-2 border-white transform -translate-x-1/2 top-6"></div>
      {/* Experience Card */}
      <div className="bg-gray-900/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-bold text-blue-400">{experience.company}</h3>
        <p className="text-gray-300">{experience.title}</p>
        <p className="text-sm text-gray-400 mb-4">{experience.date}</p>
        <ul className="list-disc list-inside space-y-2">
          {experience.description.map((point, index) => (
            <li key={index} className="text-gray-300">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div name="experience" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Experience
