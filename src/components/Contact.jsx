
const Contact = () => {
  return (
    <div name='contact me' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact Me</p>
            <p className='py-6'>
                Submit the form below to get in touch with me
            </p>
        </div>

        <div className='flex justify-center items-center'>
            <form action='https://getform.io/f/apjnmlka' method='POST' className='flex flex-col w-full md:w-1/2'>
            <input type='text' name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>
            <input type='text' name='email' placeholder='Enter your email' className='p-2 bg-transparent border-2 my-4 rounded-md text-white focus:outline-none'></input>
            <textarea name='message' rows='10' placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
            <button
            className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]'>
                Like what you see? Lets connect!
            </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
