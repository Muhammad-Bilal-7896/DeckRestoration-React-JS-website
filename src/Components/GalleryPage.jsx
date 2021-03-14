import React from 'react';

import Header from "./Header";
import Footer from "./Footer";
import BottomSlogan from "./BottomSlogan";

import { Link } from 'react-router-dom';
import '../Styling/Home.css';


function AboutUsPage() {

    return (
        <div>
            <Header />
            <a href="tel:7736648791" className="btn phoneMobile">
                <i className="glyphicon glyphicon-earphone ico-phone"></i>
            </a>
            <iframe src="https://gallerysection.web.app/" width="100%" id="MyFrame" frameBorder="0"></iframe>
            <Footer/>
        </div>
    )
}
export default AboutUsPage;
