import React, { useEffect, useRef, useState } from 'react';
import { Nav } from 'react-bootstrap';
import call from '../assest/call.png';

const CallToAction = () => {
  const [inView, setInView] = useState(false); // State to track visibility
  const sectionRef = useRef(null); // Ref for the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the section is in view
        if (entry.isIntersecting) {
          console.log('Section is in view'); // Debugging log
          setInView(true); // Trigger the animation when in view
        } else {
          setInView(false); // Reset if it goes out of view (optional)
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`cta ${inView ? 'in-view' : ''}`}>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/122a60dba1ff6f3ed1dc0b01668b182360900b59c51ad0cf65e461a7a0479c93?placeholderIfAbsent=true&apiKey=a1321863ba4e4bd8808d5b93faba38b9" 
        alt="Real estate background" 
        className="cta-background"
      />
      <div className="cta-content">
        <h2 className="cta-title">Find your best<br />Real Estate</h2>
        <p className="cta-description">We provide a complete service for the sale,<br />purchase or rental of real estate.</p>
        <button className="cta-button"> 
          <Nav.Link href="/ContactPage" className="nav-link mx-2" style={{color:'white'}}>Contact Us</Nav.Link>
        </button>
      </div>
      <style jsx>{`
        .cta {
          position: relative;
          border-radius: 50px;
          margin-top: 113px;
          overflow: hidden;
          opacity: 0; /* Start with the section hidden */
          transition: opacity 1s ease-in-out; /* Smooth opacity transition */
        }
        .cta.in-view {
          opacity: 1; /* Apply opacity change when in view */
        }

        .cta-background {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .cta-content {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 80px;
          opacity: 0;
          transform: translateX(100%); /* Start from the left */
          animation: fadeInUp 1.5s ease-in-out forwards, leftToRight 0s ease-in-out forwards; /* Left-to-right animation */
          background: url(${call}) no-repeat center/cover;
        }

        .cta-title {
          color: #110229;
          font-size: 54px;
          font-weight: 700;
          font-family: Arial, sans-serif;
          margin-bottom: 20px;
           transform: translateX(-100%); /* Start from the left */
          animation: fadeInUp 1.5s ease-in-out forwards, leftToRight 1.5s ease-in-out forwards; /* Left-to-right animation */
        }
        .cta-description {
          color: #585981;
          font-size: 22px;
          font-weight: 400;
          line-height: 36px;
          margin-bottom: 37px;
           transform: translateX(-150%); /* Start from the left */
          animation: fadeInUp 1.5s ease-in-out forwards, leftToRight 1.5s ease-in-out forwards; /* Left-to-right animation */
        }
        .cta-button {
          align-self: flex-start;
          border-radius: 14px;
          background-color: #ff6600;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 3.2px;
          padding: 14px 42px;
          border: none;
          cursor: pointer;
           transform: translateX(-100%); /* Start from the left */
          animation: fadeInUp 1.8s ease-in-out forwards, leftToRight 1.8s ease-in-out forwards; /* Left-to-right animation */
        }

        /* Responsive Design */
        @media (max-width: 1199px) {
          .cta {
            margin-top: 90px;
          }
          .cta-content {
            padding: 0 50px;
          }
          .cta-title {
            font-size: 48px;
          }
          .cta-description {
            font-size: 20px;
          }
        }

        @media (max-width: 991px) {
          .cta {
            margin-top: 60px;
          }
          .cta-content {
            padding: 40px 20px;
            text-align: center;
          }
          .cta-title {
            font-size: 36px;
          }
          .cta-description {
            font-size: 18px;
          }
          .cta-button {
            width: 100%;
            padding: 12px 0;
            font-size: 18px;
          }
        }

        @media (max-width: 576px) {
          .cta-content {
            padding: 30px 15px;
          }
          .cta-title {
            font-size: 30px;
          }
          .cta {
            position: relative;
            border-radius: 10px;
            margin-top: 113px;
            overflow: hidden;
            height: 50vh;
          }
          .cta-background {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .cta-title {
            font-size: 36px;
            position: relative;
            top: -30px;
          }
          .cta-description {
            font-size: 16px;
            color: white;
            position: relative;
            top: -30px;
          }
          .cta-button {
            padding: 10px 20px;
            font-size: 16px;
          }
        }

        /* Animation keyframes */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes leftToRight {
          from {
            opacity: 0;
            transform: translateX(-100%); /* Start from the left */
          }
          to {
            opacity: 1;
            transform: translateX(0); /* End at the normal position */
          }
        }
      `}</style>
    </section>
  );
};

export default CallToAction;
