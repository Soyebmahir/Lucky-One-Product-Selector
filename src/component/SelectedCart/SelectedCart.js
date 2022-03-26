import React from 'react';
import './SelectedCart.css'

const SelectedCart = ({product}) => {
    return (
        <div className='selectedCart'>
            <h3>{product.name}</h3>
        </div>
    );
};

export default SelectedCart;