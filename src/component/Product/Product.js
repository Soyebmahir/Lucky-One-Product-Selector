import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({product,handleAddToCart}) => {
    // console.log(product,handleAddToCart);
    const {name,id,picture,price}=product;
    // console.log(name,id,picture,price);
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price:${price}</p>

            </div>
            <div >
              <button onClick={()=>handleAddToCart(product)} key={id} className='btn-cart'>
                  Add to cart
                  <FontAwesomeIcon icon={faShoppingCart} className="icon"></FontAwesomeIcon>
              </button>
          </div>
            
        </div>
    );
};

export default Product;