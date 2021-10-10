import { useState, useEffect } from "react"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import ScrollLock, { TouchScrollable } from 'react-scrolllock';

import { Swiper, SwiperSlide } from 'swiper/react'

import OwnImage from './Image';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

import 'swiper/css';


import {
    CheckIcon,
    ChevronRightIcon

} from '@heroicons/react/outline'




import Image from 'next/image'
const Services = () => {

    const [progress, setProgress] = useState(25);
    const [section, setSection] = useState(1);
    const [lockscroll, setLockscroll] = useState(false)

    const [imagePosition, setimagePosition] = useState('');
    const [ContentPosition, setContentPosition] = useState('');
    const [img, setImg] = useState('Group 12974.png');

    const [allow, setallow] = useState(true)

    const [ismobile , setismobile] = useState(false)


    const scrolling = ()=>{
      
           
            if (window.scrollY > 780 && window.scrollY<793 ) {
                setLockscroll(true)
              
              } else{
                  setLockscroll(false)
              }

        
     
    
    }

    const checkview =()=>{

        if(window.innerWidth<1200){
            setismobile(true)
        }else{
            setismobile(false)
        }

    }


    useEffect(() => {

        if(allow){
            window.addEventListener("scroll", scrolling);
        }else {
            window.removeEventListener("scroll", scrolling)
        }
       
       
        }, []);

    useEffect(() => {
        
        switch(section){
            case 1:
                setProgress(25);
                setImg('Group 12974.png');
                break;
            case 2:
                setProgress(50);
                setImg('Group 12835.png');
                break;
            case 3:
                setProgress(75);
                setImg('Group 12998.png');
                break;
            case 4:
                setProgress(100);
                setImg('Group 13002.png');
                
                break;
            default:
                setProgress(25);
                setImg('Group 12974.png');
        }

     

   
        

      

        window.addEventListener('resize', checkview)

       
       

        
    }, [section])


    useEffect(() => {
        const timer = setTimeout(() => {
            
         var activesection = (section+1)%5
         if(activesection==0){
            setallow(false)
             setSection(1)

             
             setLockscroll(false)
            
         }else{
         setSection(activesection)
    


         }
                  
      
            
           
          
        }, 3000);
        return () => {clearTimeout(timer)    };
        
       
    }, [lockscroll , section])



        
       

        
  


   

    return (

        <ScrollLock isActive={lockscroll}>
        <div className="bg-light">

        {
            !ismobile?(
                 <>
                 <div className={`  progress bg-orange h-3 `} style={{width: `${progress}%`}}></div>
           
                 <div className={` service-content block lg:flex py-16 bg-white`} >
     
     
     
                
                     <div className="service-points flex flex-col md:ml-14 w-11/12 mx-auto lg:w-5/12  " >
     
                     <div className={`flex my-5 ${section !== 1 ? 'ml-6' : ''}`}>
                         <div className={`border-4 rounded-full ${section === 1 ? 'border-orange' : 'border-white'}`}>
                         </div>
                         <div 
                             className={`${section === 1 ? 'shadow-xl py-5 px-6 rounded-md rounded-tl-none rounded-bl-none' : ''} cursor-pointer w-full`}
                             onClick={() => setSection(1)}
                             >
                             <h2 className="text-2xl font-bold">AI powered <span className="text-orange">resume screening</span></h2>
                             <p className="text-gray-600 text-lg mt-2">
                             Screen hundreds of resumes in less than a minute and look <br /> beyond skill keyword match
                             </p>
                         </div>
                     </div>
     
                     <div className={` hidden md:flex my-5 ${section !== 2 ? 'ml-6' : ''}`}>
                         <div className={`border-4 rounded-full ${section === 2 ? 'border-orange' : 'border-white'}`}>
                         </div>
                         <div 
                             className={`${section === 2 ? 'shadow-xl rounded-md py-5 px-6 rounded-tl-none rounded-bl-none' : ''} cursor-pointer w-full`}
                             onClick={() => setSection(2)}
                             >
                             <h2 className="text-2xl font-bold">Customise <span className="text-orange">hiring workflow</span> for every job</h2>
                             <p className="text-gray-600 text-lg mt-2">
                             Your hiring team can now customise the number of <br /> screening stage as per the job requirements </p>
                         </div>
                     </div>
     
                     <div className={`hidden md:flex my-5 ${section !== 3 ? 'ml-6' : ''}`}>
                         <div className={`border-4 rounded-full ${section === 3 ? 'border-orange' : 'border-white'}`}>
                         </div>
                         <div 
                             className={`${section === 3 ? 'shadow-xl rounded-md py-5 px-6 rounded-tl-none rounded-bl-none' : ''} cursor-pointer w-full`}
                             onClick={() => setSection(3)}
                             >
                             <h2 className="text-2xl font-bold">AI-powered <span className="text-orange">personality profiling</span></h2>
                             <p className="text-gray-600 text-lg mt-2">
                             Gain insight into a job applicants cultural fit with our video <br /> based pre-hire assessments and personality reports
                             </p>
                         </div>
                     </div>
     
                     <div className={`hidden md:flex  my-5 ${section !== 4 ? 'ml-6' : ''}`}>
                         <div className={`border-4 rounded-full ${section === 4 ? 'border-orange' : 'border-white'}`}>
                         </div>
                         <div 
                             className={`${section === 4 ? 'shadow-xl rounded-md py-5 px-6 rounded-tl-none rounded-bl-none' : ''} cursor-pointer w-full`}
                             onClick={() => setSection(4)}
                             >
                             <h2 className="text-2xl font-bold">Enabling hiring teams to <span className="text-orange">collaborate on a <br /> single platform</span></h2>
                             <p className="text-gray-600 text-lg mt-2">
                             Speed up the recruitment process by bringing hiring <br /> manager, recruiters, interview panelists, and candidates <br /> on a single platform
                             </p>
                         </div>
                     </div>
                 </div>
                 
                  
                    
                     <div className={`w-3/5 flex  mb-44 ml-44  mt-1 mx-auto lg:mt-0  mr-28 md:mr-14 items-center`}>
                         <div className={` ${section === 2 ? 'flex flex-col mx-auto' : ''}`}>
                             <OwnImage src={`/images/${img}`} layout="fill"  width={600}   alt="" />
                             
                             { section === 2 ? <div className="relative left-36"><OwnImage src="/images/Group 12979.png" layout="fill"  width={300}    alt="" /></div> : '' }
                         </div>
                     </div>
     
                     
                 </div>
                 </>
            ):(
                <>
                <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className=""
            >

                    
                <SwiperSlide className=" w-full ">
                <div className={`flex my-5 w-9/12 mx-auto `}>
                <div className={`border-4 rounded-full  border-orange`}>
                </div>
                <div 
                    className={`shadow-xl py-5 px-6 rounded-md rounded-tl-none rounded-bl-none cursor-pointer w-full`}
                    onClick={() => setSection(1)}
                    >
                    <h2 className="text-2xl font-bold">AI powered <span className="text-orange">resume screening</span></h2>
                    <p className="text-gray-600 text-lg mt-2">
                    Screen hundreds of resumes in less than a minute and look <br /> beyond skill keyword match
                    </p>
                </div>
            </div>
            <div className={`w-3/5 flex   mt-1 mx-auto lg:mt-0   items-center`}>
            <div >
                <img className={` mx-auto lg:top-44 lg:right-60`} src={`/images/Group 12974.png`} alt="" />
                
              
            </div>
        </div>

                   
                </SwiperSlide>

                <SwiperSlide className=" w-full ">
                <div className={`  flex my-5 w-9/12 mx-auto  `}>
                <div className={`border-4 rounded-full border-orange`}>
                </div>
                <div 
                    className={`shadow-xl rounded-md py-5 px-6 rounded-tl-none rounded-bl-none w-full`}
                    onClick={() => setSection(2)}
                    >
                    <h2 className="text-2xl font-bold">Customise <span className="text-orange">hiring workflow</span> for every job</h2>
                    <p className="text-gray-600 text-lg mt-2">
                    Your hiring team can now customise the number of <br /> screening stage as per the job requirements </p>
                </div>
            </div>

            <div className={`w-3/5 flex   mt-1 mx-auto lg:mt-0  mr-28 md:mr-14 items-center`}>
            <div className={` flex flex-col mx-auto`}>
                <img className={` mx-auto lg:top-44 lg:right-60`} src={`/images/Group 12835.png`} alt="" />
                
                { <img src="/images/Group 12979.png" className="w-3/5 mx-auto h-36" alt="" />  }
            </div>
        </div>
                   
                </SwiperSlide>


                <SwiperSlide className=" w-full  h-5/6 ">
                <div className={`flex my-5 w-9/12 mx-auto `}>
                <div className={`border-4 rounded-full border-orange`}>
                </div>
                <div 
                    className={` shadow-xl rounded-md py-5 px-6 rounded-tl-none rounded-bl-none cursor-pointer w-full`}
                    onClick={() => setSection(3)}
                    >
                    <h2 className="text-2xl font-bold">AI-powered <span className="text-orange">personality profiling</span></h2>
                    <p className="text-gray-600 text-lg mt-2">
                    Gain insight into a job applicants cultural fit with our video <br /> based pre-hire assessments and personality reports
                    </p>
                </div>
            </div>
                 
            <div className={`w-3/5 flex   mt-1 mx-auto lg:mt-0  mr-28 md:mr-14 items-center`}>
            <div >
                <img className={` mx-auto lg:top-44 lg:right-60`} src={`/images/Group 12998.png`} alt="" />
                
              
            </div>
        </div>

                   
                </SwiperSlide>


                <SwiperSlide className=" w-full py-5 ">
                <div className={` flex my-5 w-9/12 mx-auto `}>
                <div className={`border-4 rounded-full border-orange `}>
                </div>
                <div 
                    className={` shadow-xl rounded-md py-5 px-6 rounded-tl-none rounded-bl-none cursor-pointer w-full`}
                    onClick={() => setSection(4)}
                    >
                    <h2 className="text-2xl font-bold">Enabling hiring teams to <span className="text-orange">collaborate on a <br /> single platform</span></h2>
                    <p className="text-gray-600 text-lg mt-2">
                    Speed up the recruitment process by bringing hiring <br /> manager, recruiters, interview panelists, and candidates <br /> on a single platform
                    </p>
                </div>
            </div>

            <div className={`w-3/5 flex   mt-1 mx-auto lg:mt-0  mr-28 md:mr-14 items-center`}>
            <div >
                <img className={` mx-auto lg:top-44 lg:right-60`} src={`/images/Group 13002.png`} alt="" />
                
              
            </div>
        </div>
                   
                </SwiperSlide>
               
            </Swiper>
                   

            <span className="relative top-7 left-36 text-orange  ">Swipe to see other Services &gt; &gt; </span>
                </>
            )
        }
                
           
       </div>
        </ScrollLock>
        
    )
}

export default Services
