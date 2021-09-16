import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterProducts } from "../../../store/actions";
import "../Navigation.scss";

import NavigationItem from "./NavigationItem";

const femaleCategories = [
  {
    category: "female",
    content: "زنانه",
    linkType: "main",
  },
  {
    category: "women-coats",
    content: "کت زنانه",
  },
  {
    category: "women-jackets",
    content: "ژاکت زنانه",
  },
  {
    category: "women-suits",
    content: "کت و شلوار زنانه",
  },
  {
    category: "women-shirts",
    content: "پیراهن زنانه",
  },
  {
    category: "women-t-shirts",
    content: "تی شرت زنانه",
  },
  {
    category: "women-shoes",
    content: "کفش زنانه",
  },
  {
    category: "women-hats",
    content: "کلاه زنانه",
  },
  {
    category: "male",
    content: "مردانه",
    linkType: "main",
  },
  {
    category: "men-coats",
    content: "کت مردانه",
  },
  {
    category: "men-jackets",
    content: "ژاکت مردانه",
  },
  {
    category: "men-suits",
    content: "کت و شلوار مردانه",
  },
  {
    category: "men-shirts",
    content: "پیراهن مردانه",
  },
  {
    category: "men-t-shirts",
    content: "تی شرت مردانه",
  },
  {
    category: "men-shoes",
    content: "کفش مردانه",
  },
  {
    category: "men-hats",
    content: "کلاه مردانه",
  },
];

const sideNavigation = ({ filterProducts, children }) => (
  <nav className="side-navigation">
    <ul className="side-navigation-list">
      {femaleCategories.map((femaleCategory) => {
        const { category, linkType, content } = femaleCategory;

        return (
          <NavigationItem
            key={category}
            clicked={() => filterProducts(category)}
            linkType={linkType}
            link={`/productlist/${category}`}
          >
            {content}
          </NavigationItem>
        );
      })}
      {children}
    </ul>
  </nav>
);

sideNavigation.propTypes = {
  filterProducts: PropTypes.func.isRequired,
};

export default connect(null, { filterProducts })(sideNavigation);
