import React from "react";
import "./FakeForm.scss";

const fakeForm = () => (
  <form className="questions-form">
    <input type="text" placeholder="نام" />
    <input type="text" placeholder="ایمیل" />
    <textarea placeholder="متن دلخواه"></textarea>
    <button>ارسال</button>
  </form>
);

export default fakeForm;
