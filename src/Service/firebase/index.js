// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDf2hgXOyKxrgyGB96lJ6GKid2kt8YELhQ",
  authDomain: "proyecto-react5.firebaseapp.com",
  projectId: "proyecto-react5",
  storageBucket: "proyecto-react5.appspot.com",
  messagingSenderId: "342842846010",
  appId: "1:342842846010:web:dea41e784afef904e23e03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore ()