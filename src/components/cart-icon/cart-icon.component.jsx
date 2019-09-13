import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import "./cart-icon.styles.scss";
import { toggleCartStatus } from "../../redux/cart/cart-action";

const CartIcon = ({ toggleCartStatus }) => (
  <div className="cart-icon" onClick={toggleCartStatus}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartStatus: () => dispatch(toggleCartStatus())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);