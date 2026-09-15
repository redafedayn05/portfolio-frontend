import { useEffect, useState } from "react";
import { Download, Moon, Sun } from "lucide-react";

function Navbar() {
    const [lightMode, setLightMode] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const sections = ["home", "about", "skills", "projects", "contact"];

    const toggleTheme = () => {
        setLightMode((prev) => !prev);
        document.body.classList.toggle("light-mode");
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 160;

            let currentSection = "home";

            sections.forEach((sectionId) => {
                const section = document.getElementById(sectionId);

                if (section && section.offsetTop <= scrollPosition) {
                    currentSection = sectionId;
                }
            });

            setActiveSection(currentSection);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, );

    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    return (
        <nav className="navbar">

            <a
                href="#home"
                className="logo"
                onClick={() => handleNavClick("home")}
            >
                REDA<span>.DEV</span>
            </a>

            <div className="nav-links">

    <a
        href="#home"
        className={activeSection === "home" ? "active" : ""}
        onClick={() => handleNavClick("home")}
    >
        Accueil
    </a>

    <a
        href="#about"
        className={activeSection === "about" ? "active" : ""}
        onClick={() => handleNavClick("about")}
    >
        À propos
    </a>

    <a
        href="#skills"
        className={activeSection === "skills" ? "active" : ""}
        onClick={() => handleNavClick("skills")}
    >
        Compétences
    </a>

    <a
        href="#projects"
        className={activeSection === "projects" ? "active" : ""}
        onClick={() => handleNavClick("projects")}
    >
        Projets
    </a>

    <a
        href="#contact"
        className={activeSection === "contact" ? "active" : ""}
        onClick={() => handleNavClick("contact")}
    >
        Contact
    </a>

</div>

            <div className="nav-actions">

                <a
                    href="/cv/CV-Reda.pdf"
                    download="CV-Reda.pdf"
                    className="cv-button"
                >
                    <Download size={16} />
                    Télécharger CV
                </a>

                <button
                    className="theme-button"
                    onClick={toggleTheme}
                    aria-label="Changer le thème"
                >
                    {lightMode
                        ? <Sun size={18} />
                        : <Moon size={18} />
                    }
                </button>

            </div>

        </nav>
    );
}

export default Navbar;