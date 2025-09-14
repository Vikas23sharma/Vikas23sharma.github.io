import React from "react";
import me from "../assests/photo.png";
import CV from "../assests/Vikas_K_Sharma_Resume.pdf";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <div className="about-img">
          <img className="home-img" src={me} alt="home-image" />
        </div>
        <div  className="nav-link about">
          <h1 style={{ fontSize: "55px", marginBottom: "2%", textAlign: "left" }}>
            {/* About <span>Me</span> */}
            Vikas K. <span>Sharma</span>
          </h1>
          <h2 id="user-detail-name-about">
            {/* I'm <span>Vikas K. Sharma</span> from Satna, M.P */}
            Full Stack <span>Developer</span>
          </h2>
          <br />
          {/* <h3>MERN Developer</h3> */}

          <p id="user-detail-intro" style={{ letterSpacing: "1px", color: "white", padding: "5px" }}>
            {/* An Innovative and Aspiring Full Stack Web Developer.
            Proficient in HTML, CSS, and Javascript with 1200+ hours of
            coding experience, good interpersonal skills, and hands-on
            experience in building individual and collaborative projects.
            Looking forward to joining a progressive organization with
            opportunities to work on significant projects and grow as a developer.
            <br />
            <br />
            Apart from coding my hobbies include watching and playing cricket 🏏, doing calisthenics, and listening
            to indian hip-hop 🎧. */}
            I am a Full Stack Developer who enjoys problem-solving and delivering high-quality solutions across various development areas. I quickly adapt to new environments and am always eager to learn. I strive to contribute to impactful projects and collaborate with dynamic teams.
          </p>
          <button className="button" id="resume-button-2" style={{ marginTop: "25px" }}>
            <a
              href={CV}
              download
              target="_blank"
              id="resume-link-2"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1cKSYkAJnXyRiMakL-sEYEETQh1mox2z9/view?usp=sharing"
                )
              }
            >
              <span>
                <i className="bx bx-download"></i>
              </span>
              Resume
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
