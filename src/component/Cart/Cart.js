import React, { useState } from 'react';
import SelectedCart from '../SelectedCart/SelectedCart';
import './Cart.css'

const Cart = ({products}) => {
 
const [random,setRandom]=useState([])

    const choseForme=()=>{
        const randomitem = products[Math.floor(Math.random() * products.length)];
        setRandom(randomitem);    
    }
    console.log(random);
    return (
        <div className='cart'>
            <h1>Shoppign Cart</h1>
            {
                products.map((product)=><SelectedCart
                 product={product}
                 key={product.id}
                 ></SelectedCart>)
            }
            <div>
            
            <p>{random.name}</p>
            </div>
            
            <button onClick={choseForme}>Choose For me</button>
        </div>
    );
};

export default Cart;