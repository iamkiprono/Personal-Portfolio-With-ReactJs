import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <h3 className="headings">Contact</h3>
        <div className="contact-wrapper">
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/collins-kiprono-b09b33247/"
          >
            <FaLinkedin />
          </Link>
          <Link target="_blank" to="https://github.com/iamkiprono">
            <FaGithub />
          </Link>
          <Link target="_blank" to="https://twitter.com/iamkipronoo">
            <FaTwitter />
          </Link>
          <Link target="_blank" to="mailto:collinskirui23@gmail.com">
            <FaMailBulk />
          </Link>
          <Link target="_blank" to="https://wa.link/2t0fc7">
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
