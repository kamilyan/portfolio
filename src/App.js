import "./App.css";
import MyNavbar from "./components/myNavbar";
import MyCarousel from "./components/myCarousel";
import TitleMessage from "./components/titleMessage";
import About from "./pages/about";
import {Fade,Slide} from "react-reveal";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";
import bgImage from "./assets/img/parallex/background.webp"
import Skills from "./pages/skills"
import Projects from "./pages/projects"
import Contact from "./pages/contact"
function App() {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      <div>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={bgImage}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box">
        <Slide bottom duration={600}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <Container className="container-box">
        <Slide bottom duration={600}>
          <hr />
          <Projects />
        </Slide>
      </Container>
      <Container className="container-box">
        <Slide bottom duration={600}>
          <hr />
          <Contact />
        </Slide>
      </Container>
    </div>
  );
}

export default App;
