import React from 'react';
import './cart.css';

const Cart = (props) => {
    let productCost=0;
    for (let index = 0; index <props.cart.length; index++) {
        const element =props.cart[index];
        productCost=productCost+element.price;
        
    }

    const formatNumber=(num)=>parseFloat(num.toFixed(2));
    const productCostTotal=formatNumber(productCost)

    let shippingCost=0;
    if(productCostTotal<=0){
        shippingCost=0;
    }
    else if(productCostTotal<50){
        shippingCost=12;
    }
    else{ 
        shippingCost=5;
    }

    const shippingCostTotal=formatNumber(shippingCost);
    const tax=productCostTotal/100*5;
    const taxTotal=formatNumber(tax);
    const totalCost=productCostTotal+shippingCostTotal+taxTotal;
    const totalCostAll=formatNumber(totalCost);

        return (
        <div className="cart-container">
            <h2>Order Summary</h2>
            <h3>Items Ordered: {props.cart.length}</h3>
            <h3>Product Cost:$ {productCostTotal}</h3>
            <h3>Shipping Cost: $ {shippingCostTotal}</h3>
            <h3>Tax+VAT:$ {taxTotal}</h3><hr/>
            <h3>Total Cost: $ {totalCostAll}</h3>

        </div>
    );
};

export default Cart;