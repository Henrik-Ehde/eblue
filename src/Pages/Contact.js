import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import './Contact.css'

import phoneIcon from '../Images/Phone.png'
import mailIcon from '../Images/Mail.png'
import adressIcon from '../Images/Adress.png'

export default function Contact() {
    return <>
        <Navbar />

        <h1>Contact</h1>

        <div className="Contact">

            <div>
                <img src={phoneIcon}></img>
                <p>123-456 789</p>
            </div>

            <div>
                <img src={mailIcon}></img>
                <p>Info@example.com</p>
            </div>

            <div>
                <img src={adressIcon}></img>
                <p>Main Street 1, <br /> 12345 City</p>
            </div>

        </div>

        <Footer />
    </>
}