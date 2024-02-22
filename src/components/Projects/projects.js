import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Project from "./index";
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import mern from '../../assets/images/mern.jpeg'
import web from '../../assets/images/web.jpeg'
import restaurant from '../../assets/images/Screenshot 2023-12-24 230403.png'
import stock from '../../assets/images/stock.jpeg'
function Projects() {
  const [letterClass, setLetterClass]=useState('text-animate')
  useEffect(() => {
       setTimeout(() => {
          setLetterClass('text-animate-hover')
      },3980)
      
  },[])
  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass} 
              strArray={['M','y','','P','r','o','j','e','c','t','s']}
              idx={16}
            />
          </h1>
        </div>
      </div>

      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <Project
                 imgPath={mern}
                isBlog={false}
                title="IvyEstate"
                description="A real estate website made using MERN stack"
                ghLink="https://github.com/bharath0616/IvyEstate.git"
                demoLink=""
              />
            </Col>
            <Col md={4} className="project-card">
            <Project
              imgPath={web}
              isBlog={false}
              title="Web automation"
              description="Automated the developed react website to sign in , scrape the data , store it in excel
              and send mail to users. Used UiPath studio RPA for this."
              ghLink="https://github.com/bharath0616/UiPath-rpa-web-automation.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <Project
              imgPath={restaurant}
              isBlog={false}
              title="BiteScape"
              description="Restaurant website made using tech stack html, css, jquery, node and express"
              ghLink="https://github.com/bharath0616/BiteScape.git"
              demoLink="https://bitescape.netlify.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <Project
              imgPath={stock}
              isBlog={false}
              title="Stock automation"
              description="Automated the process of collecting the stock data from NSE and sending it to users via smtp email. "
              ghLink="https://github.com/bharath0616/Rpa-uipath--nse-stock-report.git"
              demoLink=""              
            />
          </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Projects;
