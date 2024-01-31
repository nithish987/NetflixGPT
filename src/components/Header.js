 import { signOut } from 'firebase/auth';
import React from 'react'
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';
 
 const Header = () => {
   const navigate=useNavigate();
   
   const user=useSelector(store=>store.user);
   const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
   };

   return (
     <div className="flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      
      <img
      className="w-44"
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
      alt="logo"
      />
      {user&&(<div className="flex p-2">
        <img 
        className="w-12 h-12 "
        src={user.photoURL}
        //src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAeFBMVEWqAAH9+/v///+nAACkAAChAADx39/89fX47e39+PitIiLu19e2PDz58vLetrayPDy8ZWWwNDTqysrZpKStKSn25+e+Xl7PjY3brKy1MTG2Q0PNhoavHx/kwsKpCQm8WFjKfHy2T0/CbW7TlZWqFBTXnZ3Hamq7S0tKElrBAAAEC0lEQVR4nO3b63KyOhQGYEkCgkjkIAcF5CDo/d/hDqhjEaptk439Ou/zo9Pp2Ky1iJCAy8UCAAAAAAAAAAAAAAAAAAAAAAAAAD5De38htBhqU7iuW3mLuesRkavadaN9pqgeuqqPvkk0YuRpMWs59OCmviEim35Q7lVEZhU3CSGaJn4QO17NVw3dxmEfuQu99GsmPSKL7H68C2K12VzVUC9YfohMwlK2GhYZ9wG7MZ12pSTVL4itYWgzljuOtPEHA3ZzU84zNbQwHkOHG6nQ7Gg9jKgRvlWV71M0foyskUTmjUY39nhEM5plarx8HNrYSYSmpTke0Tqpy/hJ6GL0nhAnbCwxNSwYDSiGjNWl/EQ0EdpqZWZmsphjoy7lz9XzFNPOUkypuhjWauMhSXxQl/Kn6MTMEOuo+gJASmUZPzNxzhCzlilmPXFpdiJ1GT8JXU0cR1tq98GS8eHxlexfX1pNnK+B1O6Mrkd7CtKqSvdF6Ch8DO2s5Q4jK5zhbo8kzUzbZpqSYWhNetusD3ZnhPDZbmholmiD0K0uPaZ+vN4hdbdIZuLNeHPWDELLnTBXbM1tp7/ZM/x61qcalEbcuIbOXRW1dGOe04DzJK4Oagb8TujqEjo6KDuK/cOe9zxr6iMv3vSYCwAAAAAAAAAAAAD+GMrYH3nkTBndp2k9W7Pb/4jSXZrbjmNyuSatHwbPVlTdZzlslxhL0pNp0fhh8Iw7jn9SUw5ji1urpqaRXKZJ60d2YX8UjbiRLoeyc2LeP3Um9nnmYti17U3kEGdSfTaH1ckmHz9An6uj4o7eGyHE7FTbH11QKW02RWyQUReC8nRf5PGhq4MQk9eb5pv1iErW7tG2hqVoxOKSPRrfxwbdlV1/dVB7C/bFNMSKkp3LIHfIYynEOM7YhXBL56GJV2QV5sGxyNiLgqhY5Jsqbbm/fKyka9JuT+/YAdBBl/q1HsvIk7Q46N2mZJST+BPT6S6KuVgbyaiS7t2avKWULreKj/uhBSe0/aB0q514M+k3orjMK+qY+3Y4VcjlxHNn/BLCYzWrgk9mJWZI7EpCo2fb9uWX0DSdpTZZSPdPfrnfvnVTRpu9P5nbpaSxyZd2r83PczWFPStH33Ht0yy/ovuOS7DQ319Kh+qsvDRE/aQOsgyTTJ+79egZpp/55bz+XiXiUpGf6C+ZlDuR0VrcjJhfrKebEtPOyz37VZNyJ9bCdZnkhvXkTL9dFiw7D8rdq+X1vcSiuIriNrlM0dTFTCxBedIe0yqjv7qSK5Fks6nqNA4457nfycVvPInjtCzdYr/OFv9EITd9T2G23XrepuN52+2uW9vf+K1WJf7p5AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4Bf7D81yMd1mWCYbAAAAAElFTkSuQmCC"
        />
        <button onClick={handleSignOut} className='font-bold text-white'>(SignOut)</button>
      </div>)}
     </div>
   );
 };
 
 export default Header;