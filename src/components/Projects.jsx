import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Dashboard Chart System",
            year: "2025",
            description: "Interactive analytics dashboard with role-based access and dynamic charts. REST APIs built with Django REST Framework; PostgreSQL for data storage."
        },
        {
            title: "Hospital Management System",
            year: "2025",
            description: "Backend services for patient, appointment, and billing management. Secure REST APIs with Django and MySQL; implemented admin controls and authentication."
        },
        {
            title: "Online Movie Seat Booking System",
            year: "2025",
            description: "Real-time seat selection and booking APIs; handled concurrency and transactional integrity. Django REST Framework and MySQL-based implementation."
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Key Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card glass">
                            <div className="project-header">
                                <h3>{project.title}</h3>
                                <span className="year-badge">{project.year}</span>
                            </div>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }

                .project-card {
                    padding: 2rem;
                    transition: var(--transition);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .project-card:hover {
                    transform: translateY(-5px);
                    background: rgba(30, 41, 59, 0.9);
                }

                .project-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1rem;
                }

                .project-header h3 {
                    font-size: 1.3rem;
                    color: #fff;
                }

                .year-badge {
                    background: rgba(56, 189, 248, 0.1);
                    color: var(--accent-color);
                    padding: 0.25rem 0.6rem;
                    border-radius: 4px;
                    font-size: 0.8rem;
                    font-weight: 600;
                }

                .project-card p {
                    color: var(--secondary-color);
                }
            `}</style>
        </section>
    );
};

export default Projects;
