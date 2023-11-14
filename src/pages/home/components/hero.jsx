import React, { useState } from 'react';
import 'animate.css';
import '../home.css';
function HeroSection() {
  const [showAkbar, setShowAkbar] = useState(false);

  const handleIconClick = () => {
    setShowAkbar(!showAkbar);
  };

  return (
    <section className="hero homepage">
      <div className="hero-section">
        <div className="container">
          <div className="row hero-content">
            <div className="col-lg-7 col-12 hero-content animate__animated animate__fadeInTopLeft">
              <h2>
                <span>Hello !! </span> Welcome to my portofolio website,  My Name Is Akbar Aulia Ramadhan, Or you guys can call me{' '}

                <span
                  onClick={handleIconClick}
                  style={{ cursor: 'pointer', marginLeft: '5px', fontSize: '1.2em' }}
                >
                  &gt;&gt;
                </span>
                {showAkbar && <span>"Akbar"</span>}
                .
              </h2>
              <h6>
              I am a junior full-stack engineer specializing in web application development. I also possess various skills and knowledge to support my current role.              </h6>
              <button className="btn btn-outline-secondary">Download My CV</button>
            </div>
            <div className="col-lg-5 hero-image">
              <div className="animate__animated animate__fadeInTopRight">
                <img src="/assets/img/angjay.jpg" alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
