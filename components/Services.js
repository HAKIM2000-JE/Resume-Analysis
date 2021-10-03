import { useState, useEffect } from "react"

const Services = () => {

    const [progress, setProgress] = useState(25);
    const [section, setSection] = useState('one');
    const [img, setImg] = useState('Group 12974.png');

    useEffect(() => {
        switch(section){
            case 'one':
                setProgress(25);
                setImg('Group 12974.png');
                break;
            case 'two':
                setProgress(50);
                setImg('Group 12835.png');
                break;
            case 'three':
                setProgress(75);
                setImg('Group 12998.png');
                break;
            case 'four':
                setProgress(100);
                setImg('Group 13002.png');
                break;
            default:
                setProgress(25);
                setImg('Group 12974.png');
        }
    }, [section])

    return (
        <div className="bg-light">
            <div className="progress bg-orange h-3" style={{width: `${progress}%`}}></div>
            <div className="service-content flex py-16 bg-white">
                <div className="service-points flex flex-col ml-14" style={{width: '35%'}}>

                    <div className={`flex my-5 ${section !== 'one' ? 'ml-6' : ''}`}>
                        <div className={`border-4 rounded-full ${section === 'one' ? 'border-orange' : 'border-white'}`}>
                        </div>
                        <div 
                            className={`${section === 'one' ? 'shadow-xl py-5 px-6 rounded-md rounded-tl-none rounded-bl-none' : ''} cursor-pointer w-full`}
                            onClick={() => setSection('one')}
                            >
                            <h2 className="text-2xl font-bold">AI powered <span className="text-orange">resume screening</span></h2>
                            <p className="text-gray-600 text-lg mt-2">
                            Screen hundreds of resumes in less than a minute and look <br /> beyond skill keyword match
                            </p>
                        </div>
                    </div>

                    <div className={`flex my-5 ${section !== 'two' ? 'ml-6' : ''}`}>
                        <div className={`border-4 rounded-full ${section === 'two' ? 'border-orange' : 'border-white'}`}>
                        </div>
                        <div 
                            className={`${section === 'two' ? 'shadow-xl rounded-md py-5 px-6 rounded-tl-none rounded-bl-none' : ''} cursor-pointer w-full`}
                            onClick={() => setSection('two')}
                            >
                            <h2 className="text-2xl font-bold">Customise <span className="text-orange">hiring workflow</span> for every job</h2>
                            <p className="text-gray-600 text-lg mt-2">
                            Your hiring team can now customise the number of <br /> screening stage as per the job requirements </p>
                        </div>
                    </div>

                    <div className={`flex my-5 ${section !== 'three' ? 'ml-6' : ''}`}>
                        <div className={`border-4 rounded-full ${section === 'three' ? 'border-orange' : 'border-white'}`}>
                        </div>
                        <div 
                            className={`${section === 'three' ? 'shadow-xl rounded-md py-5 px-6 rounded-tl-none rounded-bl-none' : ''} cursor-pointer w-full`}
                            onClick={() => setSection('three')}
                            >
                            <h2 className="text-2xl font-bold">AI-powered <span className="text-orange">personality profiling</span></h2>
                            <p className="text-gray-600 text-lg mt-2">
                            Gain insight into a job applicants cultural fit with our video <br /> based pre-hire assessments and personality reports
                            </p>
                        </div>
                    </div>

                    <div className={`flex my-5 ${section !== 'four' ? 'ml-6' : ''}`}>
                        <div className={`border-4 rounded-full ${section === 'four' ? 'border-orange' : 'border-white'}`}>
                        </div>
                        <div 
                            className={`${section === 'four' ? 'shadow-xl rounded-md py-5 px-6 rounded-tl-none rounded-bl-none' : ''} cursor-pointer w-full`}
                            onClick={() => setSection('four')}
                            >
                            <h2 className="text-2xl font-bold">Enabling hiring teams to <span className="text-orange">collaborate on a <br /> single platform</span></h2>
                            <p className="text-gray-600 text-lg mt-2">
                            Speed up the recruitment process by bringing hiring <br /> manager, recruiters, interview panelists, and candidates <br /> on a single platform
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-3/5 flex justify-end mr-12 items-center">
                    <div className={`${section === 'two' ? 'flex flex-col' : ''}`}>
                        <img src={`/images/${img}`} alt="" />
                        { section === 'two' ? <img src="/images/Group 12979.png" className="w-3/5 mx-auto h-36" alt="" /> : '' }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
