import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import { Parallax } from "react-parallax";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Experience from "./pages/experience/experience.component";
import Projects from "./pages/projects/projects.component";
import Contact from "./pages/contact/contact.component";
import Footer from "./components/footer/footer.component"

function App() {
  return (
    <div id="entire">
      <Particles
        className='particles-canvas'
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      {/* About Me section*/}
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallax/background.webp")}
          bgImageAlt=''
          strength={-200}
        >
          <Container className='container-box rounded'>
            <Slide duration={500}>
              <hr />
              <About />
            </Slide>
          </Container>
        </Parallax>
      </div>
      {/* skills section */}
    
      <div>
      
          <Container className='container-box rounded'>
            <Slide bottom duration={500}>
              <hr />
            <Skills />   
            </Slide>
          </Container>
        
      </div>
 

      <div>
          <Container className='container-box rounded'>
            <Fade duration={500}>
              <hr />
              <Experience />
            </Fade>
          </Container>
        
      </div>


      <div>
      
          <Container className='container-box rounded'>
            <Slide bottom duration={500}>
              <hr />
            <Projects />   
            </Slide>
          </Container>
        
      </div>
 
      <div>
          <Container className='container-box rounded'>
            <Fade duration={500}>
              <hr />
              <Contact />
            </Fade>
          </Container>
        
      </div>

     <hr />
     <Footer />

    </div>

  );
}

export default App;
