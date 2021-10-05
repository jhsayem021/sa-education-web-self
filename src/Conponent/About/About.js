import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
      <div>
          <h1 className="text-center text-white text-6xl py-6">About us</h1>
           <div className="lg:grid grid-cols-2 text-center">

            <Card className= "bg-green-600 rounded m-8 py-8 lg:px-24 font-semibold w-5/6">
    <Card.Header className="text-2xl p-3 text-blue-100 " >Best Educational Environment</Card.Header>
    <Card.Body>
      
      <Card.Text>
      Even slightly believable.it is pain de sires many pain of itself occur for your study.
      </Card.Text>
    </Card.Body>
  </Card>
        <Card className= "bg-green-600 rounded m-8 py-8 lg:px-24 font-semibold w-5/6">
    <Card.Header className="text-2xl p-3 text-blue-100 ">Expert Teacher</Card.Header>
    <Card.Body>
      
      <Card.Text>
        We have 50+ well qualified Teacher for best service.
      </Card.Text>
    </Card.Body>
  </Card>
            <Card className= "bg-green-600  rounded m-8 py-8 lg:px-24 font-semibold  w-5/6">
    <Card.Header className="text-2xl p-3 text-blue-100">Best Classroom</Card.Header>
    <Card.Body>
    
      <Card.Text>
        12+ well decorated classroom in our institute,so that student 
        feel better comfort for cool learn.
      </Card.Text>
    </Card.Body>
  </Card>
        <Card className= "bg-green-600 rounded m-8 py-8 lg:px-24 font-semibold w-5/6">
    <Card.Header className="text-2xl p-3 text-blue-100 ">Misterious Management</Card.Header>
    <Card.Body>
      <Card.Text>
        Every assistant in this institue are more co-operative and freindly and also
        hard worker.
      </Card.Text>
    </Card.Body>
  </Card>
       </div>
      </div>
    );
};

export default About;
