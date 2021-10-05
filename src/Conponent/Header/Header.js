import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    
    return (
        <div className="grid ">
             <h1 className= "lg:text-5xl text-3xl font-bold text-blue-800 text-center my-6 ">
                 <span className= "lg:text-9xl text-7xl text-red-800 text-center my-2">SA </span>
              Academic and Addmission Care</h1>
                
               <div className="flex justify-between">
                    <div>
                    </div>
                    <div className="flex my-6 lg:px-3" >
                    <Link className="link-style" to = "/home">Home</Link>
                    <Link className="link-style" to = "/services">Services</Link>
                    <Link className="link-style" to = "/enroll">Enrollment</Link>
                    <Link className="link-style" to = "/about">About us</Link>
                    <Link className="link-style" to = "/contact">Contact us</Link>
                    </div>
               </div>
               
        </div>
    );
};

export default Header;