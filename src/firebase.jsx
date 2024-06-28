
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB425Hv8YS-SIwOwRceenoxuAw-RZuYNg0",
  authDomain: "blog-site-29156.firebaseapp.com",
  projectId: "blog-site-29156",
  storageBucket: "blog-site-29156.appspot.com",
  messagingSenderId: "1075550056729",
  appId: "1:1075550056729:web:fa1473b79aa35d24ef9588",
  measurementId: "G-JC9RF6689B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
