import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Courses = (props) => {
    const {name,duration,topics,fee,image} = props.course;
    const imgStyle = {
      height:200,
      width:200
    }
    return (
        <div className="m-3 ">

            <Col className="bg-blue-100 rounded p-3 grid justify-center">
                <Card>
                  <Card.Img style={imgStyle} variant="top" src={image} />
                  <Card.Body className="py-4">
                    <Card.Title>Course : {name}</Card.Title>
                    <Card.Text>
                    Duration : {duration}
                    </Card.Text>
                    <Card.Text>
                    Subject : {topics}
                    </Card.Text>
                    <Card.Text>
                    Fees : {fee} BDT
                    </Card.Text>
                    <br />
                    <button className = "bg-green-700 text-white px-3 rounded-2xl">
                      <Link to="/enroll">Enrollment Now</Link>
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            
        </div>
    );
};

export default Courses;