import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_ITEM } from './actionTypes';

const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = { ...action.payload, quantity: 1 };
            const existingItemIndex = state.cartItems.findIndex(item => item.id === newItem.id);

            if (existingItemIndex !== -1) {
                const updatedCartItems = [...state.cartItems];
                updatedCartItems[existingItemIndex] = {
                    ...updatedCartItems[existingItemIndex],
                    quantity: updatedCartItems[existingItemIndex].quantity + 1
                };
                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
            }
            return {
                ...state,
                cartItems: [...state.cartItems, newItem],
            };

        case DECREASE_QUANTITY:
            const decreasedCartItems = state.cartItems.map(item => item.id === action.payload ?
                { ...item, quantity: item.quantity - 1 } : item);

            return {
                ...state,
                cartItems: decreasedCartItems,
            };

        case INCREASE_QUANTITY:
            const increasedCartItems = state.cartItems.map(item => item.id === action.payload ?
                { ...item, quantity: item.quantity + 1 } : item);

            return { ...state, cartItems: increasedCartItems };

        case DELETE_ITEM:
            const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload);
            return {
                ...state,
                cartItems: updatedCartItems,
            };

        default:
            return state;
    }
};

export default cartReducer;
