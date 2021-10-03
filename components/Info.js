const Info = () => {
    return (
        <div className="bg-white py-20">
            <div className="text-center text-3xl">
                <h2 className="font-bold">What <span className="text-orange">value</span> do we add</h2>
            </div>
            <div className="flex justify-evenly mt-28">
                    <div className="card">
                        <img src="/images/Group 12937.png" alt="" />
                        <h3 className="mt-7 text-2xl">Hiring team <span className="text-orange">collaboration</span></h3>
                        <p className="text-xl mt-2">Your hiring team can share their comments <br /> and feedack hasstle-free</p>
                    </div>
                    <div className="card">
                        <img src="/images/Group 12948.png" alt="" />
                        <h3 className="mt-7 text-2xl">Schedule <span className="text-orange">Assessments</span></h3>
                        <p className="text-xl mt-2">Screen for job skills and experience <br /> even before you schedule an interview</p>
                    </div>
                    <div className="card">
                        <img src="/images/Group 12966.png" alt="" />
                        <h3 className="mt-7 text-2xl">Unique <span className="text-orange">Job specific URL</span></h3>
                        <p className="text-xl mt-2">Share your job postings with candidates, <br /> vendors and to display in your website</p>
                    </div>
            </div>
            <div className="flex justify-evenly my-28">
                    <div className="card">
                        <img src="/images/Group 12965.png" alt="" />
                        <h3 className="mt-7 text-2xl">Integrated <span className="text-orange">Video Interviews</span></h3>
                        <p className="text-xl mt-2">Schedule inbuilt on-line video interviews</p>
                    </div>
                    <div className="card">
                        <img src="/images/Group 12962.png" alt="" />
                        <h3 className="mt-7 text-2xl">Hiring <span className="text-orange">Analytics</span></h3>
                        <p className="text-xl mt-2">Get a better understanding of your hiring <br /> process with our analytics dashboard</p>
                    </div>
                    <div className="card">
                        <div className="img">
                            <img src="/images/Group 12969.png" className="h-24 w-36" alt="" />
                        </div>
                        <h3 className="mt-6 text-2xl">Build <span className="text-orange">Resume database</span></h3>
                        <p className="text-xl mt-2">Build your repository of talent pool</p>
                    </div>
            </div>
        </div>
    )
}

export default Info;
