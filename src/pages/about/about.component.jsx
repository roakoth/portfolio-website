import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Profile from '../../assets/img/rose.jpg'

 import './about.style.css'


const About = () => {
    return (
        <div id='about'>
    <div className="about">
          <h1 className='pt-3 text-center my-details pb-3'>About Me</h1>
          <Container>
            <Row className='pt-3 pb-5 align-items-center'>
                {/* Profile Pic */}
                <Col xs={12} md={6}>
                    
                    <Row className='justify-content-center mb-2 mr-2'>
            <Image className='profile justify-content-end' alt='profile' src={Profile} thumbnail fluid />
                    </Row>
                </Col>
               {/* About Me Description */}
                <Col xs={12} md={6}>
                 <Row className=" align-items-start p-2 my-details rounded">
                     {/* Description */}
                  I am <strong>&nbsp;Roselida Akoth Ochieng'</strong>
                <br />A passionate frontend developer, who loves bringing life to websites, I come from Kenya. I am skilled in React.js, Javascript, HTML, CSS, Sass, Bootstrap and Content Management Systems such as Wordpress.
                <br />
                I hold a Bachelor degree in Information Technology. I successfully completed my frontend developer path at OpenClassrooms, I worked on nine projects with the guidance of a mentor.
                <br />
                 I am attentive to every detail, focused on great user experience and mobile-first approach, whenever I am developing websites. 
                <br />
                 I help people as a mentor on their journey to become a software developer. 
                <br />I love learning new technologies, taking a keen look at what problems they are solving and how can I use them to build better and scalable products.
                <br /> <br />
                </Row>
                <Row>
                    {/*Buttons*/}
                    <Col className="d-flex justify-content-center flex-wrap">
                        <div>
                            <a href="#contact">
                            <Button className="m-2" variant="outline-primary"> Let's Talk</Button>
                               
                            </a>
                        </div>
                        <div>
                    <a href="https://drive.google.com/file/d/1cSw34XDkpKS1qtGH2Owt7mjjufmNNLMt/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/roakoth" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/rose-akoth-496407160/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                    
                    </Col>
                </Row>   
                </Col>
            </Row>
          </Container>

        </div>    
        </div>
    )
}

export default About
