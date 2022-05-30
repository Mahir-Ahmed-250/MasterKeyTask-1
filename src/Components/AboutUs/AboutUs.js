import React from 'react';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div className='aboutUs'>
            <p className='text-center about'>About Us</p>

            <div className="row circle-container container mx-auto">
                <div class="circle1 col-md-4 text-center">1BN+ <br /> Daily Impressions</div>
                <div class="circle2 col-md-4 text-center">$500K+ <br /> Paid</div>
                <div class="circle3 col-md-4 text-center">8K+ <br /> Global Publisher</div>

            </div>


        </div>
    );
};

export default AboutUs;