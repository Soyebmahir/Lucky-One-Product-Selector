import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [cart,setcart] = useState([])
    const [products,  setProducts]=useState([])
    const [random,setRandom]=useState([])


    const choseForme=()=>{
        const randomitem = products[Math.floor(Math.random() * products.length)];
        setRandom(randomitem);    
    }
    

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
    const randomClear=()=>{
        const clear =[];
        setRandom(clear)
    }
    const selectAgain=() =>{
        const empty =[];
        setcart(empty);
       randomClear();
        
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
                random={random}
                choseForme={choseForme}
                ></Cart>
               
            </div>
            
        </div>
    );
};

export default Shop;