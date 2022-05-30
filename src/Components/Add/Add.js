import React from 'react';
import { NavLink } from 'react-router-dom';
import './Add.css'


const Add = () => {

    return (
        <div >
            <div className="wrap" >
                <div className="text">VERSATILE AD FORMATS</div>
            </div >
            <div className='container'>
                <div className='row '>
                    <div className='col-md-3 mt-3'>
                        <NavLink
                            to="/pop" style={{ textDecoration: "none", color: "black" }}
                            className={(navData) => (navData.isActive ? 'active' : 'link')}>
                            <button className='addBtn'>POP UNDER</button>
                        </NavLink></div>
                    <div className='col-md-3 mt-3'>
                        <NavLink
                            to='/bannerAdd'
                            style={{ textDecoration: "none", color: "black" }}
                            className={(navData) => (navData.isActive ? 'active' : 'link')}

                        >
                            <button className='addBtn'>BANNER AD</button>
                        </NavLink>
                    </div>
                    <div className='col-md-3 mt-3'>
                        <NavLink to='/native' style={{ textDecoration: "none", color: "black" }}
                            className={(navData) => (navData.isActive ? 'active' : 'link')}>
                            <button className='addBtn'>NATIVE</button>
                        </NavLink>
                    </div>
                    <div className='col-md-3 mt-3'>
                        <NavLink to='/skim' style={{ textDecoration: "none", color: "black" }}
                            className={(navData) => (navData.isActive ? 'active' : 'link')}>
                            <button className='addBtn'>SKIM</button>
                        </NavLink>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Add;