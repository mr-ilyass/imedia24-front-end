import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../store/action";

export default function Product(props) {
    let product = props.product

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<FaStar key={i} />);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<FaStarHalfAlt key={i} />);
            } else {
                stars.push(<FaRegStar key={i} />);
            }
        }

        return stars;
    };


    const dispatch = useDispatch();
    return (
        <article>
            <div className="image-ctn">
                <Link to={`/product/${product.id}`}>
                    <img src={product.image}  alt="" />
                </Link>

            </div>
            <div className="text">
                <div className="item-title">
                    <Link to={`/product/${product.id}`}>
                        <h3 data-testid="product-item"  className="title">{product.title}</h3>
                    </Link>
                </div>
                <div className="priceBar">
                    <p> {renderStars(product.rating.rate)}</p>
                    <p className="price"> Price: {product.price} DH</p>
                </div>
                <button data-testid="add-to-cart-main-button" className="btn"
                        onClick={() =>{
                    dispatch(addToCart(product)) ;
                    ; props.handleShowNotification()
                }
                }

                >Add to cart</button>
            </div>
        </article>);
}