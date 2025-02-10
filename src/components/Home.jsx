import React from 'react';
import HeroImage from '../assets/shubhampicture.png';
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white">Hi! I am</h2>
                    <h2 className="text-4xl sm:text-6xl font-bold text-white font-mono overflow-hidden whitespace-nowrap border-b-4 animate-underline duration-1000">Shubham Mathur.
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I am a passionate full stack developer with expertise in MERN stack.
                    </p>
                    <div className="flex gap-4"> {/* Added gap between buttons */}
                        <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Experience
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowRight size={25} className='ml-1' />
                            </span>
                        </button>
                        <Link to='about' smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            About Me
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowRight size={25} className='ml-1' />
                            </span>

                        </Link>
                    </div>
                </div>

                <div>
                    <img src={HeroImage} alt="my profile" className="hidden md:block rounded-2xl mx-auto md:w-2/3"></img>
                </div>
            </div>
        </div>
    )
}

export default Home;