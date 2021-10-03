import { useState } from 'react';

const Clients = () => {

    const [progress, setProgress] = useState(75);

    return (
        <div>

        {/* Section 01 */}
        <div className="w-5/6 mx-auto flex justify-between items-center py-14 pl-10">
            <img src="/images/Group 133001.png" alt="" />
            <img src="/images/Group 133102.png" alt="" />
            <img src="/images/Group 133001.png" alt="" />
            <img src="/images/Group 133102.png" alt="" />
            <img src="/images/Group 12485.png" alt="" />
            <img src="/images/Group 133001.png" alt="" />
            <img src="/images/Group 12485.png" alt="" />
        </div>

        {/* Section 02 */}
        <div className="grid grid-cols-2 text-center w-5/6 mx-auto pt-6 pb-12">
            <div className="flex items-center py-8 ml-10">
                <h2 className="text-orange text-3xl font-bold">100000+</h2>
                <h4 className="text-left ml-10 text-2xl leading-7">Candidates screened through <br /> <span className="text-orange">our AI-powered resume screener</span></h4>
            </div>
            <div className="flex items-center pl-24 py-8 border-l-2 border-orange">
                <h2 className="text-orange text-3xl font-bold">75000+</h2>
                <h4 className="text-left ml-10 text-2xl leading-7">Candidates screened through <br /> <span className="text-orange">our AI-powered assessment model</span></h4>
            </div>
        </div>

        {/* Section 03 */}
        <div className="flex bg-white">
            <div className="w-2/5 text-center py-10 bg-light" style={{clipPath: 'polygon(0 0, 100% 0%, 90% 100%, 0% 100%)'}}>
                <h2 className="text-3xl font-bold pl-10">Our clients love us!</h2>
            </div>
            <div className="w-3/5 flex flex-col justify-center items-center">
                <ul className="flex justify-between" style={{width: '600px'}}>
                    <li className="cursor-pointer" onClick={() => setProgress(25)}>Engineering</li>
                    <li className="cursor-pointer" onClick={() => setProgress(50)}>Healthcare</li>
                    <li className="cursor-pointer" onClick={() => setProgress(75)}>Recruitment</li>
                    <li className="cursor-pointer" onClick={() => setProgress(100)}>IT</li>
                </ul>
                <div className="bg-light shadow-inner rounded-full h-3 mt-5 flex" style={{width: '600px'}}>
                    <div className="bg-orange h-full w-full rounded-full" style={{width: `${progress}%`}}>
                    </div>
                    <img src="/images/Slider Button.png" className={`h-10 -mt-3 ${progress === 100 ? 'hidden' : '-ml-4'}`} alt="" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Clients
