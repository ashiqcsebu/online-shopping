import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Myself = () => {
    const ring = useContext(RingContext)
    return (
        <div >
            <h5 className='border-2px-solid-red'>Myself</h5>
            <h1>This value is here using context : {ring}</h1>
        </div>
    );
};

export default Myself;