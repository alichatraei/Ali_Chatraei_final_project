import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterProducts } from "../../../store/actions";

import NavigationItem from "./NavigationItem";

const navigationItems = ({ filterProducts, isAuth }) => (
  <ul className="nav-list">
    <NavigationItem link="/" exact>
      خانه
    </NavigationItem>
    <NavigationItem
      clicked={() => filterProducts("female")}
      link="/productlist/female"
      exact
    >
      زنانه
    </NavigationItem>
    <NavigationItem
      clicked={() => filterProducts("male")}
      link="/productlist/male"
      exact
    >
      مردانه
    </NavigationItem>
    <NavigationItem link="/contact" exact>
      ارتباط با ما
    </NavigationItem>

    {isAuth ? (
      <NavigationItem link="/orders" exact>
        سفارشات
      </NavigationItem>
    ) : null}
  </ul>
);

NavigationItem.propTypes = {
  isAuth: PropTypes.bool,
  filterProducts: PropTypes.func,
};

const mapStateToProps = ({ auth }) => ({ isAuth: auth.token !== null });

export default connect(mapStateToProps, { filterProducts })(navigationItems);
