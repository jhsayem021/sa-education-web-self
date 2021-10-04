import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    
    return (
        <div>
             <h1 className= "text-5xl text-red-400 text-center my-6">SA Academic and Addmission Care</h1>
                
               <div className="flex justify-between">
                    <div>
                    </div>
                    <div className="flex m-3 text-sm" >
                    <h5><Link  to = "/home">Home</Link></h5>
                    <h5><Link to = "/services">Services</Link></h5>
                    <h5> <Link to = "/enroll">Enrollment</Link></h5>
                    <h5><Link to = "/about">About us</Link></h5>
                    </div>
               </div>
               
        </div>
    );
};

export default Header;