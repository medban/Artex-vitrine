import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/classic .jpg";
import projImg2 from "../assets/img/jacquard berber.jpg";
import projImg3 from "../assets/img/jacquard diamond.jpg";
import projImg4 from "../assets/img/chevron .jpg";
import projImg5 from "../assets/img/striped.jpg";
import projImg6 from "../assets/img/unique chevron.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "CLASSIC",
      description: "Design by artex",
      imgUrl: projImg1,
    },
    {
      title: "JACQUARD BERBER",
      description: "Design BY ARTEX",
      imgUrl: projImg2,
    },
    {
      title: "JACQUARD DIAMOND",
      description: "Design BY ARTEX",
      imgUrl: projImg3,
    },
    {
      title: "CHAVRON ",
      description: "Design BY ARTEX",
      imgUrl: projImg4,
    },
    {
      title: "GRAIN DE CAFE ",
      description: "Design BY ARTEX",
      imgUrl: projImg5,
    },
    {
      title: "UNIQUE CHEVRON ",
      description: "Design BY ARTEX",
      imgUrl: projImg6,

    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Categorie </h2>
                <p>Le tissage du coton est un processus de fabrication textile où les fils de coton sont entrelacés pour créer un tissu. Il existe plusieurs types de tissage, chacun offrant des caractéristiques différentes en termes de texture</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">SERVIETTE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">VELOUR</Nav.Link>
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
                    <Tab.Pane eventKey="section">
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
