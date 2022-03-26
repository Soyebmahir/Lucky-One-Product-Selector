import React from 'react';
import './Product.css'

const Product = ({product}) => {
    // console.log(product);
    const {name,id,picture,price}=product;
    console.log(name,id,picture,price);
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price:${price}</p>

            </div>
            
        </div>
    );
};

export default Product;