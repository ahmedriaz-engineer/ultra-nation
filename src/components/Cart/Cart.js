import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //let totalPopulation =0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;
    // }
    const totalPopulation = cart.reduce((total, country)=> total + country.population,0)
    return (
        <div>
            <h4>Cart Items: {cart.length}</h4>
            Total Population: {totalPopulation}
        </div>
    );
};

export default Cart;