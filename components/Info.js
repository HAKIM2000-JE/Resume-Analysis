import Image from 'next/image'
import OwnImage from './Image';

const Info = () => {
    return (
        <div className="bg-white py-20  ">
            <div className="text-center text-3xl relative bottom-20">
                <h2 className="font-bold">What <span className="text-orange">Holistic</span> Approach to hiring</h2>
            </div>
            <div className=" block md:flex  mx-auto w-9/12 md:w-11/12 lg:w-9/12 laptop:justify-evenly justify-between mt-28 relative bottom-20">
                    <div className="card mb-20   ">
                        <OwnImage src="/images/Group 12937.svg" layout="fill"  width={100} alt="" />
                        <h3 className="mt-7 md:text-laptop laptop:text-xl text-2xl">Hiring team <span className="text-orange">collaboration</span></h3>
                        <p className="text-xl laptop:text-xl  md:text-md mt-2">Your hiring team can share their comments <br /> and feedack hasstle-free</p>
                    </div>
                    <div className="card mb-20  md:ml-20 laptop:ml-0  ">
                        <OwnImage src="/images/Group 12948.svg" layout="fill"  width={100}  alt="" />
                        <h3 className="mt-7 md:text-laptop laptop:text-xl text-2xl">Schedule <span className="text-orange">Assessments</span></h3>
                        <p className="text-xl laptop:text-xl  md:text-md mt-2">Screen for job skills and experience <br /> even before you schedule an interview</p>
                    </div>
                    <div className="card mb-20 md:ml-20 laptop:ml-0  ">
                        <OwnImage src="/images/Group 12947.svg" layout="fill"  width={100}  alt="" />
                        <h3 className="mt-7  md:text-laptop laptop:text-xl text-2xl">Unique <span className="text-orange">Job specific URL</span></h3>
                        <p className="text-xl laptop:text-xl  md:text-md mt-2">Share your job postings with candidates, <br /> vendors and to display in your website</p>
                    </div>
            </div>
            <div className="block md:flex  mx-auto w-9/12 md:w-11/12 lg:w-9/12 laptop:justify-evenly justify-between mt-10 relative bottom-20">
                    <div className="card mb-20">
                        <OwnImage src="/images/Group 12963.svg" layout="fill"  width={100} alt="" />
                        <h3 className="mt-7 md:text-laptop laptop:text-xl text-2xl">Integrated <span className="text-orange">Video Interviews</span></h3>
                        <p className="text-xl laptop:text-xl  md:text-md mt-2">Schedule inbuilt on-line video interviews</p>
                    </div>
                    <div className="card mb-20 md:ml-20 laptop:ml-0">
                        <OwnImage src="/images/Group 12962.svg" layout="fill"  width={100} alt="" />
                        <h3 className="mt-7 md:text-laptop laptop:text-xl text-2xl">Hiring <span className="text-orange">Analytics</span></h3>
                        <p className="text-xl laptop:text-xl  md:text-md mt-2">Get a better understanding of your hiring <br /> process with our analytics dashboard</p>
                    </div>
                    <div className="card mb-20 md:ml-20 laptop:ml-0">
                        
                            <OwnImage src="/images/Group 13001.svg" layout="fill"  width={140}  alt="" />
                       
                        <h3 className="mt-7 md:text-laptop laptop:text-xl text-2xl">Build <span className="text-orange">Resume database</span></h3>
                        <p className="text-xl laptop:text-xl  md:text-md mt-2">Build your repository of talent pool</p>
                    </div>
            </div>
        </div>
    )
}

export default Info;
