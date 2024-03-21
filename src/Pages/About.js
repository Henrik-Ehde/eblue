import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Image from '../Images/about.jpg'
import './About.css';

export default function About() {
    return <>
        <Navbar />
        <div className="About">
            <img src={Image}></img>

            <div>
                <h1>About</h1>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget sollicitudin dolor. Morbi finibus elit vitae erat mollis, nec congue massa pretium.  
                </p>

                <p>
                Sed eget tellus non sem faucibus ornare. In hac habitasse platea dictumst. Nulla tempor, arcu nec blandit volutpat, felis massa facilisis sem, at imperdiet velit mi ut lorem. Phasellus lacinia facilisis ex, sed varius magna bibendum quis. Donec ut magna in tortor ullamcorper laoreet quis scelerisque massa.
                </p>
                
            </div>

        </div>
        
        
        <Footer />

    </>
}