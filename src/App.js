import React from 'react';
import google from './Assests/google.png'
import faceBook from './Assests/facebook.png'
import gitHub from './Assests/github.png'
import linkedIn from './Assests/linkedin.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
function App(){
      const [status , setStatus] = React.useState(true)


  function handleClick(){
    // alert();
    // document.querySelector('.hero').classList.add('trigered')
    new Array([...document.querySelectorAll('input')]).map((item) => item.value="");
    document.querySelector('.rightContainer').classList.toggle('trigered')
    document.querySelector('.leftContainer').classList.toggle('trigered')
    setStatus((preStatus) => !preStatus);
  }
  // console.log(status)
  
  function handleSubmit(e){
    e.preventDefault();
    let items = new Array([...document.querySelectorAll('input')]);
    let invalidStatus = true;
    for(let i = 0; i < items.length; i++){
      // console.log("Entered into loop")
      if(items[i].value === ""){
        invalidStatus = false;
        break;
      }
    }
    toast(invalidStatus ? status ? "SignIn Sucess" : "Sign Up Sucess" : "Invalid Details");
    }
  return (
    <>
            <div className="hero">
                <div className="leftContainer">

                            <h2>{status ? "Sign In" : "Sign Up"}</h2>
                            <div className="socialIcons">
                                  <img src={google} alt="google" width={"30px"} height={"30px"}/>
                                  <img src={gitHub} alt="github" width={"30px"} height={"30px"}/>
                                  <img src={linkedIn} alt="linkedIn" width={"30px"} height={"30px"}/>
                                  <img src={faceBook} alt="faceBook" width={"30px"} height={"30px"}/>
                            </div>

                            <small>{status ? "or use your Email and Password" : "or use email for registration"}</small>

                            <form action="#" onSubmit={handleSubmit} id='form'>
                                  <input type="email" placeholder={status ? "Email" : "Name"}/>
                                  {!status && <input type="test" placeholder='Email' />}
                                  <input type="password" placeholder='Password' />
                              {status && <small>Forgot your password?</small>}
                                  <button>{status ? "SIGN IN" : "SIGN UP"}</button>
                                  </form>            
                </div>
                <div className="rightContainer">
                                  <h2>{status  ? "Hello Friend!" : "Welcome Back!"}</h2>
                                  <p>{status ? "Register with your personal details to use all of site features." : "Enter your personal details to use of site features"}</p>
                                  <button onClick={()=>handleClick()}>{status ? "SIGN UP" : "SIGN IN"}</button>
                </div>
            </div>

            <ToastContainer autoClose={2000} />
    </>
  )
}

export default App;