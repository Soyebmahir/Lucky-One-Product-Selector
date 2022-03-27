// import React, { useState } from 'react';
import SelectedCart from '../SelectedCart/SelectedCart';
import './Cart.css'

const Cart = ({products ,selectAgain,random,choseForme}) => {

 

    
    
   
    return (
        <div className='cart'>
            <h1>Shopping Cart</h1>
            {
                products.map((product)=><SelectedCart
                 product={product}
                 key={product.id}
                 ></SelectedCart>)
            }
            <div>
                <h3>Lucky One</h3>
            <div className='luckybox'>
                <div className='luckyCart'>
                    <img src={random.picture} alt="" />
                    <h3>{random.name}</h3>
                </div>
                {/* <p>Price :{random.price}</p> */}
            </div>
            </div>
            
            <button onClick={choseForme} className="btn-chose"><b>Choose For me</b></button>
            <button onClick={selectAgain}  className="btn-select"><b>Choose Again</b></button>
        </div>
    );
};

export default Cart;