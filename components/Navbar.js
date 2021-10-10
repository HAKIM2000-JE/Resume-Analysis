import React from "react";
import {FaBars, Fabars } from 'react-icons/fa'

import {AiOutlineRight} from 'react-icons/ai'
import Link from 'next/link'

import OwnImage from './Image';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState('home')


  const handleClick = (e) => {
        
    e.preventDefault()
    const target = e.target.getAttribute('href')
    alert(target)
    if(target=="#services"){
      
    const location = document.querySelector(target).offsetTop
    

    window.scrollTo({
      left: 0,
      top: location - 64,
    })
    setActiveLink('features')
   
}
    
  }


  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <OwnImage src="/images/Group 53.svg" layout="fill"  width={100} alt="" />
            <button
              className="text-orange cursor-pointer text-2xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto mr-0 xl:mr-60">
            <li 
            onClick={() => setActiveLink('home')} 
            className={`mx-6 text-lg cursor-pointer  ${navbarOpen? '  flex mb-2 mt-5 text-xl justify-between  ' : ''} ${activeLink === 'home' && !navbarOpen  ? 'border-b-2 border-orange' : ''}`}>
                Home
                
                <AiOutlineRight className={`${navbarOpen ? 'text-orange' :'hidden'}`} />
                </li>
                <hr className={`${navbarOpen ? 'flex w-11/12 ml-6  border-t-1 border-gray-300 mb-5 ' :'hidden'}`} />
               
               <Link    onClick={handleClick}  href="#services" >
               <li 
                
               className={`mx-6 text-lg cursor-pointer  ${navbarOpen? '  flex mb-2 mt-5 text-xl justify-between  ' : ''} ${activeLink === 'features' && !navbarOpen  ? 'border-b-2 border-orange' : ''}`}>
               
                 Features
                   
                   <AiOutlineRight className={`${navbarOpen ? 'text-orange' :'hidden'}`} />
                   </li>
               </Link>

                
                    <hr className={`${navbarOpen ? 'flex w-11/12 ml-6  border-t-1 border-gray-300 mb-5 ' :'hidden'}`} />
                    
                    <li 
                    onClick={() => setActiveLink('pricing')} 
                    className={`mx-6 text-lg cursor-pointer  ${navbarOpen? '  flex mb-2 mt-5 text-xl justify-between  ' : ''} ${activeLink === 'pricing' && !navbarOpen  ? 'border-b-2 border-orange' : ''}`}>
                         Pricing
                        
                        <AiOutlineRight className={`${navbarOpen ? 'text-orange' :'hidden'}`} />
                        </li>
                        <hr className={`${navbarOpen ? 'flex w-11/12 ml-6  border-t-1 border-gray-300 mb-5 ' :'hidden'}`} />
                        
                        <li 
                        onClick={() => setActiveLink('demo')} 
                        className={`mx-6 text-lg cursor-pointer  ${navbarOpen? '  flex mb-2 mt-5 text-xl justify-between  ' : ''} ${activeLink === 'demo' && !navbarOpen  ? 'border-b-2 border-orange' : ''}`}>
                           Request Demo
                            
                            <AiOutlineRight className={`${navbarOpen ? 'text-orange' :'hidden'}`} />
                            </li>
                            <hr className={`${navbarOpen ? 'flex w-11/12 ml-6  border-t-1 border-gray-300 mb-5 ' :'hidden'}`} />
                            
                            <li 
                            onClick={() => setActiveLink('Resources')} 
                            className={`mx-6 text-lg cursor-pointer  ${navbarOpen? '  flex mb-2 mt-5 text-xl justify-between  ' : ''} ${activeLink === 'Resources' && !navbarOpen  ? 'border-b-2 border-orange' : ''}`}>
                                     Resources
                                
                                <AiOutlineRight className={`${navbarOpen ? 'text-orange' :'hidden'}`} />
                                </li>
                                <hr className={`${navbarOpen ? 'flex w-11/12 ml-6  border-t-1 border-gray-300 mb-5 ' :'hidden'}`} />
                                
                                <li 
                                onClick={() => setActiveLink('Login')} 
                                className={`mx-6 text-lg cursor-pointer  ${navbarOpen? '  flex mb-2 mt-5 text-xl justify-between  ' : ''} ${activeLink === 'Login' && !navbarOpen  ? 'border-b-2 border-orange' : ''}`}>
                                    Login
                                    
                                    <AiOutlineRight className={`${navbarOpen ? 'text-orange' :'hidden'}`} />
                                    </li>
                                    <hr className={`${navbarOpen ? 'flex w-11/12 ml-6  border-t-1 border-gray-300 mb-5 ' :'hidden'}`} />
                                    
            </ul>
            <div className="flex flex-col">
                <button className="py-2 bg-orange rounded text-white text-sm">Try for free</button>
                <small className="mt-0.5 text-gray-400">No credit card required</small>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}