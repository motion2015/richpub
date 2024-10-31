import React from 'react'
import './About.css'
import { useLocation } from 'react-router-dom';
function About() {
    const location = useLocation();     // 현재 위치 정보
    console.log(location);
    return (
        <div className='about__container'>
            <span>"Freedom is the freedom to day that two plus tow make four. If
                that is granted, all else follows"</span>
            <span>- George Orwell, 1984</span>
        </div>

    )
}

export default About