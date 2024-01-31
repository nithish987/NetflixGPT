import {checkValidData} from "../utils/validate";
import { useState,useRef } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import {auth} from "../utils/firebase";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);

   const email=useRef(null);
   const password=useRef(null);
   const name=useRef(null);
    const handleButtonClick =() => {
     //Validate the form data
      const message=checkValidData(email.current.value,password.current.value/*,name.current.value*/);        setErrorMessage(message);
      /*console.log(email.current.value);
      console.log(password.current.value);
      console.log(message);*/
      if(message) return;
      if(!isSignInForm){
        //Sign Up Logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://t3.ftcdn.net/jpg/05/66/26/98/360_F_566269813_8VisUzV5qqdN7nQ7De4FcVEVxnRuKh2E.jpg"
        }).then(() => {
          // Profile updated!
          // ...
          const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate("/browse");
        }).catch((error) => {
          // An error occurred
          // ...
        });
        
        // ...
        // console.log(user);
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage);
        // ..
  });
      }
      else {
       //Sign In Logic
       signInWithEmailAndPassword(auth, email.current.value, password.current.value)
       .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       navigate("/browse");
       // ...
       //console.log(user);
       })
       .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setErrorMessage(errorCode+"-"+errorMessage);
       });
      }
          

    };

    const toggleSignInForm =() =>{
        setIsSignInForm(!isSignInForm);
    };  
  return (
    <div>
        <Header/>
        <div className="absolute">
         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
         alt="logo"
         />
        </div>
        <form onSubmit={(e) => e.preventDefault()}
         className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">
                {isSignInForm ? "Sign In" :"Sign Up"}
            </h1>
            {!isSignInForm && (
              <input  
               ref={name}
               type="text" 
               placeholder="Full Name" 
               className="p-4 my-4 w-full bg-gray-800"
              />
            )  }
             <input 
              ref={email}
              type="text" 
              placeholder="Email Address" 
              className="p-4 my-4 w-full bg-gray-800"
             />
        
             <input 
             ref={password}
              type="password" 
              placeholder="password" 
              className="p-4 my-4 w-full bg-gray-800"
             />
             <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
             <button 
             className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick} >
              {isSignInForm ? "Sign In" :"Sign Up"}
             </button>
             <p 
              className="py-4 cursor-pointer" 
              onClick={toggleSignInForm}>
                {isSignInForm
                 ?"New to Netflix? Sign Up Now"
                : "Alreadt registered? Sign In Now"}
            </p>
        </form>
    </div>
    
  );
};

export default Login;