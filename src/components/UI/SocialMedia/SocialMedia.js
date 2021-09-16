import React from "react";
import "./SocialMedia.scss";

import fb from "../../../assets/social_media/fb.png";

import instagram from "../../../assets/social_media/instagram.png";

const SocialMedia = () => (
  <div className="social-media">
    <h3 className="title">شبکه های اجتماعی</h3>
    <div className="icons-wrapper">
      <a
        href="https://www.facebook.com/alichatraei1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={fb} alt="facebook" />
      </a>
      <a
        href="https://www.instagram.com/ali.chatraei1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagram} alt="instagram" />
      </a>
    </div>
  </div>
);

export default SocialMedia;
