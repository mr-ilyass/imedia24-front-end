import React from "react";
import "./Cart.scss";
import {decreaseQuantity, deleteItem, increaseQuantity} from "../store/action";
import {useDispatch} from "react-redux";

export default function CartItem(props) {

    const dispatch = useDispatch();

  return (
    <div className="item">
      <div className="image">
        <img src={props.image}  height="100" width="180" alt="" />
      </div>

      <div className="description">
        <span>{props.title}</span>
        <span>{props.description}</span>
      </div>

      <div className="price">
        <span>{props.price}</span>
      </div>

      <div className="quantity">
          <button  data-testid="increase-item" className="btn-n" type="button" name="button"  onClick={() => dispatch(decreaseQuantity(props.id))}>
              <img src="svg/minus.svg" alt=""  />
          </button>
        <input type="text" name="name" value={props.quantity} readOnly={true}/>
          <button data-testid="decrease-item" className="btn-n" type="button" name="button" onClick={() => dispatch(increaseQuantity(props.id))}>
              <img src="svg/plus.svg" alt="" />
          </button>
      </div>
      <div className="total-price" data-testid="total-items">{props.quantity * props.price} DH</div>
      <button data-testid="delete-item" className="delete-btn" type="button" name="button"  onClick={() => dispatch(deleteItem(props.id))}>
          <img src="svg/trash.svg" alt=""  />
        </button>
    </div>
  );
}