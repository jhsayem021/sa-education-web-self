import React from 'react';

const Enroll = () => {
    return (
        <div>
            <h1 className="text-center text-yellow-800 text-6xl py-6">Submit Your Information</h1>
            <form action="">
               <div className="flex justify-evenly">
               <div >
                <p>Name : </p> <input type="text" />
                <br />
                <p>Father Name : </p> <input type="text" />
                <br />
                <p>Address : </p> <input type="text" />
                <br />
                </div>
                <div>
                <p>School Name : </p> <input type="text" />
                <br />
                <p>Class : </p> <input type="text" />
                <br />
                <p>Mobile : </p> <input type="text" />
                <br />
                </div>
               </div>
               <div className="flex justify-center py-8">
                <button className="bg-green-700 text-white px-3 rounded-2xl mr-3">Submit</button> <button className="bg-red-700 text-white px-3 rounded-2xl">Refresh</button>
                </div>
            </form>
        </div>
    );
};

export default Enroll;