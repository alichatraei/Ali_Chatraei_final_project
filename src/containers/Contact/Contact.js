import React from "react";
import "./Contact.scss";
import ScrollToTopOnMount from "../../shared/ScrollToTopOnMount";

const contact = () => (
  <>
    <ScrollToTopOnMount />
    <div className="contact-container">
      <h2 className="main-title">تماس با ما</h2>
      <p className="main-info">
        با ما شیک پوشی را تجربه کنید، برای ارتباط با ما این فرم را تکمیل کنید
      </p>
      <h3 className="title">شماره تماس:</h3>
      <p>۰۹۳۳۷۶۵۶۷۴۸ (جهت ارتباط با ما)</p>
      <h3 className="title">ساعت کاری:</h3>
      <p>شنبه - پنجشنبه: ۸:۰۰ - ۲۰.۰۰</p>
    </div>
  </>
);

export default contact;
