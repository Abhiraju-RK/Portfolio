import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content glass slide-up">
                    <div className="about-text">
                        <p>
                            I am a Python Full Stack Developer with hands-on experience building scalable web applications using Django and REST frameworks.
                            I specialize in backend API design, database modeling (MySQL, PostgreSQL), and frontend integration using HTML/CSS and JavaScript (React).
                        </p>
                        <p>
                            Currently searching for full-stack or backend roles where I can apply my strong problem-solving skills and software engineering fundamentals.
                        </p>

                        <div className="education-list">
                            <h3>Education</h3>
                            <div className="edu-item">
                                <div className="year">2019 – 2022</div>
                                <div className="details">
                                    <h4>BA English Literature</h4>
                                    <span>Cooperative Arts and Science College, Trivandrum (60%)</span>
                                </div>
                            </div>
                            <div className="edu-item">
                                <div className="year">2019</div>
                                <div className="details">
                                    <h4>Higher Secondary (Computer Science)</h4>
                                    <span>GHSS Kamaleswaram, Trivandrum (60%)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .about-content {
                    padding: 3rem;
                    background: linear-gradient(145deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.8));
                }
                
                .about-text p {
                    margin-bottom: 1.5rem;
                    font-size: 1.1rem;
                    color: var(--secondary-color);
                }
                
                .education-list {
                    margin-top: 3rem;
                    border-top: 1px solid var(--glass-border);
                    padding-top: 2rem;
                }
                
                .education-list h3 {
                    color: var(--text-color);
                    margin-bottom: 1.5rem;
                }
                
                .edu-item {
                    display: flex;
                    gap: 2rem;
                    margin-bottom: 1.5rem;
                }
                
                .year {
                    color: var(--accent-color);
                    font-weight: 600;
                    min-width: 100px;
                }
                
                .details h4 {
                    font-size: 1.1rem;
                    margin-bottom: 0.25rem;
                }
                
                .details span {
                    font-size: 0.9rem;
                    color: var(--secondary-color);
                }
                
                @media (max-width: 768px) {
                    .edu-item {
                        flex-direction: column;
                        gap: 0.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
