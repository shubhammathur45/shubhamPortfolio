import { MdDownloading } from "react-icons/md";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full md:w-2/3 h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-15">
          With over 5 years of experience in full stack development, I have
          honed my skills in building robust, scalable, and user-friendly web
          applications. My expertise lies in the MERN Stack (MongoDB,
          Express.js, React, and Node.js), which I leverage to create seamless
          and efficient solutions. I am passionate about writing clean,
          optimized code and ensuring an exceptional user experience, always
          striving to balance functionality with performance. As a tech-savvy
          professional, I stay updated with the latest industry trends and tools
          to deliver cutting-edge solutions.
        </p>
        <br />
        <p className="text-xl">
          In addition to my technical expertise, I thrive in collaborative
          environments, working closely with cross-functional teams to bring
          ideas to life. I have a strong foundation in both front-end and
          back-end development, enabling me to tackle complex challenges and
          deliver end-to-end solutions. Whether it’s designing intuitive
          interfaces or optimizing server-side performance, I am committed to
          creating applications that are both innovative and impactful. My goal
          is to continue pushing the boundaries of technology while delivering
          value-driven results.
        </p>
        <a
          href="/ShubhamMathur_Resume.docx"
          download={true} // The name of the file to be downloaded
          className="group hover:scale-90 duration-300 text-white w-fit px-6 py-3 my-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
        >
          Download Resume
          <span className="group-hover:scale-150 duration-300">
            <MdDownloading size={25} className="ml-1" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default About;
