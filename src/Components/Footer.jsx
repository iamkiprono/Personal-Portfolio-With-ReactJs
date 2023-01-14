import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [copyRight, setCopyRight] = useState("2000");
  const update = () => {
    const dateNow = new Date().getFullYear();
    setCopyRight(dateNow);
  };
  useEffect(update);

  return (
    <div className="footer">
      <div className="social-links">
        <ul>
          <li>
            <a href="https://github.com/iamkiprono" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/iamkiprono" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/iamkiprono" target="_blank">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </li>
        </ul>
      </div>
      <p>{copyRight}</p>
    </div>
  );
};

export default Footer;
