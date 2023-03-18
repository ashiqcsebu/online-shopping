import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h1>Orders Summary</h1>
            <h1>{cart.length}</h1>
        </div>
    );
};

export default Cart;