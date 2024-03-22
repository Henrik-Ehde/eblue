import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Images/eBlue-Banner.jpg";
import { Link } from 'react-router-dom';

export default function About() {
    return <>
        <Navbar />
        <img src={Banner} alt="eBlue banner" width="" height=""></img>
        <p className="HomePage">
            Welcome to eblue!
            <br />
            <Link to="/eblue/products">Click here to see our products.</Link>


        </p>
        <Footer />

    </>
}