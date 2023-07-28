import React, {useState } from 'react';
import './App.css';



function App() {

  const [formData, setFormData] = useState({
    name: '',
    email:'',
    password: '',
    balance:''

  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  function validationForm() {
    return formData.name.length > 0 && formData.password.length > 0 && formData.email.length > 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/demo',{
      method:'POST',
      body:JSON.stringify(formData),
      headers:{
        'Content-Type':'application/json'
      }
    });

    const data = await response.json();
    console.log(data)
  }


  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" />
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" />
            <input type="balance" name="balance" value={formData.balance} onChange={handleInputChange} placeholder="Balance" />
            <a href="/">Forgot your password?</a>
            <button>Sign Up</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              {/* <button className="ghost" id="signUp">Sign Up</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
