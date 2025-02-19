import { useEffect } from 'react'; // Import useEffect for React lifecycle management

const MiniCircle = () => {
    useEffect(() => {
        // Add the mousemove event listener inside useEffect to ensure it runs after the component mounts
        const handleMouseMove = (dets) => {
          // Get the scroll position
          const scrollX = window.scrollX;
          const scrollY = window.scrollY;
    
          // Calculate the cursor's position relative to the document
          const cursorX = dets.clientX + scrollX;
          const cursorY = dets.clientY + scrollY;
    
          // Move the elements to the cursor's position
          const minicircle = document.querySelector('#minicircle');
          const minicircle2 = document.querySelector('#minicircle2');
    
          if (minicircle) {
            minicircle.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
          }
          if (minicircle2) {
            minicircle2.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
          }
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
     <div id="minicircle" className="hidden md:block w-8 h-8 absolute z-50 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full duration-100">
      
      </div>
       <div id="minicircle2" className="hidden md:block w-8 h-8 absolute z-50 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full duration-200">
        
       </div>
     </>
  )
}

export default MiniCircle
