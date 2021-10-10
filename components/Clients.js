import { useState } from 'react';
import CountUp from 'react-countup';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import OwnImage from './Image';
const Clients = () => {

    const [progress, setProgress] = useState(70);


    const [start, setstart] = useState(false)


    function handleInputChange(e) {
        let target = e.target
        if (e.target.type !== 'range') {
          target = document.getElementById('range')
        } 
        const min = target.min
        const max = target.max
        const val = target.value
        setProgress(val)
        target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
        
      }

    return (
        <div>

        {/* Section 01 */}
       { /*<div className="w-5/6 mx-auto flex justify-between items-center py-14 pl-10">
            <OwnImage src="/images/Group 133001.png" alt="" />
            <OwnImage src="/images/Group 133102.png" alt="" />
            <OwnImage src="/images/Group 133001.png" alt="" />
            <OwnImage src="/images/Group 133102.png" className="hidden lg:flex" alt="" />
            <OwnImage src="/images/Group 12485.png" className="hidden lg:flex" alt="" />
            <OwnImage src="/images/Group 133001.png" className="hidden lg:flex" alt="" />
            <OwnImage src="/images/Group 12485.png" className="hidden lg:flex" alt="" />
    </div>*/}


    <div className=" w-7/12 mx-auto mt-16 ">
    <Carousel autoPlay={true} infiniteLoop={true} transitionTime={1000} interval={2700} showStatus={false} showThumbs={false} >
                <div>
                <ul className="bg-gray-700 w-full justify-between">
           
         
              
          <OwnImage  src="/images/image 69.svg"  layout="fill"  width={70}  alt="" />
                               

          
          <div className="mt-2">
           <OwnImage src="/images/Rectangle 3908.svg" layout="fill"  width={180} alt="" />
             
           </div>
           <div className="mt-4">
           <OwnImage src="/images/image 67.svg" layout="fill"  width={130} alt="" />


           </div>
           <OwnImage src="/images/MicrosoftTeams-image (4).svg" layout="fill"  width={90} alt="" />
           
         
   
               
   
             
          
   
                                  
              </ul>
                 
                </div>
                <div>
                <ul className="bg-gray-700 w-full justify-between">
           
         
           <OwnImage src="/images/image 69.svg" layout="fill"  width={70} alt="" />
           <div className="mt-2">
           <OwnImage src="/images/Rectangle 3908.svg" layout="fill"  width={180} alt="" />
             
           </div>
           <OwnImage src="/images/MicrosoftTeams-image (4).svg" layout="fill"  width={90} alt="" />
           <div className="mt-4">
           <OwnImage src="/images/MicrosoftTeams-image (3).svg" layout="fill"  width={170} alt="" />
             
           </div>
       
         
   
               
   
             
          
   
                                  
              </ul>
                
                </div>
                <div>
                <ul className="bg-gray-700 w-full justify-between">
           
         
           <OwnImage src="/images/image 69.svg" layout="fill"  width={70} alt="" />
          



           <div className="mt-4">
           <OwnImage src="/images/image 67.svg" layout="fill"  width={130} alt="" />


           </div>
         
           <OwnImage src="/images/MicrosoftTeams-image (4).svg" layout="fill"  width={90} alt="" />

           <div className="mt-4">
           <OwnImage src="/images/MicrosoftTeams-image (3).svg" layout="fill"  width={170} alt="" />
             
           </div>
           
         
   
               
   
             
          
   
                                  
              </ul>
                    
                </div>
            </Carousel>
    </div>

        
    

  

        {/* Section 02 */}
        <div className="  grid grid-cols-2 text-center w-5/6 mx-auto pt-6 pb-12">
            <div className="flex items-center py-8  ml-0 md:ml-10">
                
                {start?(
                <h2 className="text-orange text-md md:text-xl lg:text-3xl font-bold">

                 
                    +<CountUp end={770000} duration={5} delay={2}  />
                </h2>
                       
                  
                      
                ):(<></>)

                }
                <h4 className="text-left ml-10 text-sm md:text-2xl leading-7">Candidates screened through <br /> <span className="text-orange">our AI-powered Personality Profiling</span></h4>
            </div>
            <div className="flex items-center pl-5 md:pl-24  py-8 border-l-2 border-orange">


            {start?(
                <h2 className="text-orange text-md md:text-xl lg:text-3xl font-bold">+<CountUp end={770000} duration={5} delay={2}  /></h2>

                  
                      
                ):(<></>)

                }
                <h4 className="text-left ml-10 text-sm md:text-2xl leading-7">Candidates screened through <br /> <span className="text-orange">our AI-powered assessment model</span></h4>
            </div>
        </div>

        {/* Section 03 */}
        <div className=" block lg:flex bg-white">
            <div className="w-2/5 text-center py-10 bg-light" style={{clipPath: 'polygon(0 0, 100% 0%, 90% 100%, 0% 100%)'}}>
                <h2 className=" text-lg md:text-3xl font-bold pl-10">Our clients </h2>
            </div>
            <div className="w-3/5 flex  mt-10 mx-auto lg:mx-0 flex-col justify-center items-center">
                <ul className="flex justify-between" style={{width: '430px'}}>
                    <li className="cursor-pointer" >Engineering</li>
                    <li className="cursor-pointer" >Healthcare</li>
                    <li className="cursor-pointer" >Recruitment</li>
                    <li className="cursor-pointer" >IT</li>
                    <li className="cursor-pointer" >All</li>
                </ul>
                <div className=" slide_container mt-12  shadow-inner rounded-full h-3   lg:mx-0 flex" style={{width: '430px'}}>
                   {/* <div className="bg-orange h-full w-full rounded-full" style={{width: `${progress}%`}}>
</div>*/}
                    <input type="range" value={progress} min="0" max="100" id="range" onChange={handleInputChange} />
                    {/*<OwnImage src="/images/Slider Button.png" className={`h-10 -mt-3 ${progress === 100 ? 'hidden' : '-ml-4'}`} alt="" />*/}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Clients
