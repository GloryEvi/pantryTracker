// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7efqmJEYB7lWAhqLrE6xQGKI5b4vKcIU",
  authDomain: "pantry-33886.firebaseapp.com",
  projectId: "pantry-33886",
  storageBucket: "pantry-33886.appspot.com",
  messagingSenderId: "242934804152",
  appId: "1:242934804152:web:098f47ed1dad2beaa48e4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { app, firestore };
