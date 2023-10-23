import React from "react";
import {useQuery} from "react-query";
import {useParams} from "react-router-dom";
import './productDescription.scss';
import {FaRegStar, FaStar, FaStarHalfAlt} from "react-icons/fa";
import {addToCart} from "../../store/action";
import {useDispatch} from "react-redux";


export default function ProductDescription(props) {

    const { id } = useParams();
    const dispatch = useDispatch();

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

    const fetchProductDetails = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        return data;
    };

    const { isLoading, isError, data, error } = useQuery(['productDetails', id], fetchProductDetails, {
        enabled: Boolean(id),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    const product = data;

    return (
        <section className="product">
            <div className="wrapper">
                <div className="product-img">
                    <img src={product.image} height="420" width="327" alt={product.title}/>
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <h1>{product.title}</h1>
                        <h2>{product.category}</h2>
                        <p>{product.description}</p>
                        <p> {renderStars(product.rating.rate)}</p>
                    </div>
                    <div className="product-price-btn">
                        <span>{product.price} DH</span>
                        <button data-testid="add-to-cart-desc-button" onClick={() => {
                            dispatch(addToCart(product)) ;
                            props.handleShowNotification();
                        }
                        }
                            type="button" >Add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    );

}