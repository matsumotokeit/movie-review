// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9ysp5qKDz1yVSoUPGEN7itRS9fy6lXPU",
  authDomain: "movie-review-e2fca.firebaseapp.com",
  projectId: "movie-review-e2fca",
  storageBucket: "movie-review-e2fca.firebasestorage.app",
  messagingSenderId: "861202445778",
  appId: "1:861202445778:web:4954538fcc45c8c171c40b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);