import React, { useState, useEffect } from 'react';
// import './Navbar.css'; // Removed as we use internal styles

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <a href="#home" className="logo">Abhiraju</a>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        
        .navbar.scrolled {
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-color);
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        
        .nav-links a {
          font-size: 1rem;
          font-weight: 500;
          position: relative;
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--accent-color);
          transition: width 0.3s;
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .hamburger {
          display: none;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
        }
        
        .hamburger span {
          width: 25px;
          height: 3px;
          background-color: var(--text-color);
          transition: 0.3s;
        }

        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 70px;
            right: -100%;
            height: calc(100vh - 70px);
            width: 100%;
            background: var(--bg-color);
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: 0.3s;
          }
          
          .nav-links.active {
            right: 0;
          }
          
          .hamburger {
            display: flex;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
