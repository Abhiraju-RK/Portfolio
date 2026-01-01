import React from 'react';

const Skills = () => {
    const skills = [
        { category: "Languages", items: ["Python", "JavaScript", "HTML5", "CSS3", "SQL"] },
        { category: "Frameworks & Libraries", items: ["Django", "Django REST Framework", "React", "React.js"] },
        { category: "Databases", items: ["MySQL", "PostgreSQL", "SQLite"] },
        { category: "Tools & Others", items: ["Git", "Postman", "Figma", "REST APIs", "Adobe XD", "Linux/Windows"] }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="skill-card glass" style={{ animationDelay: `${index * 0.1}s` }}>
                            <h3>{skillGroup.category}</h3>
                            <div className="skill-tags">
                                {skillGroup.items.map((skill, idx) => (
                                    <span key={idx} className="tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }

                .skill-card {
                    padding: 2rem;
                    transition: var(--transition);
                }

                .skill-card:hover {
                    transform: translateY(-5px);
                    border-color: var(--accent-color);
                }

                .skill-card h3 {
                    margin-bottom: 1.5rem;
                    color: var(--accent-color);
                    font-size: 1.2rem;
                }

                .skill-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem;
                }

                .tag {
                    padding: 0.5rem 1rem;
                    background: rgba(56, 189, 248, 0.1);
                    border-radius: 2rem;
                    font-size: 0.9rem;
                    color: var(--text-color);
                    border: 1px solid transparent;
                    transition: var(--transition);
                }

                .tag:hover {
                    background: var(--accent-color);
                    color: #0f172a;
                }
            `}</style>
        </section>
    );
};

export default Skills;
