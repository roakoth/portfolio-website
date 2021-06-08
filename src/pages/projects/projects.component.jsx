import React from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card";

//projects logo
import L_VueJSToDoList from "../../assets/img/projects/VueJS-todolist-app.PNG";
import L_EdgeLedger from "../../assets/img/projects/edge-ledger-website.PNG";
import L_Portfolio from "../../assets/img/projects/personal-portfolio.PNG";
import L_BoardGame from "../../assets/img/projects/board-game.PNG";
import L_Google_Maps from "../../assets/img/projects/google-maps.PNG";
import L_ChuckNorris from "../../assets/img/projects/chuck-norris-app.PNG";
import L_FilmFestival from "../../assets/img/projects/outdoor-film-festival.PNG";

//skills
// skills
import L_REACT from "../../assets/img/skills/react.svg";
import Image from "react-bootstrap/Image";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_VUEJS from "../../assets/img/skills/vue.png";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_MAPS_API from "../../assets/img/skills/google-maps.png";

import './projects.style.css'

const Projects = () => {
    return (
        <div id="projects">
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
        <Timeline>
            <Events>
{/* Project: Personal Portfolio project */}
            <ImageEvent
            date="06/06/2021"
            className="text-center"
            text="Personal Portfolio"
            src={L_Portfolio}
            alt="Personal Portfolio"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a personal portfolio built using React Bootstrap.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li> It displays projects I have worked on</li>
                          <li> It displays technologies I have used</li>
                          <li>Powered by React Bootstrap</li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_BOOTSTRAP}
                                alt="React Bootstrap"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React Bootstrap
                            </span>
                          </li>
                     
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://roakoth.github.io/portfolio-website/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/roakoth/portfolio-website"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>



                {/* Project: TurnBased Board Game */}
        <ImageEvent
            date="01/08/2020"
            className="text-center"
            text="Board Game"
            src={L_BoardGame}
            alt="Turn Based Board Game"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a boardgame where two players play in turns to compete. One wins and one loses at the end of the game.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Implemented using Object Oriented Programming concept</li>
                          <li>Powered by HTML, CSS and Javascript</li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="Javascript"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                         
                          
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://fearless-fighters-game.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/roakoth/fearless-fighters-game"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>



           {/* Project: Restaurant Review site */}
        <ImageEvent
            date="01/06/2020"
            className="text-center"
            text="Restaurant Review Site"
            src={L_Google_Maps}
            alt="Restaurant Review site"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a project that creates an easy-to-use simple service that offers reviews of restaurants around you by consuming Google Maps API
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>It uses fetch API to fetch restaurants nearby</li>
                          <li>Powered by HTML, CSS and Javascript</li>
                          <li> It uses Google Places API to retrieve restaurants and reviews</li>
                          <li> It uses Google Street View photo to diplay restaurant's image</li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="Javascript"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MAPS_API}
                                alt="Google Maps APi"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Google Maps API
                            </span>
                          </li>
                         
                          
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://github.com/roakoth/restaurant-review-site"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


           {/* Project: EdgeLedger website */}
        <ImageEvent
            date="11/05/2020"
            className="text-center"
            text="Edgeledger website"
            src={L_EdgeLedger}
            alt="Edgeledger website"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a dummy website of a financial institution.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Implements flexbox and lightbox effects</li>
                          <li>Powered by HTML, CSS and Javascript</li>
                          <li> It is responsive</li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="Javascript"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                         
                          
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://roakoth.github.io/edgeledger-website/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/roakoth/edgeledger-website"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

           
          
           {/* Project: Outdoor Film Festival */}
        <ImageEvent
            date="20/04/2020"
            className="text-center"
            text="Outdoor film festival"
            src={L_FilmFestival}
            alt="Outdoor film festival"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a website about an outdoor film festival that allows users to pre-register so as to attend the event.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          
                          <li>Powered by HTML, CSS, Javascript and Bootstrap</li>
                          <li>It is mobile-responsive</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="Javascript"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                          
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://outdoor-film-festival.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/roakoth/Outdoor-Film-Festival"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>
          
     
     {/* Project: Chuck norris Project */}
     <ImageEvent
            date="11/04/2021"
            className="text-center"
            text="Chuck norris Generator App"
            src={L_ChuckNorris}
            alt="Chuck norris Project"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a React project that consumes Chucknorris api,to display a joke based on the category selected.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li> It consumes Chuck norris API</li>
                          <li>It uses fetch API to get a joke based on a category selected</li>
                          <li>Powered by React </li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://chucknorris-cool-app.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/roakoth/chuck-norris-generator"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


           {/* Project: Todo list app */}
     <ImageEvent
            date="01/04/2021"
            className="text-center"
            text="Todo list app"
            src={L_VueJSToDoList}
            alt="Todo list app"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a VueJS project that keep track of your todos items.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li> It keeps track of your todos items</li>
                          <li>It implements CRUD (Create, Read, Update, Delete) functionality</li>
                          <li>It is powered by VueJS</li>
                        
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_VUEJS}
                                alt="VueJS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              VueJS
                            </span>
                          </li>
                
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://todolist-vuejs-app.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/roakoth/vuejs-todolist-app"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>



            </Events>
        </Timeline>
            
        </div>
    )
}

export default Projects
