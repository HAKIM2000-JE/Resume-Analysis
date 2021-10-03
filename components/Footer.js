const Footer = () => {
    return (
        <div className="bg-white">
        {/* Section 01 */}
        <div className="bg-white pt-24 pb-48">
            <div className="flex justify-between items-center w-4/5 mx-auto px-10">
                <h2 className="text-3xl font-bold text-center">Are you ready to change the <br /> way you hire?</h2>
                <div className="btn">
                    <button className="border-2 border-orange text-orange rounded-md py-2.5 px-10">Talk to  us</button>
                    <button className="bg-orange text-white border-2 border-orange rounded-md py-2.5 px-10 ml-10">Try for free</button>
                </div>
            </div>
        </div>

        {/* Section 02 */}
        <div className="apps">
            <div className="w-3/6 mx-auto px-5 flex">
                <img src="/images/Fill 1.png" className="relative bottom-20" alt="" />
                <div className="content flex flex-col ml-10 py-10">
                    <h2 className="text-3xl mt-2">Get the Aptal<span className="text-orange">HR</span> app</h2>
                    <div className="shadow-xl mt-14 mb-8">
                        <input type="email" name="" className="py-2.5 px-5" placeholder="Your email" />
                        <button className="bg-orange text-white py-2.5 px-6 ml-0.5">Notify me</button>
                    </div>
                    <div className="flex">
                        <img src="/images/Group 11751.png" className="w-28 h-10" alt="" />
                        <img src="/images/Group 11748.png" className="ml-1 w-28 h-10" alt="" />
                    </div>
                </div>
            </div>
        </div>

        {/* Section 03 */}
        <div className="bg-white pt-24 pb-10 w-5/6 mx-auto">
            <div className="flex justify-between">
                <div className="w-2/6">
                    <h2 className="font-bold text-3xl">Subscribe<span className="text-orange font-bold">.</span> </h2>
                    <div className="border-r-2 border-orange pr-14 pb-6">
                    <div className="shadow-xl my-6">
                        <input type="email" name="" className="py-2.5 px-4" placeholder="Your email" />
                        <button className="bg-orange text-white py-2.5 px-5 ml-1.5">Let's get started</button>
                    </div>
                    <ul className="flex justify-between">
                        <li className="text-sm flex items-center text-custome_gray"><img className="mr-1" src="/images/Vector 3.png" alt="" />Quick & easy</li>
                        <li className="text-sm flex items-center text-custome_gray"><img className="mr-1" src="/images/Vector 3.png" alt="" />Personality based</li>
                        <li className="text-sm flex items-center text-custome_gray"><img className="mr-1" src="/images/Vector 3.png" alt="" />Customizable</li>
                    </ul>
                    </div>
                </div>
                <div className="w-4/6 flex justify-between pl-20">
                    <div>
                        <h2 className="font-bold text-3xl">Product<span className="text-orange">.</span></h2>
                        <ul className="flex flex-col mt-2">
                            <li className="text-lg my-1 text-custome_gray">Features</li>
                            <li className="text-lg my-1 text-custome_gray">Referral program</li>
                            <li className="text-lg my-1 text-custome_gray">Product updates</li>
                            <li className="text-lg my-1 text-custome_gray">GDPR</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-3xl">Resources<span className="text-orange">.</span></h2>
                        <ul className="flex flex-col mt-2">
                            <li className="text-lg my-1 text-custome_gray">Customer Stories</li>
                            <li className="text-lg my-1 text-custome_gray">Webinars</li>
                            <li className="text-lg my-1 text-custome_gray">Testimonials</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-3xl">Know more<span className="text-orange">.</span></h2>
                        <ul className="flex flex-col mt-2">
                            <li className="text-lg my-2 flex items-center text-custome_gray"><img src="/images/Vector (2).png" className="h-3 w-4 mr-3" alt="" /> info@aptagrim.com
                            </li>
                            <li className="text-lg my-1 flex items-center text-custome_gray">
                                <img className="h-3 w-4 mr-3" src="/images/Group 12108.png" alt="" />
                                <img className="h-3 w-4 mr-3" src="/images/Vector.png" alt="" />
                                <img className="h-3 w-4 mr-3" src="/images/Vector (1).png" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-4 md:mt-6 lg:mt-8 items-start md:items-center">
                <div className="md:w-1/4">
                    <h2 className="font-bold text-xl lg:text-3xl">Sales & Support</h2>
                </div>
                <ul className="md:w-3/4 flex lg:justify-around lg:items-center pl-10">
                    <li className="flex justify-center items-center"><img src="/images/Vector (4).png" alt="" /></li>
                    <li className="flex justify-center items-center">
                        <img className="mr-1 mt-1.5" src="/images/image 63.png" alt="" />
                        <span>+353 89461 4655</span>
                    </li>
                    <li className="flex justify-center items-center">
                        <img className="mr-1 mt-1.5" src="/images/image 64.png" alt="" />
                        <span>+91 7337335560</span>
                    </li>
                    <li className="flex justify-center items-center">
                        <img className="mr-1 mt-1.5" src="/images/image 65.png" alt="" />
                        <span>+65 3129 2332</span>
                    </li>
                    <li className="flex justify-center items-center">
                        <img className="mr-1 mt-1.5" src="/images/image 66.png" alt="" />
                        <span>+44 20 4538 0601</span>
                    </li>
                </ul>
            </div>
            <hr className="mt-12" />
            <div className="flex justify-between mt-4 text-custome_gray">
                <small>Aptagrim © 2021</small>
                <small>Terms and Conditions - Privacy Policy</small>
            </div>
        </div>
        </div>
    )
}

export default Footer
