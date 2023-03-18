import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt,handleAddCart}) => {
     const {name , picture, price} = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <h4>price: {price}</h4>
            <button onClick={()=>handleAddCart(tshirt)}>Add Cart</button>
            
        </div>
    );
};

export default Tshirt;