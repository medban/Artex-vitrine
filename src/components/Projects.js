import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import projImg1 from "../assets/img/classic .jpg";
import projImg2 from "../assets/img/jacquard berber.jpg";
import projImg3 from "../assets/img/jacquard diamond.jpg";
import projImg4 from "../assets/img/chevron .jpg";
import projImg5 from "../assets/img/striped.jpg";
import projImg6 from "../assets/img/TISSU PLAT.jpg";
/***** DC 2 ******/
import Img1 from "../assets/img/E1.jpg";
import Img2 from "../assets/img/E2.jpg";
import Img3 from "../assets/img/E3.jpg";
import Img4 from "../assets/img/E4.jpg";
import Img5 from "../assets/img/E5.jpg";
import Img6 from "../assets/img/E6.jpg";





export const Projects = () => {

/******DATA CATAGORIE 1 ********/
  const projects = [
    {
      title: "CLASSIC",
      
      imgUrl: [projImg1,], 
      link: "/Classic",
    },
    {
      title: "JACQUARD",
      
      imgUrl: [projImg2], 
      link: "/Jacquard",
    },
    {
      title: "JACQUARD DIAMOND",
      
      imgUrl: [projImg3], 
      link: "/JacquardDiamond",
    },
    {
      title: "CHEVRON",
      
      imgUrl: [projImg4], 
      link: "/Chevron",
    },
    {
      title: "GRAIN DE CAFE",
      
      imgUrl: [projImg5], 
      link: "/grainDecafe",
    },
    {
      title: "TISSU PLAT",
      
      imgUrl: [projImg6], 
      link: "/tissuplat",
    },
  ];
  /******DATA 2 echarpe ********/
  const projects2 = [
    {
      title: "BLUE",
      
      imgUrl: [Img1,], 
      link: "/Echarpe",
    },
    {
      title: "PINK",
      
      imgUrl: [Img2], 
      link: "/Echarpe",
    },
    {
      title: "BIEGE",
      
      imgUrl: [Img3], 
      link: "/Echarpe ",
    },
    {
      title: "GREEN",
      
      imgUrl: [Img4], 
      link: "/Echarpe",
    },
    {
      title: "DRAK BLUE",
      
      imgUrl: [Img5], 
      link: "/Echarpe",
    },
    {
      title: "PISTASHIO",
      
      imgUrl: [Img6], 
      link: "/Echarpe",
    },
  ];

  return (
    <section className="project" id="project" >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Categorie </h2>
                <p>Le tissage du coton est un processus de fabrication textile où les fils de coton sont entrelacés pour créer un tissu. Il existe plusieurs types de tissage, chacun offrant des caractéristiques différentes en termes de texture</p>
                <Tab.Container  defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">SERVIETTE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">ECHARPE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">JETER</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                                
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                   
                       </Tab.Pane>

                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                   </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background design" />
      </section>
  )
}
