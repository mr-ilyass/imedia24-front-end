import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

export default function Navabr(props){

    const cartItems = useSelector(state => state.cart.cartItems);

  return(
        <div className="navbar">
          <div className="logo">E-commerce</div>
           <ul className="nav-links">
              <Link to="/">Produits</Link>
           </ul>
           <button data-testid="show-cart" className="button" onClick= {()=>props.onOpenCartClicked()}>Cart <span data-testid="cart-badge" className="badge">{ cartItems.length }</span></button>
        </div>
  );

}