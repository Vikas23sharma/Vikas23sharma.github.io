import React from "react";
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import { TbBrandVercel } from "react-icons/tb";
// import { SiTypescript } from "react-icons/si";
// import { TfiWrite } from "react-icons/tfi";

const Tools = () => {
    return (
        <>
            <section id="tools">
                <div className="tools-main-text">
                    <h2>
                        My <span>Tools</span>
                    </h2>
                    {/* <p style={{ marginTop: "10px" }}>What I am Expert In ?</p> */}
                </div>

                <div className="nav-link tools" id="tools-part">
                    <div className="tools-card">
                        <div className="tools-card-img">
                            <TbBrandVscode
                                style={{ height: "50px", width: "50px", margin: "auto" }}
                            />
                        </div>
                        <h3 className="tools-card-name" style={{ color: "#009cfe" }}>
                            Vs Code
                        </h3>
                    </div>
                    <div className="tools-card">
                        <div className="tools-card-img">
                            <SiPostman
                                style={{ height: "50px", width: "50px", margin: "auto" }}
                            />
                        </div>
                        <h3 className="tools-card-name" style={{ color: "#009cfe" }}>
                            Postman
                        </h3>
                    </div>
                    <div className="tools-card">
                        <div className="tools-card-img">
                            <SiNetlify
                                style={{ height: "50px", width: "50px", margin: "auto" }}
                            />
                        </div>
                        <h3 className="tools-card-name" style={{ color: "#009cfe" }}>
                            Netlify
                        </h3>
                    </div>
                    <div className="tools-card">
                        <div className="tools-card-img">
                            <AiFillGithub
                                style={{ height: "50px", width: "50px", margin: "auto" }}
                            />
                        </div>
                        <h3 className="tools-card-name" style={{ color: "#009cfe" }}>
                            Git & Github
                        </h3>
                    </div>
                    <div className="tools-card">
                        <div className="tools-card-img" style={{ textAlign: "center" }}>
                            <AiFillCodeSandboxSquare
                                style={{ height: "50px", width: "50px", margin: "auto" }}
                            />
                        </div>
                        <h3 className="tools-card-name" style={{ color: "#009cfe" }}>
                            CodeSandBox
                        </h3>
                    </div>
                    <div className="tools-card">
                        <div className="tools-card-img">
                            <TbBrandVercel
                                style={{ height: "50px", width: "50px", margin: "auto" }}
                            />
                        </div>
                        <h3 className="tools-card-name" style={{ color: "#009cfe" }}>
                            vercel
                        </h3>
                    </div>
                    {/* <div className="tools-card">
                        <div className="tools-card-img">
                            <SiTypescript
                                style={{ height: "50px", width: "50px", margin: "auto" }}
                            />
                        </div>
                        <h3 className="tools-card-name" style={{ color: "#009cfe" }}>
                            Typescript
                        </h3>
                    </div>

                    <div className="tools-card">
                        <div className="tools-card-img">
                            <TfiWrite
                                style={{ height: "50px", width: "50px", margin: "auto" }}
                            />
                        </div>
                        <h3 className="tools-card-name" style={{ color: "#009cfe" }}>
                            DSA
                        </h3>
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default Tools;
