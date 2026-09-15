import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import api from "../services/api";

function Projects() {

    const [projects, setProjects] = useState([]);


    /* =========================================
       RÉCUPÉRER LES PROJETS DE LARAVEL
    ========================================= */

    useEffect(() => {

        api.get("/projects")
            .then((response) => {
                setProjects(response.data);
            })
            .catch((error) => {
                console.error(
                    "Erreur lors du chargement des projets :",
                    error
                );
            });

    }, []);


    /* =========================================
       IMAGES DES PROJETS
    ========================================= */

    const getProjectImage = (title) => {

        const projectTitle = title.toLowerCase();

        if (projectTitle.includes("litoral")) {
            return "/images/litoral-clinic.png";
        }

        if (projectTitle.includes("shoes")) {
            return "/images/shoes-print.png";
        }

        return null;
    };


    /* =========================================
       FONCTIONNALITÉS
    ========================================= */

    const getFeatures = (title) => {

        const projectTitle = title.toLowerCase();


        /* LITORAL CLINIC */

        if (projectTitle.includes("litoral")) {

            return [
                "Gestion des patients",
                "Gestion des médecins",
                "Gestion des rendez-vous",
                "Gestion des rôles"
            ];

        }


        /* SHOES PRINT */

        if (projectTitle.includes("shoes")) {

            return [
                "Personnalisation",
                "Catalogue de chaussures",
                "Gestion des commandes",
                "Espace administrateur"
            ];

        }


        return [];
    };


    return (

        <section
            id="projects"
            className="portfolio-projects"
        >

            <div className="portfolio-projects-container">


                {/* =====================================
                    HEADER
                ===================================== */}

                <div className="portfolio-projects-header">

                    <p>
                        MES PROJETS
                    </p>

                    <h2>
                        Quelques projets{" "}
                        <span>réalisés</span>
                    </h2>

                    <div className="projects-header-line"></div>

                </div>


                {/* =====================================
                    PROJECTS GRID
                ===================================== */}

                <div className="portfolio-projects-grid">


                    {projects.map((project) => {

                        const image = getProjectImage(
                            project.title
                        );

                        const features = getFeatures(
                            project.title
                        );


                        return (

                            <article
                                className="portfolio-project-card"
                                key={project.id}
                            >


                                {/* =========================
                                    IMAGE
                                ========================= */}

                                <div className="portfolio-project-image">

                                    {image ? (

                                        <img
                                            src={image}
                                            alt={project.title}
                                        />

                                    ) : (

                                        <div className="project-no-image">

                                            <span>
                                                {project.title}
                                            </span>

                                        </div>

                                    )}

                                </div>


                                {/* =========================
                                    CONTENT
                                ========================= */}

                                <div className="portfolio-project-content">


                                    {/* TITLE */}

                                    <h3>
                                        {project.title}
                                    </h3>


                                    {/* DESCRIPTION */}

                                    <p className="portfolio-project-description">

                                        {project.description}

                                    </p>


                                    {/* =====================
                                        FEATURES
                                    ===================== */}

                                    <div className="portfolio-project-features">

                                        {features.map((feature) => (

                                            <div
                                                className="portfolio-feature"
                                                key={feature}
                                            >

                                                <CheckCircle2
                                                    size={17}
                                                />

                                                <span>
                                                    {feature}
                                                </span>

                                            </div>

                                        ))}

                                    </div>


                                    {/* =====================
                                        TECHNOLOGIES
                                    ===================== */}

                                    <div className="portfolio-project-tech">

                                        {project.technologies
                                            ?.split(",")
                                            .map((tech) => (

                                                <span key={tech}>

                                                    {tech.trim()}

                                                </span>

                                            ))}

                                    </div>


                                </div>

                            </article>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}

export default Projects;