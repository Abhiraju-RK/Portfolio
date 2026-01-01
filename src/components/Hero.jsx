import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-content">
                <div className="hero-text slide-up">
                    <p className="greeting">Hello, I'm</p>
                    <h1 className="name">Abhi Raju R.K</h1>
                    <h2 className="title">Python Full Stack Developer</h2>
                    <p className="description">
                        Building scalable web applications with Django, React, and modern web technologies.
                        Passionate about backend API design and creating seamless user experiences.
                    </p>
                    <div className="cta-buttons">
                        <a href="#projects" className="btn primary">View Work</a>
                        <a href="#contact" className="btn secondary">Contact Me</a>
                    </div>
                </div>

                <div className="hero-image fade-in">
                    <div className="image-wrapper glass">
                        <img src="/profile.jpg" alt="Abhi Raju R.K" />
                    </div>
                </div>
            </div>

            <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px; /* Navbar height */
          background: radial-gradient(circle at top right, rgba(56, 189, 248, 0.1), transparent 40%);
        }
        
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .greeting {
          color: var(--accent-color);
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        
        .name {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #f8fafc, #94a3b8);
          -webkit-background-clip: text;
          color: transparent;
        }
        
        .title {
          font-size: 2rem;
          color: var(--secondary-color);
          margin-bottom: 1.5rem;
        }
        
        .description {
          font-size: 1.1rem;
          color: var(--secondary-color);
          margin-bottom: 2.5rem;
          max-width: 500px;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1.5rem;
        }
        
        .btn {
          padding: 12px 30px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
        }
        
        .btn.primary {
          background: var(--accent-color);
          color: #0f172a;
        }
        
        .btn.primary:hover {
          background: #0ea5e9;
          transform: translateY(-2px);
        }
        
        .btn.secondary {
          border: 1px solid var(--accent-color);
          color: var(--accent-color);
        }
        
        .btn.secondary:hover {
          background: rgba(56, 189, 248, 0.1);
          transform: translateY(-2px);
        }
        
        .image-wrapper {
          position: relative;
          padding: 1rem;
          max-width: 400px;
          margin: 0 auto;
        }
        
        .image-wrapper img {
          width: 100%;
          height: auto;
          border-radius: 0.5rem;
          display: block;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          
          .description {
            margin: 0 auto 2.5rem;
          }
          
          .cta-buttons {
            justify-content: center;
          }
          
          .name {
            font-size: 3rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
