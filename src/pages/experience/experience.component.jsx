import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container";
import Tilt from 'react-tilt';
import Card from 'react-bootstrap/Card';
import './experience.style.css';


const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                <Tilt options={{ max: 25 }}>
                 <Card>
                    <Card.Header as="h3" className="d-flex justify-content-center flex-wrap">
                      Kenya Revenue Authority
                    </Card.Header>
                     <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Software Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Application Support Engineer</strong>
                    <br />
                    <strong>Technology:</strong> Java Spring, JSP, PostgreSQL, JSP
                    <br />
                    <strong>Duration:</strong> February 2020 - Present
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed &amp; supported</strong> multiple features with customizability option across iTax web application.</li>
                      <li><strong>Prepared</strong> documentations according to set of quality standards
                      </li>
                      <li><strong>Provided</strong> application maintenance while working as `Application Support`. 
                      </li>
                      <li><strong>Resolve</strong> issues arising from QA tests for solutions that do not pass QA standards and Information System Security policies
                      to the business requirements.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>

                 </Card>

                </Tilt>
                </Container>

            </Jumbotron>
            
        </div>
    )
}

export default Experience
