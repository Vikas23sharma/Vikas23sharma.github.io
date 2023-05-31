import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xvonyopb");
  return (
    <>
      <section className="nav-link contact" id="contact">
        <div className="nav-link-contact">
          <h2>
            Contact <span>Me!</span>
          </h2>
          <h4>
            Coming together is a beginning. Keeping together is progress. Working together is success.
          </h4>
          <p>
            Fill the form to connect if any query <i className="fas fa-smile"></i>
          </p>
          <div className="list">
            <li id="contact-phone">
              <a
                href="https://api.whatsapp.com/send?phone=+917987047933"
                target="_blank"
              >
                +91-7987047933
              </a>
            </li>
            <li>
              <a
                href="mailto:Vishuss925@gmail.com"
                id="contact-email"
                target="_blank"
              >
                Vishuss925@gmail.com{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vikas-kumar-sharma-1a1562257/"
                id="contact-linkedin"
              >
                {" "}
                Linkedin : Vikas Kumar Sharma
              </a>
            </li>
          </div>
          <div className="contact-icons">
            <a
              id="contact-github"
              href="https://github.com/Vikas23sharma"
              target="_blank"
            >
              <i>
                <AiFillGithub />
              </i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+917987047933"
              target="_blank"
            >
              <i>
                <AiOutlineWhatsApp />
              </i>
            </a>
            <a
              id="contact-linkedin"
              href="https://www.linkedin.com/in/vikas-kumar-sharma-1a1562257/"
              target="_blank"
            >
              <i>
                <BsLinkedin />
              </i>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ color: "var(--main-color)" }}>
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="enter email address"
              border="1px solid green"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              htmlFor="email"
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                color: "var(--main-color)",
              }}>
              Type your message here
            </label>
            <textarea id="message" name="message" placeholder="write here..." />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
             style={{padding:"1% 2%",color:"white",backgroundColor:"#009cfe",border:"1px solid #009cfe",borderRadius:"5px"}}
              type="submit"
              disabled={state.submitting}
              color={"white"}
              // backgroundColor={"green"}
              onClick={() =>
                alert("Message Sent Successfully!!! ")
              }>
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
