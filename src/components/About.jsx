import React from 'react';

const About = () => {
    return (
        <div name="About" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="maxw-screen-lg p-4 mx-auto flex flex-col justify-center w-2/3 h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>
                <p className="text-xl mt-15">
                With over 5 years of experience in full stack development, I have honed my skills in building robust, scalable, and user-friendly web applications. My expertise lies in the MERN Stack (MongoDB, Express.js, React, and Node.js), which I leverage to create seamless and efficient solutions. I am passionate about writing clean, optimized code and ensuring an exceptional user experience, always striving to balance functionality with performance. As a tech-savvy professional, I stay updated with the latest industry trends and tools to deliver cutting-edge solutions.

                </p>
                <br />
                <p className="text-xl">
                In addition to my technical expertise, I thrive in collaborative environments, working closely with cross-functional teams to bring ideas to life. I have a strong foundation in both front-end and back-end development, enabling me to tackle complex challenges and deliver end-to-end solutions. Whether it’s designing intuitive interfaces or optimizing server-side performance, I am committed to creating applications that are both innovative and impactful. My goal is to continue pushing the boundaries of technology while delivering value-driven results.

                </p>
            </div>
        </div>
    )

}

export default About;