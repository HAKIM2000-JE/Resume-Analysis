const Hero = () => {
    return (
        <div className="hero-bg flex flex-col justify-center z-10">
            <div className="hero-content w-screen p-12 mt-14">
                <div className="grid grid-cols-2 gap-12">
                    <div className="text text-light flex flex-col justify-center items-start">
                        <h1 className="text-3xl font-bold">Re-invest your hiring with advanced <br /> AI-powered <span className="text-orange">Resume screening</span> and <span className="text-orange">Personality profiling</span>
                        </h1>
                        <span className="mt-12 text-2xl font-bold inline-flex">Look for the right <span className="ml-2"><img src="images/Personality.png" className="w-32 h-10" alt="" /><img src="images/Vector 2094.png" className="h-10 transform -rotate-3 -mt-3" alt="" /></span></span>
                    </div>
                    <div className="img">
                        <img src="images/Group 12909.png" alt="" />
                    </div>
                </div>
                <div className="flex justify-end m-8"><img src="images/Group 12692.png" alt="" /></div>
            </div>
        </div>
    )
}

export default Hero
