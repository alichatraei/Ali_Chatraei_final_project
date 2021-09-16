import React from "react";
import "./WishlistItem.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "../../../components/UI/Button/Button";

const wishlistItem = (props) => {
  const { id, title, subtitle, img, description, price } = props.item;

  return (
    <li className="wishlist-item">
      <h3 className="wishlist-title">{title}</h3>
      <p className="wishlist-value">{subtitle}</p>
      <div className="wishlist-content">
        <div className="wishlist-img-wrapper">
          <img src={img} alt="" className="wishlist-item-img" />
        </div>
        <div className="wishlist-info">
          <h3 className="wishlist-subtitle">توضیحات محصول:</h3>
          <p className="wishlist-value">{description}</p>
          <h3 className="wishlist-subtitle">قیمت: {price}.۰۰۰ ریال</h3>
          <div className="btn-wrapper">
            <Link to={`/details/${id}`}>
              <Button clicked={() => props.showDetails(id)}>
                نمایش جزئیات بیشتر محصول
              </Button>
            </Link>
            <Button clicked={() => props.removeWishlistItem(id)} btnType="dark">
              حذف از لیست
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

wishlistItem.propTypes = {
  showDetails: PropTypes.func.isRequired,
  removeWishlistItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    showDetails: (id) => dispatch(actions.showDetails(id)),
    removeWishlistItem: (id) => dispatch(actions.removeWishlistItem(id)),
  };
};

export default connect(null, mapDispatchToProps)(wishlistItem);
