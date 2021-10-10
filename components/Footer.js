import OwnImage from './Image';
const Footer = () => {
    return (
        <div className="bg-white">
        {/* Section 01 */}
        <div className="bg-white pt-24 pb-48">
            <div className=" block lg:flex justify-between items-center w-4/5 mx-auto px-10">
                <OwnImage src="/images/Group 12218.svg" layout="fill"  width={50} alt="" />
                
                
                <OwnImage src="/images/Group 12225.svg" layout="fill"  width={50} alt="" />
                <h2 className=" text-2xl md:text-3xl mx-auto md:w-5/12 w-11/12 font-bold text-center ">Are you ready to change the  way you hire?</h2>
                <div className=" flex w-11/12 md:w-7/12  mt-10 lg:w-5/12 xl:w-3/12  mb-5 mx-auto   justify-between ">
                    <button className="border-2 border-orange text-orange rounded-md py-2 mr-10  w-32 ">Talk to  us</button>
                    
                    <button className="bg-orange text-white border-2 border-orange rounded-md py-2 w-32 ">Try for free</button>
                </div>
            <OwnImage src="/images/Group 12976.svg" layout="fill"  width={50} alt="" />
            <OwnImage src="/images/Group 12214.svg" layout="fill"  width={50} alt="" />

            </div>
        </div>

        {/* Section 02 */}
        <div className="apps">
            <div className=" w-4/12  md:w-3/6   ml-12 md:mx-auto md:px-5 flex">
                <OwnImage src="/images/Androidapps.svg"  layout="fill"  width={50}  />
                <div className="mt-44 mr-32">
                    <h2 className="text-3xl mt-2">Get the Apta<span className="text-orange">HR</span> app</h2>
                    <div className="shadow-xl flex mt-14 mb-8">
                        <input type="email" name="" className="py-2.5 px-5" placeholder="Your email" />
                        <button className="bg-orange text-white w-28  px-3 ml-0.5">Notify me</button>
                    </div>
                    <div className="flex ">
                        <OwnImage src="/images/Group 11751.png" layout="fill"  width={50} alt="" />
                        <OwnImage src="/images/Group 11748.png" layout="fill"  width={50} alt="" />
                    </div>
                </div>
            </div>
        
        </div>

        {/* Section 03 */}
        <div className="bg-white pt-24 pb-10 w-4/6 lg:w-5/6 mx-auto">
            <div className=" block lg:flex justify-between w-full">
                <div className="lg:w-2/6 w-4/6 ">
                    <h2 className="font-bold text-3xl">Subscribe<span className="text-orange font-bold">.</span> </h2>
                    <div className="lg:border-r-2 border-orange pr-14 pb-6">
                    <div className="shadow-xl  my-0  lg:my-3 flex ">
                        <input type="email" name="" className="py-2.5 px-4" placeholder="Your email" />
                        <button className="bg-orange   text-sm   w-52 text-white px-4  py-2.5 lg:px-5 ">Let's get started</button>
                    </div>
                    <ul className="block lg:flex justify-between">
                        <li className="text-sm flex items-center text-custome_gray"><OwnImage layout="fill"  width={50} src="/images/Vector 3.png" alt="" />Quick & easy</li>
                        <li className="text-sm flex items-center text-custome_gray"><OwnImage layout="fill"  width={50} src="/images/Vector 3.png" alt="" />Personality based</li>
                        <li className="text-sm flex items-center text-custome_gray"><OwnImage layout="fill"  width={50} src="/images/Vector 3.png" alt="" />Customizable</li>
                    </ul>
                    </div>
                </div>
                <div className="w-4/6 block lg:flex justify-between pl-30 lg:pl-20">
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
                            <li className="text-lg my-2 flex items-center text-custome_gray"><OwnImage src="/images/Vector (2).png" layout="fill"  width={50} alt="" /> info@aptagrim.com
                            </li>
                            <li className="text-lg my-1 flex items-center text-custome_gray">
                                <OwnImage layout="fill"  width={50} src="/images/Group 12108.png" alt="" />
                                <OwnImage layout="fill"  width={50} src="/images/Vector.png" alt="" />
                                <OwnImage layout="fill"  width={50} src="/images/Vector (1).png" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col md:flex-row mt-4  w-full md:mt-6 lg:mt-8 items-start md:items-center">
                <div className="md:w-1/4">
                    <h2 className="font-bold text-xl lg:text-3xl">Sales & Support</h2>
                </div>
                <ul className="md:w-3/4 block lg:flex lg:justify-around relative right-16 md:right-0 w-full lg:items-center pl-10">
                    <li className="hidden md:flex justify-center items-center"><OwnImage src="/images/Vector (4).png" layout="fill"  width={50}  alt="" /></li>
                    <li className="flex justify-center items-center">
                        <OwnImage layout="fill"  width={50} src="/images/image 63.png" alt="" />
                        <span>+353 89461 4655</span>
                    </li>
                    <li className="flex justify-center items-center">
                        <OwnImage layout="fill"  width={50} src="/images/image 64.png" alt="" />
                        <span>+91 7337335560</span>
                    </li>
                    <li className="flex justify-center items-center">
                        <OwnImage layout="fill"  width={50} src="/images/image 65.png" alt="" />
                        <span>+65 312 7335560</span>
                    </li>
                    <li className="flex justify-center items-center">
                        <OwnImage layout="fill"  width={50} src="/images/image 66.png" alt="" />
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
