// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChTKN4M9T11tN0f8_Ppvuc_aECCpimqE8",
  authDomain: "netflixgpt-42bae.firebaseapp.com",
  projectId: "netflixgpt-42bae",
  storageBucket: "netflixgpt-42bae.appspot.com",
  messagingSenderId: "469701532061",
  appId: "1:469701532061:web:07dc3b146010d7a9e0f774",
  measurementId: "G-M8Y8BBZRXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();