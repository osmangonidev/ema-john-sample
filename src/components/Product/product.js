import React from 'react';
import "./product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props);
    return (
        <div className="product-container">
            <div className="product-img">
                <img src={props.product.img} alt=""/>
            </div>
            <div className="product-description">
                <h2>{props.product.name}</h2><br/>
                <h5>by: {props.product.seller}</h5>
                <h4>${props.product.price}</h4>
                <h5>only {props.product.stock} left in stock</h5>
                <button onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />
                 add to cart</button>
            </div>
        </div>
    );
};

export default Product;