import React from 'react'
import './Footer.css';
import facebookIcon from '../Images/facebook.png'
import InstagramIcon from '../Images/Instagram.png'

export default function Footer() {
  return (
    <div className='Footer'>
        <ul>
            <li><a href="https://www.facebook.com/" target='blank'>
                <img src={facebookIcon}></img>  
                Facebook             
             </a></li>

             <li><a href="https://www.instagram.com/" target='blank'>
                <img src={InstagramIcon}></img>  
                Instagram             
             </a></li>

        </ul>
      
    </div>
  )
}
