import React from "react";
import "./Order.scss";

const order = (props) => {
  return (
    <li className="order-item">
      <ul className="order-products">
        {props.products.map((product) => (
          <li key={product.id}>
            <p className="order-title">
              <span className="bold">نام محصول: </span>
              {product.title}
            </p>
            <p className="order-title">
              <span className="bold">سایز محصول: </span>
              {product.size}
            </p>
            <p className="order-title">
              <span className="bold">تعداد محصول: </span>
              {product.amount}
            </p>
            <hr />
          </li>
        ))}
      </ul>
      <p className="order-price">قیمت کل: {props.price}.۰۰۰ ریال</p>
    </li>
  );
};

export default order;
