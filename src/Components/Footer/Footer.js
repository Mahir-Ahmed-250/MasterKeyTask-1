import React from 'react';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Footer.css'
import logo from '../Header/logo.png'

const fb = <FontAwesomeIcon icon={faFacebook} />
const yt = <FontAwesomeIcon icon={faYoutube} />

const instagram = <FontAwesomeIcon icon={faInstagram} />

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-1">
                    <h3 className='mb-4'>
                        <span className="footerHeaderLink">We are social</span></h3>
                    <p className='mb-5' style={{ fontWeight: "bold" }}>FOLLOW US</p>
                    <h5 className="footer-icons1">{fb}</h5>
                    <h5 className="footer-icons2">{yt}</h5>
                    <h5 className="footer-icons4">{instagram}</h5><br />
                    <img width="100" className='mt-5' src={logo} alt="" />
                </div>
                <div className="footer-2">
                    <h3 className='mb-4'>
                        <span className="footerHeaderLink ">Links</span>
                    </h3>
                    <h5 style={{ fontWeight: "bold" }}>ADVERTISERS </h5>
                    <h5 className='mt-5' style={{ fontWeight: "bold" }}>PUBLISHERS </h5>
                    <h5 className='mt-5' style={{ fontWeight: "bold" }}>INFLUENCERS </h5>
                    <h5 className='mt-5' style={{ fontWeight: "bold" }}>AD FORMATS</h5>

                </div>
                <div className="footer-3">
                    <h3 className='mb-4'>
                        <span className="footerHeaderLink ">Documentation</span>
                    </h3>

                    <h5 style={{ fontWeight: "bold" }}>TERMS & CONDITIONS</h5>
                    <h5 style={{ fontWeight: "bold" }} className='mt-5'>PRIVACY POLICY</h5>
                    <h5 style={{ fontWeight: "bold" }} className='mt-5'>CANCELLATION POLICY</h5>
                    <h5 style={{ fontWeight: "bold" }} className='mt-5'>ADVERTISERS </h5>
                </div>
                <div className="footer-4">
                    <h3 className='mb-4'>
                        <span className="footerHeaderLink">Support</span>
                    </h3>
                    <h5 >FAQ</h5>
                    <h5 className='mt-5'>MEDIA KIT</h5>
                    <h5 className='mt-5'>CONTACT US</h5>
                </div>

            </div>
        </div>
    );
};

export default Footer;