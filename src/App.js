import './App.css';
import { useState } from 'react';

function App() {

  const [userEmail, setUserEmail] = useState();
  const [inputInvalid, setInputInvalid] = useState(false);

  function userEmailChangeHandler(event) {
    setUserEmail(event.target.value);
  }

  function submitFormHandler(event){
    event.preventDefault();
    const emailCheckValid = userEmail.includes('@');
    setInputInvalid(!emailCheckValid);
  }



  const INITIAL_PRODUCTS = [
    {id: 'p1', title: 'Astro All Night Album', price: 40.00},
    {id: 'p2', title: 'Enhypen Border Day 1 Album', price: 35.00},
    {id: 'p3', title: 'New Jeans Message Card Pack', price: 19.00},
    {id: 'p4', title: 'Seventeen Lightstick', price: 60.00}
  ]

  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  function addProductHandler(){
    setProducts(currentProducts => [...currentProducts, {
      id: new Date().toString(),
      title: 'NCT Glitch Mode Album',
      price: 16.00
    }])
  }

  return (
    <div className="App">
      <div id="part1">
      <form onSubmit={submitFormHandler}>
        <label>Your Email: </label>
        <input typ="text" id="email" onChange={userEmailChangeHandler}></input>
        <button>Submit</button>
      </form>
      {inputInvalid && <p>Invalid email address entered.</p>}
      </div>
      
      <div id="part2">
        <button onClick={addProductHandler}>Add Product</button>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.title} (${product.price})
            </li>   
          ))}
        </ul>
      </div>
    </div>

  );
}

export default App;
