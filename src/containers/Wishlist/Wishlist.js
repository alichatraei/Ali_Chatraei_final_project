import React from "react";
import "./Wishlist.scss";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";
import PropTypes from "prop-types";

import WishlistItem from "./WishlistItem/WishlistItem";
import Button from "../../components/UI/Button/Button";
import ScrollToTopOnMount from "../../shared/ScrollToTopOnMount";

const wishlist = (props) => {
  let list;
  props.wishlistItems.length === 0
    ? (list = (
        <p
          className="main-info"
          style={{ marginTop: "20px", fontWeight: "500" }}
        >
          شما تا الان هیچ محصولی درون سبد علاقه مندی های خود ندارید
        </p>
      ))
    : (list = (
        <TransitionGroup component="ul" className="wishlist-list">
          {props.wishlistItems.map((item) => (
            <CSSTransition key={item.id} classNames="fade" timeout={300}>
              <WishlistItem item={item} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ));

  return (
    <>
      <ScrollToTopOnMount />
      <div className="wishlist-container">
        <h2 className="main-title">لیست علاقه مندی ها</h2>
        <p className="main-info">
          میتونید یک لیستی از علاقه مندی های خودتون انتخاب کنید که بعدا بتونید
          راحت تر خرید کنید
        </p>
        {list}
        {props.wishlistItems.length > 0 && (
          <Button clicked={props.clearWishlist} btnType="dark">
            پاک کردن لیست علاقه مندی ها
          </Button>
        )}
      </div>
    </>
  );
};

wishlist.propTypes = {
  wishlistItems: PropTypes.array.isRequired,
  clearWishlist: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    wishlistItems: state.products.wishlist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearWishlist: () => dispatch(actions.clearWishlist()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(wishlist);
