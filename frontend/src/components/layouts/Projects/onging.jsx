import React from 'react';
import { Container,Carousel, Row, Col, Image, Card } from 'react-bootstrap';

import { FaRoad,FaPlug, FaBolt } from "react-icons/fa";
import { MdHomeWork } from 'react-icons/md';
import { GiBrickWall } from 'react-icons/gi';
import { GiDoubleStreetLights } from 'react-icons/gi';
import Facility from './Fasility';
import ongoing from '../../assest/Headers/ongoing.png'


const ProjectDetails = () => {
  return (
    
    <Container fluid>
      {/* Header with Background Image */}
      <div style={{ 
        backgroundImage: ongoing, 
        height: '400px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: '#fff',
        textAlign: 'center'
      }}>
        <h2 style={{
          position: 'absolute', 
          bottom: '10px',
          top:'50%', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          padding: '10px 20px',
          borderRadius: '10px'
        }}>Ongoing Projects</h2>
      </div>

      {/* Project Name */}
      <Row className="text-center my-4">
        <Col>
          <h3 style={{ fontFamily: 'Serif', color: '#4c1d1d' }}>Praveen Sai Avenue</h3>
        </Col>
      </Row>

      {/* Project Image and Pricing */}
      {/* <Row className="justify-content-center mb-4">
        <Col md={6}>
          <Image src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg" rounded fluid />
        </Col>
      </Row> */}
       <Row className="justify-content-center mb-4">
      <Col md={6}>
        <Carousel interval={2000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
              alt="Cyber Kitty"
            />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x525.png?text=Slide+2"
              alt="Second slide"
            />
            <Carousel.Caption>
          
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x525.png?text=Slide+3"
              alt="Third slide"
            />
            <Carousel.Caption>
           
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>

      <Row className="text-center mb-4">
        <Col>
          <p><strong>Price:</strong></p>
          <p><strong> Starting:</strong> 47,47,850 <strong> / Ending: </strong> 77,60,850</p>
        </Col>
      </Row>

      {/* Map Section */}
      <Row className="justify-content-center mb-4">
  <Col md={6}>
    <Card className="text-center">
      <Card.Body>
        <div style={{ height: '350px', backgroundColor: '#d3d3d3', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3890.16777134342!2d80.10506967507408!3d12.832432987470323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQ5JzU2LjgiTiA4MMKwMDYnMjcuNSJF!5e0!3m2!1sen!2sin!4v1729676751212!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Card.Body>
    </Card>
  </Col>
</Row>


      {/* Location */}
      <Row className="text-center mb-4">
        <Col>
          <p><strong>Location:</strong></p>
          <p>East Tambaram, Mappedu.</p>
        </Col>
      </Row>

      {/* Specifications */}
      <Container className="d-flex  justify-content-center">
      <Row className="text-center mb-2 d-flex align-items-center justify-content-center">
        <Col>
          <p><strong>Specification:</strong></p>
          <Container className="text-center my-4 ">
      
      <Row className="justify-content-center mt-3 ">
        <Col xs={6} md={2} className="d-flex flex-column align-items-center mx-2">
          <FaRoad size={30} />
          <p>Road</p>
        </Col>
        <Col xs={6} md={2} className="d-flex flex-column align-items-center mx-2">
          <FaPlug size={30} />
          <p>EB</p>
        </Col>
        <Col xs={6} md={2} className="d-flex flex-column align-items-center mx-2">
          <MdHomeWork size={30} />
          <p>Residential</p>
        </Col>
        <Col xs={6} md={2} className="d-flex flex-column align-items-center mx-2">
          <GiBrickWall size={30} />
          <p>Boundary</p>
        </Col>
        <Col xs={6} md={2} className="d-flex flex-column align-items-center mx-2">
          <GiDoubleStreetLights size={30} />
          <p className='Street'style={{width:'100px'}} > Street lights</p>
        </Col>
    
      </Row>
    </Container>
     

        </Col>
      </Row>
      </Container>
       
    <div>
       
       {/* <div className="about-us-section">
      <Container fluid className="text-center py-5">
        <h1 className="about-us-title">ABOUT US</h1>
      </Container>
    </div> */}

      {/* Specification Section */}
      <div className="Specification">
        <div className="container mt-2">
          <div className="row align-items-center">
            <div className="col-md-7  text-center mb-1">
              <img 
                src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" 
                alt="Yarn" 
                width="500px" 
                className="img-fluid facility-image" 
              />
            </div>
            <div className="col-md-5">
              <div className="content-box reveal right">
              <h2>School</h2>
                <ul className="Specification">
                  <li>Zion international school</li>
                  <li>Kendriya vidyalaya</li>
                  <li>Shree niketan patasala</li>
                  <li>Global school</li>
                  <li>GKM Vidyasharam school</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* School Section */}
      <div className="School">
        <div className="container mt-2">
          <div className="row align-items-center flex-md-row-reverse ">
            <div className="col-md-7 text-center mb-2">
              <img 
                src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" 
                alt="Yarn Dyeing" 
                className="img-fluid facility-image" 
              />
            </div>
            <div className="col-md-3">
              <div className="content-box reveal right">
                <h2>College :</h2>
                <ul className="Specification">
              <li>  Sri Balaji Arts & science college  </li>
               <li> GKM engineering college  </li>
               <li> Bharath institute of Law  </li>
               <li> Madras Christian College  </li>
               <li> Tagore Engineering </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hospital Section */}
      <div className="Hospital">
        <div className="container mt-1">
          <div className="row align-items-center">
            <div className="col-md-7 text-center mb-5">
              <img 
                src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" 
                alt="Processing" 
                className="img-fluid facility-image" 
              />
            </div>
            <div className="col-md-5">
              <div className="content-box reveal left">
                <h2>Hospital</h2>
                <ul className="Specification">
                  <li>Sri Balaji Arts & science college</li>
                  <li>GKM engineering college</li>
                  <li>Bharath institute of Law</li>
                  <li>Madras Christian College</li>
                  <li>Tagore Engineering</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>

   
  );
  
};

export default ProjectDetails;
