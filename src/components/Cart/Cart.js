import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveItem}) => {
    return (
        <div>
            <h1 className={`bold ${cart.length === 2 ? 'green' : 'yellow'}`}>Orders Summary</h1>
            <h1>{cart.length}</h1>

            {
                cart.map(tshirt=> <p
                key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={()=>handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;