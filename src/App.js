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

  return (
    <div className="App">
      <form onSubmit={submitFormHandler}>
        <label>Your Email: </label>
        <input typ="text" id="email" onChange={userEmailChangeHandler}></input>
        <button>Submit</button>
      </form>
      {inputInvalid && <p>Invalid email address entered.</p>}
    </div>
  );
}

export default App;
