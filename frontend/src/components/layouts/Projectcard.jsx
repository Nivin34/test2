// Projects.js
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Park from '../assest/properts/PraveenPark.png';
import Avenue from '../assest/properts/PraveenAvenue.png';
import Enclave from '../assest/properts/PraveenEnclave.png';
import Blossom from '../assest/properts/Enclave.png';
import Garden from '../assest/properts/Garden.png';
import ongoing from '../assest/Headers/ongoings.jpeg'
import Home from '../assest/properts/Home.png';
const projectsData = [
  { name: "Praveen Park", location: "CGA, Sri Kumar Avenue, Neelankarai", city: "Tamil Nadu 600115", price: "₹ 62,55,000", land: "2 BHK Duplex House", imageUrl: Park ,route: "/PraveenPark"},
  { name: "Praveen Sai Avenue", location: "MTC Nagar, Valluvar Salai, Avadi", city: "Chennai, Tamil Nadu 600054", price: "₹ 48,29,000", land: "Residential Land", imageUrl: Avenue,route: "/PraveenSaiAvenue" },
  { name: "Praveen Sai Enclave", location: "Outarcher, Mambakkam", city: "Chennai, Tamil Nadu 600117", price: "₹ 53,65,000", land: "Residential Land", imageUrl: Enclave,route: "/PraveenSaiEnclave" },
  { name: "Praveen Blossom", location: "Maduravoyal, Poonamallee", city: "Tamil Nadu 600077", price: "₹ 61,23,000", land: "Residential Land", imageUrl: Blossom ,route: "/PraveenBloosom"},
  { name: "Praveen Sai Garden", location: "Urappakkam, Chengalpattu", city: "Tamil Nadu 603202", price: "₹ 52,58,000", land: "Residential Land", imageUrl: Garden,route: "/PraveenSaiGarden" },
  { name: "Praveen Marvel", location: "Urappakkam, Chengalpattu", city: "Tamil Nadu 603202", price: "₹ 52,58,000", land: "Residential Land", imageUrl: Garden,route: "/PraveenMarvel" },
  { name: "Praveen Sai Home", location: "Urappakkam, Chengalpattu", city: "Tamil Nadu 603202", price: "₹ 52,58,000", land: "Residential Land", imageUrl: Garden,route: "/PraveenSaiHome" },
];

const ProjectCard = ({ name, location, city, price,route, land, imageUrl, isVisible, index }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    // Use a URL-friendly name format
    navigate(route);
  };

  return (
    <div
      className={`project-card ${isVisible ? 'visible' : ''}`}
      style={{
        transitionDelay: `${index * 450}ms`,
        transform: isVisible
          ? 'translateX(0)'
          : index % 2 === 0
          ? 'translateX(-100px)'
          : 'translateX(100px)',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <img src={imageUrl} alt={name} className="project-image" />
      <div className="overlay">
        <button className="view-more-button" onClick={handleViewMore}>View More</button>
      </div>
      <div className="project-info">
        <h3 className="project-title">{name}</h3>
        <p className="project-location">{location}, {city}</p>
        <div className="project-footer">
          {/* <span className="project-price">{price}</span> */}
          {/* <a href="#contact" className="project-link">{land}</a> */}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState(new Array(projectsData.length).fill(false));
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setVisibleCards((prev) => {
            const newVisibleCards = [...prev];
            newVisibleCards[index] = true;
            return newVisibleCards;
          });
          observer.unobserve(entry.target);
        }
      });
    });

    cardsRef.current.forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (

    
    <section className="projects-section">
       <div style={{
  backgroundImage: `url(${ongoing})`,
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
      "Ongoing Projects".split('').map((char, index) => (
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


      {/* <h2 className="section-title">Recently Added Projects</h2> */}
      <br /> <br />

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} ref={el => (cardsRef.current[index] = el)} data-index={index}>
            <ProjectCard {...project} isVisible={visibleCards[index]} index={index} />
          </div>
        ))}
      </div>
  <style jsx>{`
        .projects-section {
          padding: 40px 20px;
          text-align: center;
        }
        .section-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #322153;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .project-card {
          position: relative;
          background-color: #fff;
          border: 2px solid #ff6600;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transform: translateX(-100%);
          opacity: 0;
          transition: transform 0.8s ease, opacity 0.5s ease, box-shadow 0.3s ease, transform 0.3s ease;
          cursor: pointer;
         
        }
        .project-card.visible {
          transform: translateX(0);
          opacity: 1;
        }
        .project-card:hover {
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
          transform: scale(1.05);
        }
        .project-card:hover .overlay {
          opacity: 1;
          visibility: visible;
        }
        .project-image {
          width: 100%;
          height: 280px;
          object-fit: cover;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease;
        }
        .view-more-button {
          padding: 10px 20px;
          background-color: #ff6600;
          color: #fff;
          border: none;
          border-radius: 5px;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .view-more-button:hover {
          background-color: #e55a00;
        }
        .project-info {
          padding: 15px;
          position: relative;
        }
        .project-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #322153;
        }
        .project-location {
          font-size: 14px;
          color: #666;
          margin-bottom: 10px;
        }
        .project-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .project-price {
          font-size: 16px;
          font-weight: bold;
          color: #e85a00;
        }
        .project-link {
          font-size: 12px;
          color: #0066cc;
          text-decoration: underline;
          transition: color 0.3s ease;
        }
        .project-link:hover {
          color: #004080;
        }

        /* Responsive styles */
        @media (max-width: 991px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 576px) {
          .projects-grid {
            grid-template-columns: repeat(1, 1fr);
          }
          .project-image {
            height: 150px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
