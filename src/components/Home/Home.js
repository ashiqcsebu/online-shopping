import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    const [cart , setCart] = useState([])

    const handleAddCart = tshirt => {

        const exists = cart.find(ts=> ts._id === tshirt._id)
        if(exists){
            alert('Already added')
        }
        else{
            const newCart = [...cart ,tshirt];
            setCart(newCart);

        }
        
    }
    return (
         <div className='home-container'>
            <div className='t-shirt-container'>
                {
                    tshirts.map( tshirt =><Tshirt
                    key={tshirt._id}
                    tshirt ={tshirt}
                    handleAddCart={handleAddCart}
                    >
                    </Tshirt>)
                }
           </div>

            <div className='cart-container'>
               <Cart cart={cart}>

               </Cart>

            </div>
        
        </div>
    );
};

export default Home;