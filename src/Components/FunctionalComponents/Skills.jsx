import '../CSS/Skills.css';

const Skills = () => {
    return (
        <section id="Skills">
            <h2 className="skills-heading">Skills</h2>
            <div className="skills-container">
                <div className="skill-category">
                    <h3>Programming Languages</h3>
                    <ul>
                        <li>Python</li>
                        <li>C / C++</li>
                        <li>Java</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h3>Web Development</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h3>Tools & Technologies</h3>
                    <ul>
                        <li>Git & GitHub</li>
                        <li>MongoDB</li>
                        <li>Express.js</li>
                        <li>VS Code</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
