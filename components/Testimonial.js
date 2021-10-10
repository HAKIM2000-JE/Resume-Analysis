import { useState , useEffect } from "react"

import ReactPlayer from 'react-player'
import OwnImage from './Image';
const Testimonial = () => {

    const [section, setSection] = useState(1);
    const [playing, setplaying] = useState(false)



    useEffect(() => {
  const timer = setTimeout(() => {
      if(!playing){
                var mytime = (section+1)%5
            if(mytime==0){
                setSection(1)

            }else{
                
                setSection(mytime)
            }

      }
     
    
  }, 4000);
  return () => clearTimeout(timer);
}, [section , playing]);






    return (
        <div className="bg-white pb-32">
        {
            (section === 1 || section === 3) ?
            <div className="p-20 bg-white">
                <div className=" block lg:grid  grid-cols-2">
                    <div className="testimonial py-0 px-5 lg:py-5 lg:px-24">
                        <div className=" flex justify-between">
                            <div className="quote my-10">
                                <div className="flex">
                                    <img src="/images/quote.svg" className="w-4 h-4 inline -mt-2 mr-2" alt="" /> 
                                    <p className="text-xl">
                                        Lorem Ipsum is a great font Lorem Ipsum is a great qfeg <br /> font Lorem Ipsum is a great font Lorem Ipsum is gdgdgd <br /> great font gdg
                                    </p>
                                </div>
                                <div className="w-full text-right">
                                <div className="text-orange text-3xl font-bold mr-14">//</div>
                                </div>
                            </div>
                            <OwnImage  src="/images/Vector 1959.png" layout="fill"  width={70}  alt="" />
                        </div>
                        <div className="w-full text-right flex justify-end items-center p-5">
                            <h4 className="mr-4">Kiran Chennadi <small className="block text-sm">Head of HR & Talent Acquisition</small></h4>
                            <OwnImage  src="/images/Brian 1.svg" layout="fill"  width={70} alt="" />
                        </div>
                        <div className="bg-light flex p-4 mt-5">
                            <OwnImage src="/images/MicrosoftTeams-image (4) (1).svg" layout="fill"  width={70} alt="" />
                            <h3 className="text-2xl font-bold self-center text-gray-600 ml-5">Posidex Technologies</h3>
                        </div>
                    </div>
                    <div className="video mt-5 ml-2 mx-auto w-9/12 rounded-full transform-none p-0 ">
                    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' onPlay={()=>{ setplaying(true)
                        }} onPause={()=>setplaying(false)}  className="w-full h-full rounded-2xl" style={{borderRadius:'150px'}}
                   />
                    </div>
                </div>
            </div>
            :
            <div className="bg-white px-20 py-32">
            <div className="flex items-start">
                <OwnImage src="/images/quote.png" layout="fill"  width={70} alt="" /> 
                <p className="text-2xl">
                Lorem Ipsum Lorem Ipsum is a great font Lorem Ipsum is a great qfeg font Lorem Ipsum is a great font Lorem Ipsum is gdgdgd <br /> great fon Ipsum is a great font Lorem Ipsum is a great qfeg font Lorem Ipsum is a great font Lorem Ipsum is gdgdgd great fon a <br /> great font Lorem Ipsum is a great qfeg Lorem Ipsum is a great font Lorem Ipsum is a great qfeg font Lorem Ipsum is a great <br /> ont L Ipsum is a great font Lorem Ipsum is a great qfeg fongdgd great fon
                </p>
            </div>
            <div className="w-full text-right">
                <div className="text-orange text-4xl font-bold">//</div>
            </div>
            <div className="flex justify-end">
            <div className="w-full text-right flex justify-end items-center p-5">
            <h4 className="mr-4">Kiran Chennadi <small className="block text-sm">Head of HR & Talent Acquisition</small></h4>
            <OwnImage src="/images/Brian 1.png" layout="fill"  width={70} alt="" />
        </div>
        <div className="bg-light flex p-4 mt-5">
            <img src="/images/MicrosoftTeams-image (4) (1).svg" alt="" />
            <h3 className="text-2xl font-bold self-center text-gray-600 ml-5">Posidex Technologies</h3>
        </div>
            </div>
        </div>
        }
        <div className="bg-white">
            <div className="flex justify-center">
                <div 
                    onClick={() => setSection(1)} 
                    className={`cursor-pointer border-4 rounded-full w-12 mx-1 ${section === 1 ? 'border-orange' : 'border-gray-300'}`}>
                </div>
                <div 
                    onClick={() => setSection(2)} 
                    className={`cursor-pointer border-4 rounded-full w-12 mx-1 ${section === 2 ? 'border-orange' : 'border-gray-300'}`}>
                </div>
                <div 
                    onClick={() => setSection(3)} 
                    className={`cursor-pointer border-4 rounded-full w-12 mx-1 ${section === 3 ? 'border-orange' : 'border-gray-300'}`}>
                </div>
                <div 
                    onClick={() => setSection(4)} 
                    className={`cursor-pointer border-4 rounded-full w-12 mx-1 ${section === 4 ? 'border-orange' : 'border-gray-300'}`}>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Testimonial
