import {
    Monitor,
    Server,
    Database,
    Wrench
} from "lucide-react";

function Skills() {

    const skills = [
        {
            title: "Frontend",
            icon: <Monitor size={25} />,
            technologies: [
                "React.js",
                "Redux",
                "Redux Toolkit",
                "HTML5",
                "CSS3",
                "Tailwind CSS"
            ]
        },

        {
            title: "Backend",
            icon: <Server size={25} />,
            technologies: [
                "Laravel",
                "Node.js",
                "Express.js",
                "REST API"
            ]
        },

        {
            title: "Base de données",
            icon: <Database size={25} />,
            technologies: [
                "MySQL",
                "MongoDB"
            ]
        },

        {
            title: "Outils",
            icon: <Wrench size={25} />,
            technologies: [
                "Git",
                "GitHub",
                "Postman",
                "VS Code"
            ]
        }
    ];


    return (

        <section id="skills" className="skills-new">

            <div className="skills-new-container">

                {/* HEADER */}

                <div className="skills-new-header">

                    <div className="skills-new-label">
                        <span></span>
                        MES COMPÉTENCES
                    </div>

                    <h2>
                        Technologies que
                        <span> j'utilise</span>
                    </h2>

                    <p>
                        Les principales technologies et outils
                        que j'utilise pour concevoir mes applications.
                    </p>

                </div>


                {/* SKILLS */}

                <div className="skills-new-grid">

                    {skills.map((skill) => (

                        <div
                            className="skill-new-card"
                            key={skill.title}
                        >

                            <div className="skill-card-top">

                                <div className="skill-new-icon">
                                    {skill.icon}
                                </div>

                                <h3>
                                    {skill.title}
                                </h3>

                            </div>


                            <div className="skill-new-technologies">

                                {skill.technologies.map((tech) => (

                                    <span key={tech}>
                                        {tech}
                                    </span>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default Skills;