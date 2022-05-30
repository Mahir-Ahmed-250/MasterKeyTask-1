import React from 'react';
import artwork from './artwork.png'
import './HomeBanner.css'
const HomeBanner = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 mt-5'>
                    <h2 className='homeTitle'>We'll help you grow your business with marketing and web development.</h2>
                    <h5 className='homeText'>We help businesses increase their revenue, brand awareness and traffic by implementing highly tailored marketing strategies.</h5>
                </div>
                <div className='col-md-6'>
                    <img className='homeArt mx-auto' src={artwork} alt="homeArt" />
                </div>
            </div>

        </div>
    );
};

export default HomeBanner;