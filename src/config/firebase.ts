// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO_XVbsU-NHAXZmWXa1IYZRFSxhhm1vxY",
  authDomain: "react-course-87fd4.firebaseapp.com",
  projectId: "react-course-87fd4",
  storageBucket: "react-course-87fd4.appspot.com",
  messagingSenderId: "1070915234116",
  appId: "1:1070915234116:web:2c39b116eed5e6af178f11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); 
export const db = getFirestore(app);