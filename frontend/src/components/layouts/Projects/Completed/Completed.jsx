import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './completed.css';
import img1 from '../../../assest/complete/complete1.jpg';
import img2 from '../../../assest/complete/complete2.jpg';
import img3 from '../../../assest/complete/complete3.jpg';
import img4 from '../../../assest/complete/complete4.jpg';
import img5 from '../../../assest/complete/complete5.jpg';
import img6 from '../../../assest/complete/complete6.jpg';
import img7 from '../../../assest/complete/complete7.jpg';
import img8 from '../../../assest/complete/complete8.jpg';
import img9 from '../../../assest/complete/complete9.jpg';
import img10 from '../../../assest/complete/complete10.jpg';
import upcoming from '../../../assest/Headers/complete.jpeg';

const Completed = () => {
  const images = [ img1,img2,img3,img4,img5,img6,img7,img8,img9,img10

  ];

  return (
    <section className="projects-section">
        {/* Project Image and Pricing */}
      {/* Header with Two Background Images and Text in Between */}
      <div style={{
  backgroundImage: `url(${upcoming})`,
  height: '400px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  color: '#fff',
  textAlign: 'center',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}}>
  {/* Split heading into individual letters for staggered animation */}
  <h2 style={{
    fontSize: '5rem',
    color: '#fff',
    position: 'relative',
    padding: '10px 20px',
    textShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)',
    display: 'inline-block',
    overflow: 'hidden',
  }}>
    {
      // Splitting the text "Ongoing Projects" into individual characters
      "Complete Projects".split('').map((char, index) => (
        <span key={index} style={{
          display: 'inline-block',
          opacity: 0,
          transform: 'translateX(-40px)',
          animation: `letterIn 0.5s ease-out forwards`,
          animationDelay: `${index * 0.3}s`, // Delay each letter by 0.1s
        }}>
          {char === ' ' ? '\u00A0' : char} {/* Handle spaces */}
        </span>
      ))
    }
  </h2>
  
  <style>
    {`
      @keyframes borderMove {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
      }
      
      @keyframes letterIn {
        0% {
          opacity: 0;
          transform: translateX(-20px); // Start off to the left
        }
        100% {
          opacity: 1;
          transform: translateX(0); // Slide in to original position
        }
      }
    `}
  </style>
</div>

{/* CSS for Animation */}
<style>
{`
  @keyframes borderMove {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }
`}
</style>

    <Container className="my-5">
      <Row>
        {images.map((image, index) => (
          <Col lg={3} md={4} sm={6} xs={12} className="mb-4" key={index}>
            <div className="card-3d">
              <Card className="border-0">
                <div className="image-container">
                  <Card.Img  src={image} alt={`House ${index + 1}`} className="img-fluid image" />
                  {/* <div className="logo-overlay">
                    <img src="logo.png" alt="Logo" style={{ height: '40px' }} />
                  </div> */}
                </div>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container> </section>
  );
};

export default Completed;
