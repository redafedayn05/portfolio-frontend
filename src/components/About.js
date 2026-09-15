import {
    Code2,
    Layers3,
    Database,
    Rocket
} from "lucide-react";

function About() {

    return (

        <section id="about" className="about-new">

            <div className="about-new-container">


                {/* =========================
                    HEADER
                ========================= */}

                <div className="about-new-header">

                    <div className="about-new-label">
                        <span></span>
                        À PROPOS DE MOI
                    </div>

                    <h2>
                        Je transforme des idées en
                        <span> applications web.</span>
                    </h2>

                </div>


                {/* =========================
                    CONTENT
                ========================= */}

                <div className="about-new-grid">


                    {/* LEFT */}

                    <div className="about-new-text">

                        <h3>
                            Développeur Full Stack
                        </h3>

                        <p>
                            Je conçois et développe des applications web
                            modernes en travaillant aussi bien sur le
                            <strong> frontend</strong> que sur le
                            <strong> backend</strong>.
                        </p>

                        <p>
                            J'utilise principalement
                            <strong> React</strong>,
                            <strong> Laravel</strong> et
                            <strong> MySQL</strong> pour créer des
                            solutions performantes, structurées et adaptées
                            aux besoins des utilisateurs.
                        </p>

                        <p>
                            J'aime transformer un besoin réel en une
                            application complète, de la conception de
                            l'interface jusqu'à la gestion des données
                            et des API.
                        </p>


                        {/* TECHNOLOGIES */}

                        <div className="about-tags">

                            <span>React.js</span>
                            <span>Laravel</span>
                            <span>MySQL</span>
                            <span>REST API</span>

                        </div>

                    </div>


                    {/* RIGHT */}

                    <div className="about-new-cards">


                        <div className="about-mini-card">

                            <div className="about-mini-icon">
                                <Code2 size={24} />
                            </div>

                            <div>
                                <h4>Frontend</h4>
                                <p>
                                    Interfaces modernes et responsive
                                </p>
                            </div>

                        </div>


                        <div className="about-mini-card">

                            <div className="about-mini-icon">
                                <Layers3 size={24} />
                            </div>

                            <div>
                                <h4>Backend</h4>
                                <p>
                                    API REST et logique métier
                                </p>
                            </div>

                        </div>


                        <div className="about-mini-card">

                            <div className="about-mini-icon">
                                <Database size={24} />
                            </div>

                            <div>
                                <h4>Base de données</h4>
                                <p>
                                    Conception et gestion MySQL
                                </p>
                            </div>

                        </div>


                        <div className="about-mini-card">

                            <div className="about-mini-icon">
                                <Rocket size={24} />
                            </div>

                            <div>
                                <h4>Projet complet</h4>
                                <p>
                                    De l'idée jusqu'au déploiement
                                </p>
                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </section>

    );

}

export default About;