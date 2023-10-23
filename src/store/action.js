// actions.js
import { DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_ITEM, ADD_TO_CART } from './actionTypes';


export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const decreaseQuantity = (itemIndex) => ({
    type: DECREASE_QUANTITY,
    payload: itemIndex,
});

export const increaseQuantity = (itemIndex) => ({
    type: INCREASE_QUANTITY,
    payload: itemIndex,
});

export const deleteItem = (itemIndex) => ({
    type: DELETE_ITEM,
    payload: itemIndex,
});