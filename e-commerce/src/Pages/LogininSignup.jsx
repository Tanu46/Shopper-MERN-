import React, { useState } from "react";
import "./CSS/logginsignup.css";
const LogininSignup = () => {
  const [state, setState] = useState("login");
  const[formData,setFormData]=useState({
    username:"",
    password:"",
    email:""
  })
  const changeHandler=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async()=>{
console.log("login functioon executed",formData);
let responseData;
    await fetch('http://localhost:4000/login',{
        method:'POST',
        headers:{
            Accept:'application/form-data',
            'content-Type':'application/json',
        },
        body:JSON.stringify(formData)
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
    }
    else{
        alert(responseData.errors);
    }
  }

  const signup = async()=>{
    console.log("signup  functioon executed",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
        method:'POST',
        headers:{
            Accept:'application/form-data',
            'content-Type':'application/json',
        },
        body:JSON.stringify(formData)
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
    }
    else{
        alert(responseData.errors);
    }
  }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-feilds">
       {state==="sign up"?   <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="your name" />:<></>}
          <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="email address" />
          <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="password" />
        </div>
        <button onClick={()=>{state==="login"?login():signup()}}>continue</button>
        {state==="sign up"?  <p className="loginsignup-login">
          already have an account?<span onClick={()=>{setState("login")}}>login here</span>
        </p>: <p className="loginsignup-login">
         create an account?<span onClick={()=>{setState("sign up")}}>click here</span>
        </p>}
      
       

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing ,i agree to the sterms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LogininSignup;
