import styles from "../styles/Galerie.module.css";
import { useState, useEffect } from "react"

import Image from "next/image";
import Services from "./Services";
import { Parallax } from 'react-parallax';
import Image from 'next/image'
function Galerie() {


    
    return (
        <div>
     

       
            <Parallax blur={10} bgImage="path/to/image.jpg" bgImageAlt="the cat" strength={200}>
                Content goes here. Parallax height grows with content height.
            </Parallax>
    
            
        </div>
    )
}

export default Galerie
