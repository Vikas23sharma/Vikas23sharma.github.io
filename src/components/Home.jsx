import React from "react";
// import CV from "../assests/CV.pdf";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="nav-link home">
          <div className="slide">
            <span className="one">Hello ,</span>
            <span className="two">MY NAME IS</span>
          <h1 id="user-detail-name"><span style={{ backgroundColor: "transparent" }}>Vikas</span> Kumar Sharma</h1>

          </div>
          <h3 id="user-detail-skill">
            I am a MERN <span style={{ backgroundColor: "transparent" }}>Developer.</span>
          </h3>

          <br />
          {/* <button
             id="resume-button-2" style={{ marginTop: "5px" }}>
            <a
              href={CV}
              download
              id="resume-link-2"
              target="_blank"
            
            >
              <span>
                <i className="bx bx-download"></i>
              </span>
              Resume
            </a>
          </button> */}
        </div>
      </section>
    </>
  );
};

export default Home;

// onClick={() =>
//   window.open(
//     "https://drive.google.com/file/d/18wvKPj5-14OlL_aI5ab0mZG_h6LtC2X4/view?usp=sharing"
//   )
// }
