import Typewriter from 'typewriter-effect';
import OwnImage from './Image';


const Hero = () => {
    return (
        <div className="hero-bg flex flex-col justify-center  z-10">
            <div className="hero-content w-screen p-12 mt-14">
                <div className=" block md:grid grid-cols-2 gap-12 mt-10 md:mt-0">
                    <div className="text text-light flex flex-col justify-center items-start">
                        <h1 className=" text-center  mx-auto md:mx-0  text-2xl mt-10 md:mt-3 lg:text-left lg:text-3xl font-bold">Re-invent your hiring with advanced AI-powered <span className="text-orange">  <br />Resume screening</span> and <span className="text-orange"> Personality profiling  </span>
                        </h1>
                      
                        <span className=" relative mx-auto  lg:mx-0 lg:top-0 top-96 mt-12 text-2xl font-bold inline-flex">Look for the right <span className=" text_slide text-orange ml-2 relative  bottom-2 ">
                                                        
                                                        <Typewriter
                                options={{
                                    strings: ['Personality', 'Skill' , 'Experience'],
                                    autoStart: true,
                                    loop: true,
                                }}
                                />
                       
                        <img src="images/Vector 2094.svg" className="h-10 transform -rotate-3  relative left-3 bottom-5" alt="" /></span></span>
                    </div>
                    <div className="  relative  bottom-28 md:bottom-7 md:ml-2  lg:ml-5   lg:w-full mx-auto  w-96 h-96  ">
                        <OwnImage  src="/images/Group 12912.svg" layout="fill"  width={500}  alt="" />
                    </div>
                </div>
                <div className="flex relative bottom-16 left-7 md:bottom-0 md:left-0  justify-end m-8"><OwnImage  src="/images/Group 12353.svg"  layout="fill"  width={50} alt="" /></div>
            </div>
        </div>
    )
}

export default Hero
