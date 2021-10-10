import Typewriter from 'typewriter-effect';
import OwnImage from './Image';


const Hero = () => {
    return (
        <div className="hero-bg flex flex-col justify-center  z-10">
            <div className="hero-content w-screen p-12 mt-14">
                <div className=" block md:grid grid-cols-2 gap-12  md:mt-0">
                    <div className="text text-light flex flex-col justify-center items-start">
                        <h1 className=" text-center  mx-auto md:mx-0  text-2xl mt-10 md:mt-3 lg:text-left lg:text-3xl font-bold">Re-invent your hiring with advanced AI-powered <span className="text-orange">  <br />Resume screening</span> and <span className="text-orange"> Personality profiling  </span>
                        </h1>
                      
                        <span className=" relative mx-auto md:w-96   lg:mx-0 lg:top-0  top-96 md:top-0 mt-12 text-2xl font-bold inline-flex">Look for the right <span className=" text_slide text-orange ml-2 relative  bottom-2 ">
                                                        
                                                        <Typewriter
                                options={{
                                    strings: ['Personality', 'Skill' , 'Experience'],
                                    autoStart: true,
                                    loop: true,
                                }}
                                />

                                <div className="">
                                </div>
                       
                        <OwnImage src="/images/Vector 2094.svg" layout="fill"  width={100} alt="" /></span></span>
                    </div>
                    <div className="  relative  bottom-28 md:bottom-7 md:ml-2  lg:ml-5   lg:w-full mx-auto grid place-items-center  md:w-96 md:h-96  ">
                         <OwnImage  src="/images/Group 12912.svg" layout="fill"  width={400}  alt="" />
                      
                    </div>
                </div>
                <div className="flex relative bottom-7 left-16 md:bottom-0 md:left-0  justify-end m-8"><OwnImage  src="/images/Group 12353.svg"  layout="fill"  width={50} alt="" /></div>
            </div>
        </div>
    )
}

export default Hero
