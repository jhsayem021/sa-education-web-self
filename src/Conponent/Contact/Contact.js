import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className="text-center text-yellow-100 text-6xl py-6 m-4">Contact</h1>

            <div className="lg:flex justify-evenly lg:py-12 text-center ">
                <div className=" bg-gray-400  lg:p-6 rounded m-4 ">
                    <h1 className="text-2xl font-bold text-blue-800 py-3 ">Address</h1>
                    <p>Uddam-3, Lamabazar,<br />
                        Sylhet </p>
                </div>
                <div className=" bg-gray-400 p-6 rounded m-4">
                    <h1 className="text-2xl font-bold text-blue-800 py-3 ">Phone</h1>
                    <p>+8801732400000</p>
                    <p>0821-120000</p>
                </div>
                <div className=" bg-gray-400  p-6 rounded m-3 ">
                    <h1 className="text-2xl font-bold text-blue-800 py-3">Web</h1>
                    <p>info@example.com</p>
                    <p>www.example.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;