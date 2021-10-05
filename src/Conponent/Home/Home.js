import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {  Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Courses from '../courses/Courses';



const Home = () => {
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        fetch('./course.JSON')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div>
            
            <Row xs={1} md={2} className=" grid lg:grid-cols-4  g-4 py-8 px-8">
            {
                courses.map(course => <Courses 
                    key = {course.courseId} 
                    course = {course}
                ></Courses>)
            }
          </Row>
          
            <div className="flex justify-center py-6">
            <button className="bg-blue-700 text-white px-3 py-2 rounded-2xl" >
            <Link to="/services">View Our Service</Link>
            </button>
            </div>
        </div>
    );
};

export default Home;