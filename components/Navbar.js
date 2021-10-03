import { useState } from 'react';

const Navbar = () => {

    const [activeLink, setActiveLink] = useState('home')

    return (
        <div className="flex justify-between items-center bg-white py-3 md:py-4 px-8 sm:px-10 md:px-12">
            <img src="/images/Group 53.png" className="h-12 ml-6" alt="" />
            <ul className="flex justify-between">
                <li 
                onClick={() => setActiveLink('home')} 
                className={`mx-6 text-lg cursor-pointer ${activeLink === 'home' ? 'border-b-2 border-orange' : ''}`}>
                    Home</li>
                <li 
                onClick={() => setActiveLink('features')} 
                className={`mx-6 text-lg cursor-pointer ${activeLink === 'features' ? 'border-b-2 border-orange' : ''}`}>
                    Features</li>
                <li 
                onClick={() => setActiveLink('pricing')} 
                className={`mx-6 text-lg cursor-pointer ${activeLink === 'pricing' ? 'border-b-2 border-orange' : ''}`}>
                    Pricing</li>
                <li 
                onClick={() => setActiveLink('demo')} 
                className={`mx-6 text-lg cursor-pointer ${activeLink === 'demo' ? 'border-b-2 border-orange' : ''}`}>
                    Request Demo</li>
                <li 
                onClick={() => setActiveLink('resources')} 
                className={`mx-6 text-lg cursor-pointer ${activeLink === 'resources' ? 'border-b-2 border-orange' : ''}`}>
                    Resources</li>
                <li 
                onClick={() => setActiveLink('login')} 
                className={`mx-6 text-lg cursor-pointer ${activeLink === 'login' ? 'border-b-2 border-orange' : ''}`}>
                    Login</li>
            </ul>
            <div className="flex flex-col">
                <button className="py-2 bg-orange rounded text-white text-sm">Try for free</button>
                <small className="mt-0.5 text-gray-400">No credit card required</small>
            </div>
        </div>
    )
}

export default Navbar
