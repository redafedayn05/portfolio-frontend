import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Mail,
    Terminal
} from "lucide-react";

function Hero() {

    return (
        <section id="home" className="hero">

            <div className="hero-grid">

                {/* LEFT */}
                <motion.div
                    className="hero-left"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <div className="hero-label">
                        <span>SALUT, JE SUIS</span>
                        <div></div>
                    </div>

                    <h1>
                        Reda <span>Kagane</span>
                    </h1>

                    <h2>
                        Full Stack Developer
                    </h2>

                    <p className="hero-description">
                        Je conçois et développe des applications web modernes,
                        performantes et évolutives.
                    </p>

                    <div className="hero-buttons">

                        <a
                            href="#projects"
                            className="btn primary"
                        >
                            <ArrowUpRight size={19} />
                            Voir mes projets
                        </a>

                        <a
                            href="#contact"
                            className="btn secondary"
                        >
                            <Mail size={19} />
                            Me contacter
                        </a>

                    </div>

                    <div className="tech-mini">

                        <span>React</span>
                        <span>Laravel</span>
                        <span>Node.js</span>
                        <span>MySQL</span>
                        <span>Git</span>

                    </div>

                </motion.div>


                {/* RIGHT */}
                <motion.div
                    className="hero-right"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >

                    <div className="terminal-card">

                        <div className="terminal-header">

                            <div className="terminal-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <Terminal size={16} />

                        </div>

                        <div className="terminal-body">

                            <p>
                                <span className="terminal-gray">
                                    developer@reda:~$
                                </span>{" "}
                                whoami
                            </p>

                            <p className="terminal-blue">
                                Reda Kagane
                            </p>

                            <br />

                            <p>
                                <span className="terminal-gray">
                                    $
                                </span>{" "}
                                cat skills.js
                            </p>

                            <p className="code">
                                <span>const</span> developer = {"{"}
                            </p>

                            <p className="code indent">
                                frontend: [
                                <span className="green">
                                    'React'
                                </span>,
                                <span className="green">
                                    'JAVASCRIPT'
                                </span>
                                ],
                            </p>

                            <p className="code indent">
                                backend: [
                                <span className="green">
                                    'Laravel'
                                </span>,
                                <span className="green">
                                    'Node.js'
                                </span>
                                ],
                            </p>

                            <p className="code indent">
                                database: [
                                <span className="green">
                                    'MySQL'
                                </span>,
                                <span className="green">
                                    'MongoDB'
                                </span>
                                ],
                            </p>

                            <p className="code indent">
                                tools: [
                                <span className="green">
                                    'Git'
                                </span>,
                                <span className="green">
                                    'Postman'
                                </span>
                                ]
                            </p>

                            <p className="code">
                                {"};"}
                            </p>

                            <p className="terminal-comment">
                                Always learning...
                                <span className="cursor"></span>
                            </p>

                        </div>

                        <div className="availability">

                            <span className="status-dot"></span>

                            <span>
                                Disponible pour de nouvelles opportunités
                            </span>

                            <ArrowUpRight size={18} />

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}

export default Hero;