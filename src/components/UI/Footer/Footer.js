import React from "react";
import "./Footer.scss";

import FakeForm from "../FakeForm/FakeForm";
import SocialMedia from "../SocialMedia/SocialMedia";

const footer = () => (
  <footer className="footer">
    <div className="questions">
      <div className="questions-wrapper">
        <div className="questions-text">
          <h3 className="title">سوال دارید ؟</h3>
          <p className="subtitle">
            میتونید از بخش تماس با ما با ما در ارتباط باشید.
          </p>
        </div>
        <FakeForm />
      </div>
    </div>
    <SocialMedia />
    <div className="support-section">
      <div className="support-wrapper">
        <div className="buy-from-us">
          <h4>از ما خرید کنید</h4>
          <p>پوشاک زنانه</p>
          <p>پوشاک مردانه</p>
        </div>
        <div className="online-shop">
          <h4>فروشگاه آنلاین پوشاک</h4>
          <p>نحوه خرید</p>
          <p>سوالات متداول</p>
        </div>
        <div className="about-us">
          <h4>درباره ما</h4>
          <p>ما کی هستیم</p>
          <p>شبکه های اجتماعی</p>
        </div>
      </div>
    </div>
    <p className="advertising">توسعه داده شده توسط : علی چترایی با 💙</p>
  </footer>
);

export default footer;
