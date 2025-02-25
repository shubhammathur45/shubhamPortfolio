import HeroImage from '../assets/shubhampicture.png';
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black to-gray-800 flex items-center justify-center">
        {/* Card Container - Applies only for medium screens and above */}
        <div className="w-full md:w-2/3 bg-gradient-to-b from-black to-gray-800 md:rounded-2xl md:shadow-2xl md:shadow-cyan-500/50 md:p-8">
          <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">Hi! I am</h2>
              <h2 className="text-4xl sm:text-6xl font-bold text-white font-mono overflow-hidden whitespace-nowrap border-b-4 animate-underline duration-1000 border-r-2">
                Shubham Mathur
              </h2>
              <p className="text-gray-500 py-4 max-w-md">
                I am a passionate full stack developer with expertise in MERN stack.
              </p>
              <div className="flex gap-4 justify-start">
                {/* Experience Button */}
                <Link
                  to="experience"
                  smooth
                  duration={500}
                  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
                >
                  Experience
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowRight size={25} className="ml-1" />
                  </span>
                </Link>
                {/* About Me Button */}
                <Link
                  to="about"
                  smooth
                  duration={500}
                  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
                >
                  About Me
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowRight size={25} className="ml-1" />
                  </span>
                </Link>
              </div>
            </div>
      
            {/* Profile Image */}
            <div className='pt-16 md:pt-8'>
              <img
                src={HeroImage}
                alt="my profile"
                className="rounded-2xl mx-auto md:w-2/3 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home;