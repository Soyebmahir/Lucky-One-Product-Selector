import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [cart,setcart] = useState([])
    const [products,  setProducts]=useState([])
    

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])

    

    const handleAddToCart =(product)=>{
        let newCart=[];
            newCart =[...cart,product]
        setcart(newCart);
    }
    const selectAgain=() =>{
        const empty =[];
        setcart(empty);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">

                {
                    products.map((product)=><Product
                    product={product}
                    key={product.id}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="shopping-cart">
                <Cart products={cart}
                key={cart.id}
                selectAgain={selectAgain}
                ></Cart>
               
            </div>
            
        </div>
    );
};

export default Shop;