import { useState } from "react";
import {
    Mail,
    MapPin,
    ExternalLink,
    Send,
    User,
    MessageSquare,
    FileText
} from "lucide-react";

import api from "../services/api";


function Contact() {

    /* =========================
       FORM DATA
    ========================= */

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });


    /* =========================
       STATUS
    ========================= */

    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);


    /* =========================
       INPUT CHANGE
    ========================= */

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };


    /* =========================
       SEND MESSAGE
    ========================= */

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);
        setStatus("");

        try {

            await api.post("/contact", form);

            setStatus("success");

            /* vider le formulaire */

            setForm({
                name: "",
                email: "",
                subject: "",
                message: ""
            });

        } catch (error) {

            console.error("Erreur envoi message :", error);

            setStatus("error");

        } finally {

            setLoading(false);

        }

    };


    return (

        <section
            id="contact"
            className="contact-section"
        >

            <div className="contact-container">


                {/* =========================
                    HEADER
                ========================= */}

                <div className="contact-header">

                    <div className="section-label contact-label">

                        <span></span>

                        CONTACT

                        <span></span>

                    </div>


                    <h2>

                        Travaillons <span>ensemble</span>

                    </h2>


                    <p>

                        Vous avez un projet, une opportunité ou simplement
                        envie d'échanger ?

                        <br />

                        N'hésitez pas à me contacter.

                    </p>

                </div>


                {/* =========================
                    CONTENT
                ========================= */}

                <div className="contact-content">


                    {/* =========================
                        LEFT
                    ========================= */}

                    <div className="contact-info">


                        {/* EMAIL */}

                        <a
                            href="mailto:kaganereda@gmail.com"
                            className="contact-card"
                        >

                            <div className="contact-icon">

                                <Mail size={23} />

                            </div>


                            <div>

                                <small>
                                    Email
                                </small>

                                <h3>
                                    kaganereda@gmail.com
                                </h3>

                                <p>
                                    Je réponds généralement sous 24h.
                                </p>

                            </div>

                        </a>



                        {/* LOCALISATION */}

                        <div className="contact-card">

                            <div className="contact-icon">

                                <MapPin size={23} />

                            </div>


                            <div>

                                <small>
                                    Localisation
                                </small>

                                <h3>
                                    Casablanca, Maroc
                                </h3>

                                <p>
                                    Disponible pour des opportunités
                                    sur site ou en remote.
                                </p>

                            </div>

                        </div>



                        {/* LINKEDIN */}

                        <a
                            href="https://www.linkedin.com/in/reda-kagane-742533392/"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-card"
                        >

                            <div className="contact-icon">

                                <ExternalLink size={23} />

                            </div>


                            <div>

                                <small>
                                    LinkedIn
                                </small>

                                <h3>
                                    Reda Kagane
                                </h3>

                                <p>
                                    Connectons-nous sur LinkedIn.
                                </p>

                            </div>

                        </a>

                    </div>


                    {/* =========================
                        RIGHT - FORM
                    ========================= */}

                    <div className="contact-form-card">


                        {/* FORM TITLE */}

                        <div className="form-title">

                            <div className="contact-icon">

                                <Send size={22} />

                            </div>


                            <div>

                                <h3>
                                    Envoyez-moi un message
                                </h3>

                                <p>
                                    Remplissez ce formulaire et je vous
                                    répondrai rapidement.
                                </p>

                            </div>

                        </div>


                        {/* =========================
                            FORM
                        ========================= */}

                        <form onSubmit={handleSubmit}>


                            {/* NAME + EMAIL */}

                            <div className="form-row">


                                {/* NAME */}

                                <div className="input-group">

                                    <User size={18} />

                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Votre nom"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>


                                {/* EMAIL */}

                                <div className="input-group">

                                    <Mail size={18} />

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Votre email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                            </div>


                            {/* SUBJECT */}

                            <div className="input-group">

                                <FileText size={18} />

                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Sujet"
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            {/* MESSAGE */}

                            <div className="textarea-group">

                                <MessageSquare size={18} />

                                <textarea
                                    name="message"
                                    placeholder="Votre message..."
                                    rows="6"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>

                            </div>


                            {/* SEND BUTTON */}

                            <button
                                type="submit"
                                className="send-button"
                                disabled={loading}
                            >

                                <Send size={18} />

                                {loading
                                    ? "Envoi en cours..."
                                    : "Envoyer le message"
                                }

                                {!loading && <span>→</span>}

                            </button>


                            {/* SUCCESS */}

                            {status === "success" && (

                                <p className="form-success">

                                    ✓ Message envoyé avec succès !

                                </p>

                            )}


                            {/* ERROR */}

                            {status === "error" && (

                                <p className="form-error">

                                    Une erreur est survenue.
                                    Veuillez réessayer.

                                </p>

                            )}

                        </form>

                    </div>

                </div>

            </div>

        </section>

    );
}


export default Contact;