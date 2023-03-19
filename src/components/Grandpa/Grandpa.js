import React, { createContext } from 'react';
import Father from '../Father/Father';


export const RingContext = createContext('matir ring')
const Grandpa = () => {


    return (
        <RingContext.Provider value='dadir ring'>   
             <div>
            <h1> Grandpa</h1>
            <section>
               <Father></Father>
            </section>
        </div>


        </RingContext.Provider>
       
    );
};

export default Grandpa;