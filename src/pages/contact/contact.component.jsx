import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"
import './contact.style.css'

const Contact = () => {
    return (
        <div id="contact">
           <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:roseakoth2015@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="roseakoth2015@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/rose-akoth-496407160/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="LinkenIn profile">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/roakoth" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My Projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
           
            <div className="m-2">
              <a href="https://twitter.com/rosekoth2015" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Tweets are welcomed!">
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>  
        </div>
    )
}

export default Contact
