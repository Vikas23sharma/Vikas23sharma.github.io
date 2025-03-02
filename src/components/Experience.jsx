import React from "react";
import me from "../assests/photo.png";
import CV from "../assests/Vikas_sharma_resume.pdf";

const Experience = () => {
  return (
    <>
      <section className="experience section" id="experience">
      <div className="experience-main-text">
          <h2>
            Work <span>Experience</span>
          </h2>
          <h2 style={{ marginTop: "40px",textAlign:"left",fontSize:"40px" }}>Simplotel</h2>
          <p style={{ marginTop: "10px",textAlign:"left" }}>Software Engineer</p>
          <p style={{ marginTop: "5px",textAlign:"left" }}>Nov 2023 - Present</p>
      </div>
      <ul className="work-ex-list">
          <li>
          Migrated an existing Ember.js codebase to React with Redux,achieving improved performance and maintainability.
          </li>
          <li>
          Applied Cloudinary transformations to images, reducing costs related to media assets by approximately 20%.
          </li>
          <li>
          Implemented lazy loading for images, videos, and third-party scripts, optimizing load times and site speed.
          </li>
          <li>
          Set up Google Analytics for data-driven decisions, adding GTM tags and SEO codes to enhance search visibility and tracking.
          </li>
          <li>
          Fixed critical bugs in the CMS admin panel,developed golden plugin feature,developed booking features like day-use room bookings and a multi-language translator.
          </li>
          <li>
          Integrated third-party chatbots, boosting user engagement and interactivity.
          </li>
          <li>
          Developed responsive web applications using JavaScript, React, HTML, and CSS to deliver dynamic and user-friendly solutions.
          </li>
          <li>
          Ensured websites adhered to ADA compliance standards, enhancing accessibility for all users.
          </li>
          <li>
          Worked as a Scrum Master, managing a team of 15 members and facilitating sprint planning, stand-ups, and reviews.
          </li>
          <li>
          Contributed to live projects for clients including GRT Hotels, Ramoji Film City, Essentia Hotels and Leisure Hotels.
          </li>
        </ul>
      </section>
    </>
  );
};

export default Experience;