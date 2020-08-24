import React, { useState } from 'react';
import fakeData from "../../fakeData"
import "./shop.css"
import Product from '../Product/product';
import Cart from '../Cart/cart';
const Shop = () => {
    const first10=fakeData.slice(0,10);
    const [products,setProducts]=useState(first10);
    const [cart,setCart]=useState([]);
    function handleAddProduct(product){
        console.log( "product added",product);
        const updateCart=[...cart,product];
        setCart(updateCart);
    }

    return (
        <div className="shop-container">
            <div className="products-container">
               
                {products.map(product=><Product handleAddProduct={handleAddProduct} product={product}></Product>)}
               
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;