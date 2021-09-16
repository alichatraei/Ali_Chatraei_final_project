import React, { Component } from "react";
import "./HomePage.scss";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import PropTypes from "prop-types";

import Modal from "../../components/UI/Modal/Modal";
import Button from "../../components/UI/Button/Button";
import ScrollToTopOnMount from "../../shared/ScrollToTopOnMount";

import saleBg from "../../assets/home_page/Sale.jpg";
import slideOne from "../../assets/home_page/slide_1.jpg";
import slideTwo from "../../assets/home_page/slide_2.jpg";
import slideThree from "../../assets/home_page/slide_3.jpg";
import slideFour from "../../assets/home_page/slide_4.jpg";
import slideFive from "../../assets/home_page/slide_5.jpg";

const slides = [];
slides.push(slideOne, slideTwo, slideThree, slideFour, slideFive);

class HomePage extends Component {
  closeModal = () => {
    this.props.purchaseInit();
    this.props.closeModal();
  };

  render() {
    return (
      <>
        <ScrollToTopOnMount />
        <Modal
          modalType="small"
          showModal={this.props.purchased}
          showBackdrop={this.props.purchased}
          closeModal={this.closeModal}
        >
          <p>سفارش با موفقیت پرداخت شد</p>
          <Button clicked={this.closeModal} btnType="dark">
            متوجه شدم
          </Button>
        </Modal>
        <div className="home-container">
          <div className="showcase">
            <h3 className="main-title">استایل های زیبا با تم های مشکی زیبا</h3>
            <p className="main-info">مناسب افراد شیک پوش و خوش ظاهر</p>
          </div>
          <div style={{ backgroundImage: `url(${saleBg})` }} className="sale">
            <h1 className="title">خرید</h1>
            <p className="subtitle">مناسب افراد شیک پوش و خوش ظاهر</p>
          </div>
          <div className="slider">
            {slides.map((slide) => (
              <div
                key={slide}
                style={{ backgroundImage: `url('${slide}')` }}
                className="slide"
              >
                <h3 className="title">مدل های جدید از راه رسید</h3>
                <h3 className="subtitle">
                  مدل های زیبا و خوش تن برای افراد جذاب
                </h3>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

HomePage.propTypes = {
  purchased: PropTypes.bool.isRequired,
  purchaseInit: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    purchased: state.order.purchased,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    purchaseInit: () => dispatch(actions.purchaseInit()),
    closeModal: () => dispatch(actions.closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
