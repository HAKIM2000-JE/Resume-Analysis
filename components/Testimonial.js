import { useState } from "react"

const Testimonial = () => {

    const [section, setSection] = useState(1);

    return (
        <div className="bg-white pb-32">
        {
            (section === 1 || section === 3) ?
            <div className="p-20 bg-white">
                <div className="grid grid-cols-2">
                    <div className="testimonial py-5 px-24">
                        <div className="flex justify-between">
                            <div className="quote my-10">
                                <div className="flex">
                                    <img src="/images/quote.png" className="w-4 h-4 inline -mt-2 mr-2" alt="" /> 
                                    <p className="text-xl">
                                        Lorem Ipsum is a great font Lorem Ipsum is a great qfeg <br /> font Lorem Ipsum is a great font Lorem Ipsum is gdgdgd <br /> great font gdg
                                    </p>
                                </div>
                                <div className="w-full text-right">
                                <div className="text-orange text-3xl font-bold mr-14">//</div>
                                </div>
                            </div>
                            <img src="/images/Vector 1959.png" className="h-44" alt="" />
                        </div>
                        <div className="w-full text-right flex justify-end items-center p-5">
                            <h4 className="mr-4">Brian McGuire <small className="block text-sm">CEO, Cental</small></h4>
                            <img src="/images/Brian 1.png" className="w-16 h-16" alt="" />
                        </div>
                        <div className="bg-light flex p-4 mt-5">
                            <img src="/images/Cental Icon.png" alt="" />
                            <h3 className="text-2xl font-bold self-center text-gray-600 ml-5">Cental Engineering Ltd</h3>
                        </div>
                    </div>
                    <div className="video">
                        <img src="/images/Group 12563.png" alt="" />
                    </div>
                </div>
            </div>
            :
            <div className="bg-white px-20 py-32">
            <div className="flex items-start">
                <img src="/images/quote.png" className="inline -mt-10 mr-2" alt="" /> 
                <p className="text-2xl">
                Lorem Ipsum Lorem Ipsum is a great font Lorem Ipsum is a great qfeg font Lorem Ipsum is a great font Lorem Ipsum is gdgdgd <br /> great fon Ipsum is a great font Lorem Ipsum is a great qfeg font Lorem Ipsum is a great font Lorem Ipsum is gdgdgd great fon a <br /> great font Lorem Ipsum is a great qfeg Lorem Ipsum is a great font Lorem Ipsum is a great qfeg font Lorem Ipsum is a great <br /> ont L Ipsum is a great font Lorem Ipsum is a great qfeg fongdgd great fon
                </p>
            </div>
            <div className="w-full text-right">
                <div className="text-orange text-4xl font-bold">//</div>
            </div>
            <div className="flex justify-end">
                <div className="w-full p-5 flex justify-end mt-6">
                    <h4 className="mr-4 text-xl">Brian McGuire <small className="block text-sm">CEO, Cental</small></h4>
                    <img src="/images/Brian 1.png" className="w-16 h-16" alt="" />
                </div>
                <div className="bg-light p-4 mt-6 flex items-center w-1/3">
                    <img src="/images/Cental Icon.png" className="h-12" alt="" />
                    <h3 className="text-xl font-bold self-center text-gray-600 ml-5">Cental Engineering Ltd</h3>
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
