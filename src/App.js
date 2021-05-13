
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, [])

  const handleCart = (country) => {
    const newCart = [...cart, country]
    setCart(newCart)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Loaded Countries: {countries.length}</h1>
        <Cart cart ={cart}></Cart>
        <ul>
          {
            countries.map(country => <Country country = {country} handleCart = {handleCart} key={country.alpha3Code}></Country>)
          } 
        </ul>
        
      </header>

    </div>
  );
}

export default App;
