import React from "react";
import asos from "../assests/asos.png";
import ramoji from "../assests/ramoji.png";
import grt from "../assests/grt.png";
import essentia from "../assests/essentia.png";
import vythiri from "../assests/vythiri.png";
import dollar from "../assests/dollar.png";
import vapparel from "../assests/vapparel.png";
import { SiNetlify } from "react-icons/si";
import myntra from "../assests/myntra.png";
import { AiFillGithub } from "react-icons/ai";

const Project = () => {
    return (
        <>
            <section id="projects">
                <div className="project-main-text">
                    <h2>
                        <span>Projects</span>
                    </h2>
                    <p style={{ marginTop: "2%" }}>Some of the things that i have built...</p>
                </div>
                <h2 style={{ marginTop: "2%",textAlign:"center" }}>
                    Live <span>Websites</span>
                </h2>
                <div className="nav-link projects live-websites" id="nav-link-projects-live">
                    <div className="project-card">
                        <img src={ramoji} alt="" />
                        <div className="layer">
                            <h5 className="project-title">Ramoji Filmcity</h5>
                            <p className="project-description">
                            Ramoji Film City is an integrated film studio facility located in Hyderabad, India. Spread over 2,000 acres, it is recognized as the world's largest film studio complex by the Guinness World Records
                            </p>
                            <div id="project-links">
                                <div className="project-deployed-link">
                                    <a href="https://www.ramojifilmcity.com/" target="_blank">
                                        <i>
                                            Live {/*  <SiNetlify size={15} /> */}
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src={grt} alt="" />
                        <div className="layer">
                            <h5 className="project-title">GRT Hotels</h5>
                            <p className="project-description">
                            GRT Hotels & Resorts is South India's premier hospitality chain. With 22 upscale hotels and luxury resorts in business, cultural and leisure destinations.
                            </p>
                            <div id="project-links">
                                <div className="project-deployed-link">
                                    <a href="https://www.grthotels.com/" target="_blank">
                                        <i>
                                            Live {/*  <SiNetlify size={15} /> */}
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src={essentia} alt="" />
                        <div className="layer">
                            <h5 className="project-title">Essentia Hotels</h5>
                            <p className="project-description">
                            Essentia Hotels is a luxury hospitality company that offers a range of premier hotels and resorts in various locations across India.
                            </p>
                            <div id="project-links">
                                <div className="project-deployed-link">
                                    <a href="https://www.essentiahotels.in/" target="_blank">
                                        <i>
                                            Live {/*  <SiNetlify size={15} /> */}
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src={vythiri} alt="" />
                        <div className="layer">
                            <h5 className="project-title">Vythiri Resort</h5>
                            <p className="project-description">
                            Nestled in a picturesque setting, Vythiri Resort is an exquisite jungle getaway located in Wayanad.
                            </p>
                            <div id="project-links">
                                <div className="project-deployed-link">
                                    <a href="https://www.vythiriresort.com/" target="_blank">
                                        <i>
                                            Live {/*  <SiNetlify size={15} /> */}
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 style={{ marginTop: "4%",textAlign:"center" }}>
                    My <span>Projects</span>
                </h2>
                <div className="nav-link projects" id="nav-link-projects">
                    <div className="project-card">
                        <img src={asos} alt="" />
                        <div className="layer">
                            <h5 className="project-title">FASHIQUE</h5>
                            <p className="project-description">
                                Fashique is a online fashion retailer inspired by asos.com, that follows the latest fashion trends, primarily aimed at young adults.
                            </p>
                            <p className="project-tech-stack">
                                Tech-Stack : REACT, REDUX, JS, HTML, CSS, CHAKRA UI
                            </p>
                            <div id="project-links">
                                <div className="project-deployed-link">
                                    <a href="https://fashique.vercel.app/" target="_blank">
                                        <i>
                                            Live {/*  <SiNetlify size={15} /> */}
                                        </i>
                                    </a>
                                </div>
                                <div className="project-github-link">
                                    <a
                                        href="https://github.com/Vikas23sharma/large-house-6330"
                                        target="_blank"
                                        id="project-deployed-link"
                                    >
                                        <i>
                                            <AiFillGithub />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <img src={dollar} alt="" />
                        <div className="layer">
                            <h5 className="project-title">DOLLAR STORE</h5>
                            <p className="project-description">
                                Dollar store is a domestic merchandise retail stores.Inspired from Bed Bath & Beyond that was founded in 1971.
                            </p>
                            <p className="project-tech-stack">Tech-Stack : HTML , CSS, JS, REACT, CHAKRA UI</p>
                            <div id="project-links">
                                <div className="project-deployed-link">
                                    <a
                                        href="https://dollar-zeta.vercel.app/"
                                        target="_blank"
                                    >
                                        <i>
                                            Live   {/* <SiNetlify /> */}
                                        </i>
                                    </a>
                                </div>
                                <div className="project-github-link">
                                    <a
                                        href="https://github.com/Vikas23sharma/uttermost-rat-9889/tree/main/bbby"
                                        target="_blank"
                                        id="project-deployed-link"
                                    >
                                        <i>
                                            <AiFillGithub />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <img src={myntra} alt="" />
                        <div className="layer">
                            <h5 className="project-title">Myntra</h5>
                            <p className="project-description">
                                The Project is inspired from Myntra which is a major Indian fashion e-commerce company.
                            </p>
                            <p className="project-tech-stack">Tech-Stack : HTML, CSS, JS</p>
                            <div id="project-links">
                                <div className="project-deployed-link">
                                    <a
                                        href="https://jazzy-selkie-afc155.netlify.app/"
                                        target="_blank"
                                    >
                                        <i>
                                            Live {/* <SiNetlify /> */}
                                        </i>
                                    </a>
                                </div>
                                <div className="project-github-link">
                                    <a
                                        href="https://github.com/PrashantGIT7388/blessed-story-3613"
                                        target="_blank"
                                        id="project-deployed-link"
                                    >
                                        <i>
                                            <AiFillGithub />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <img src={vapparel} alt="" />
                        <div className="layer">
                            <h5 className="project-title">V apparels</h5>
                            <p className="project-description">
                                V apparels is a luxury department store.Inspired from a United Kingdom based E-commerce website.
                            </p>
                            <p className="project-tech-stack">Tech-Stack : HTML, CSS, JS</p>
                            <div id="project-links">
                                <div className="project-deployed-link">
                                    <a
                                        href="https://fluffy-malasada-634452.netlify.app/"
                                        target="_blank"
                                    >
                                        <i>
                                            Live   {/* <SiNetlify /> */}
                                        </i>
                                    </a>
                                </div>
                                <div className="project-github-link">
                                    <a
                                        href="https://github.com/Vikas23sharma/verdant-straw-7365"
                                        target="_blank"
                                        id="project-deployed-link"
                                    >
                                        <i>
                                            <AiFillGithub />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Project;
