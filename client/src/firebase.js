// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "elvora-c0ca8.firebaseapp.com",
  projectId: "elvora-c0ca8",
  storageBucket: "elvora-c0ca8.firebasestorage.app",
  messagingSenderId: "579496216086",
  appId: "1:579496216086:web:7551c485be1305b47fd737"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// for authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider}