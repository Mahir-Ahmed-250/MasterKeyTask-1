import React from 'react';
import './Services.css'
const Services = () => {
    return (

        <div className="container mt-5">
            <div className='row'>
                <div className="icon1 col-md-4"></div>
                <div className="icon2 col-md-4"></div>
                <div className="icon3 col-md-4"></div>
            </div>
            <div>
                <div className='row'>
                    <div className="col-md-4 mt-4"> <h3
                        className='serviceName'>
                        Service 1
                    </h3>
                        <button className='serviceBtn mt-4'>Hello 1</button>
                    </div>
                    <div className="col-md-4 mt-4"> <h3
                        className='serviceName'>
                        Service 2
                    </h3>
                        <button className='serviceBtn mt-4'>Hello 2</button>
                    </div>
                    <div className="col-md-4 mt-4"> <h3
                        className='serviceName'>
                        Service 3
                    </h3>
                        <button className='serviceBtn mt-4'>Hello 3</button>
                    </div>
                </div>
            </div>



        </div>

    );
};

export default Services;