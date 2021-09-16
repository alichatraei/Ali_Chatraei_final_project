import React, { Component } from "react";
import "./OrderSummary.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Button from "../../../components/UI/Button/Button";

class OrderSummary extends Component {
  render() {
    const { priceTotal, delivery, orderTotal, acceptOrder } = this.props;

    return (
      <div className="order-summary">
        <h3 className="title">خلاصه وضعیت سفارش</h3>
        <p className="info delivery-info">ارسال رایگان ۳ محصول به بالا</p>
        <div className="wrapper">
          <p className="subtitle">قیمت کل همه محصولات:</p>
          <p className="value">{priceTotal}.۰۰۰ ریال</p>
        </div>
        <div className="wrapper">
          <p className="subtitle">قیمت پست:</p>
          <p className="value">{delivery}.۰۰۰ ریال</p>
        </div>
        <div className="wrapper">
          <p className="subtitle">قیمت کل خرید:</p>
          <p className="value">{orderTotal}.۰۰۰ ریال</p>
        </div>
        <Button clicked={acceptOrder} btnType="dark">
          {this.props.isAuth
            ? "تکمیل مرحله سفارش"
            : "برای تکمیل سفارش ثبت نام کنید"}
        </Button>
      </div>
    );
  }
}

OrderSummary.propTypes = {
  priceTotal: PropTypes.number.isRequired,
  delivery: PropTypes.number.isRequired,
  orderTotal: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    priceTotal: state.products.priceTotal,
    delivery: state.products.delivery,
    orderTotal: state.products.orderTotal,
  };
};

export default connect(mapStateToProps)(OrderSummary);
