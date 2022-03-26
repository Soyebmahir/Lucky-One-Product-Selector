import React from 'react';
import './Cart.css'

const Cart = ({products}) => {
    console.log(products);
    return (
        <div className='cart'>
            <h1>Item selected: {products.length}</h1>
            {
                products.map((product)=><h1 key={product.id}>{product.name}</h1>)
            }
        </div>
    );
};

export default Cart;