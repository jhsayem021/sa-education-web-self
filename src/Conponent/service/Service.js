import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './service.css'

const Service = (props) => {
    const {img,milestone,duration,classAmount,topics,group} = props.service;
    const imgStyle = {
      height:200,
      width:200,
      paddingTop:10
    }
    return (
        <div>
          <div className="bg-gray-200 p-8 lg:mx-20 my-4 rounded grid justify-center">
          
             <Col>
      <Card>
      <Card.Img style={imgStyle} variant="top" src={img} />
        <Card.Body>
         <div className="py-4 text-2xl">
         <Card.Title> <span>Package: </span>{milestone} </Card.Title>
          <Card.Text>
              <span>Course Duration:</span> {duration}
          </Card.Text>
          <Card.Text>
            <span>Class Amount:</span> {classAmount}
          </Card.Text>
          <Card.Text>
             <span>Topics:</span> {topics}
          </Card.Text>
          <Card.Text>
              <span>Course for:</span> {group}
          </Card.Text>
         </div>
          <button className="bg-blue-700 text-white px-6 py-1 my-4 rounded-2xl" >
           Details
            </button>
        </Card.Body>
      </Card>
    </Col>
        </div>
        </div>
    );
};

export default Service;