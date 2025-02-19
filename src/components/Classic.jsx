import React from 'react'
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";
import projImg1 from "../assets/img/classic .jpg";
import projImg2 from "../assets/img/jacquard berber.jpg";
import projImg3 from "../assets/img/jacquard diamond.jpg";
import projImg4 from "../assets/img/chevron .jpg";
import projImg5 from "../assets/img/striped.jpg";
import projImg6 from "../assets/img/unique chevron.jpg";
import "animate.css"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Footer } from './Footer.js';

 const Classic = () => {

  
    const products = [
        {
          title: "CLASSIC",
          description: "Design by artex",
          imgUrl: [projImg1,projImg2],
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
        <>
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
                     
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              products.map((product, index) => {
                                return (
                                  <ProductsCard
                                    key={index}
                                    {...product}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="section">
                        <Row>
                            {
                              products.map((product, index) => {
                                return (
                                  <ProductsCard
                                    key={index}
                                    {...product}
                                    />
                                )
                              })
                            }
                          </Row>                   
                           </Tab.Pane>
    
                        <Tab.Pane eventKey="third">
                        <Row>
                            {
                              products.map((product, index) => {
                                return (
                                  <ProductsCard
                                    key={index}
                                    {...product}
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
        <Footer/>

          </>
      )
    }
    
    export default Classic;
