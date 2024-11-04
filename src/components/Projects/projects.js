import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Project from "./index";
import AnimatedLetters from '../AnimatedLetters';
import mern from '../../assets/images/mern.jpeg';
import web from '../../assets/images/web.jpeg';
import restaurant from '../../assets/images/Screenshot 2023-12-24 230403.png';
import stock from '../../assets/images/stock.jpeg';

function Projects() {
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3980);
  }, []);
  
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
          <Row className="justify-content-center">
            <Col xs={12} sm={6} md={4} lg={3} className="project-card">
              <Project
                imgPath={mern}
                isBlog={false}
                title="IvyEstate"
                description="A real estate website made using MERN stack"
                ghLink="https://github.com/bharath0616/IvyEstate.git"
                demoLink="https://ivyestate-zo0s.onrender.com"
              />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="project-card">
              <Project
                imgPath={web}
                isBlog={false}
                title="Web automation"
                description="Automated the developed react website to sign in, scrape the data, store it in excel, and send mail to users. Used UiPath studio RPA for this."
                ghLink="https://github.com/bharath0616/UiPath-rpa-web-automation.git"
              />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="project-card">
              <Project
                imgPath={restaurant}
                isBlog={false}
                title="UrbanMart"
                description="UrbanMart is a dynamic eCommerce platform designed to provide a seamless shopping experience. This project features a modern, minimalist design with advanced functionalities such as search, category filtering, and a fully integrated shopping cart system and stripe payments with MySQL database for storage."
                ghLink="https://github.com/bharath0616/UrbanMart.git"
              />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="project-card">
              <Project
                imgPath={stock}
                isBlog={false}
                title="Stock automation"
                description="Automated the process of collecting the stock data from NSE and sending it to users via smtp email."
                ghLink="https://github.com/bharath0616/Rpa-uipath--nse-stock-report.git"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Projects;
