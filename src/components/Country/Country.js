import React from 'react';
import './Country.css';

const Country = (props) => {
    
    const { name, flag, population, capital,  } = props.country;
    return (
        <div className="country">
            <div>
                <img src={flag} alt="" />
            </div>
            <div className="info">
                <h4>Country Name: {name}</h4>
                <p>Capital: {capital}</p>
                <h5>Population: {population}</h5>
                <button onClick ={()=> props.handleCart(props.country)}>Add to Cart</button>
            </div>
        </div>


    );
};

export default Country;