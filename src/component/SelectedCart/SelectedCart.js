import React from 'react';
import './SelectedCart.css'

const SelectedCart = ({product}) => {
    return (
        <div className='cartbox'>
        <div className='selectedCart'>
            <img src={product.picture} alt="" />
            <h3>{product.name}</h3>
        </div>
        <p>Price :{product.price}</p>
        </div>
    
    );
};

export default SelectedCart;