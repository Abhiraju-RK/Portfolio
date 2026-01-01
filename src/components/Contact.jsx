import React from 'react';

const Contact = () => {
    return (
        <footer id="contact" className="contact-section">
            <div className="container">
                <div className="contact-content glass">
                    <h2>Get In Touch</h2>
                    <p>Interested in working together or have a question? Feel free to reach out.</p>

                    <div className="contact-links">
                        <a href="mailto:abhiraju5801@gmail.com" className="contact-item">
                            <span>Email: abhiraju5801@gmail.com</span>
                        </a>
                        <a href="tel:+918129145068" className="contact-item">
                            <span>Phone: +91 8129145068</span>
                        </a>
                        <div className="social-links">
                            <a href="https://github.com/Abhiraju-RK" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://linkedin.com/in/abhiraju-rk" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    © 2026 Abhi Raju R.K. All rights reserved.
                </div>
            </div>

            <style>{`
                .contact-section {
                    padding: 5rem 0 2rem;
                }

                .contact-content {
                    text-align: center;
                    padding: 4rem 2rem;
                    margin-bottom: 3rem;
                    border: 1px solid var(--accent-color);
                    background: radial-gradient(circle at center, rgba(56, 189, 248, 0.1), rgba(15, 23, 42, 0.6));
                }

                .contact-content h2 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: #fff;
                }

                .contact-content p {
                    color: var(--secondary-color);
                    margin-bottom: 2.5rem;
                }

                .contact-links {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }

                .contact-item {
                    font-size: 1.1rem;
                    transition: var(--transition);
                }

                .contact-item:hover {
                    color: var(--accent-color);
                }

                .social-links {
                    margin-top: 1.5rem;
                    display: flex;
                    gap: 2rem;
                }

                .social-links a {
                    padding: 0.5rem 1.5rem;
                    border: 1px solid var(--secondary-color);
                    border-radius: 2rem;
                    transition: var(--transition);
                }

                .social-links a:hover {
                    border-color: var(--accent-color);
                    background: var(--accent-color);
                    color: #0f172a;
                }

                .copyright {
                    text-align: center;
                    color: var(--secondary-color);
                    font-size: 0.9rem;
                }
            `}</style>
        </footer>
    );
};

export default Contact;
