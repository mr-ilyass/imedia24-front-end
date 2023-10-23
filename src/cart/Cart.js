import React from "react";
import "./Cart.scss";
import CartItem from "./CartItem";
import {useSelector} from "react-redux";


export default function Cart(props) {

  const cartItems = useSelector(state => state.cart.cartItems);


  document.body.style.overflow = props.isOpened ? "hidden" : "auto";
  let totalPrice = cartItems.reduce(function(total, item) {
    return total + item.price * item.quantity;
  },0);
  return (
      <div className="pop-up" style={props.isOpened ? { display: "block" } : { display: "none" }}>
        <div className="shopping-cart">
          <div className="title">
            Shopping Bag
            <button className="bar-btn" onClick={props.onCloseClick}>
              <img src="/svg/close.svg" alt="close" />
            </button>
          </div>
          <div className="items">
            {cartItems.map((item) => {
              return (<CartItem key={item.id} title={item.title} description={item.description} image={item.image} price={item.price} quantity={item.quantity} id={item.id}/>);
            })}
          </div>
          <div className="total">Total: {totalPrice}DH</div>
        </div>
      </div>
  );
}