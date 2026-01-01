import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-container">
                    <div className="exp-card glass">
                        <div className="exp-header">
                            <div>
                                <h3>Python Developer Intern</h3>
                                <p className="company">Ziya Academy — Remote (Muzpathadom, Aluva)</p>
                            </div>
                            <div className="exp-date">Jun 2025 – Sep 2025</div>
                        </div>
                        <ul className="exp-list">
                            <li>Built and maintained backend services using Django and Django REST Framework.</li>
                            <li>Designed database schemas and optimized queries for performance and scalability.</li>
                            <li>Implemented authentication, CRUD APIs, and integrated third-party services.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <style>{`
                .exp-card {
                    padding: 2.5rem;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .exp-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 1.5rem;
                    border-bottom: 1px solid var(--glass-border);
                    padding-bottom: 1rem;
                }

                .company {
                    color: var(--accent-color);
                    margin-top: 0.5rem;
                }

                .exp-date {
                    font-weight: 600;
                    color: var(--secondary-color);
                    text-align: right;
                }

                .exp-list {
                    padding-left: 1.5rem;
                }

                .exp-list li {
                    list-style-type: disc;
                    margin-bottom: 0.8rem;
                    color: var(--text-color);
                }

                @media (max-width: 768px) {
                    .exp-header {
                        flex-direction: column;
                        gap: 1rem;
                    }
                    .exp-date {
                        text-align: left;
                    }
                }
            `}</style>
        </section>
    );
};

export default Experience;
