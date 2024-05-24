// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: "reactchat-8953e.firebaseapp.com",
//   projectId: "reactchat-8953e",
//   storageBucket: "reactchat-8953e.appspot.com",
//   messagingSenderId: "989490756392",
//   appId: "1:989490756392:web:9e54e92c7b39c531b82e1d"
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth()
// export const db = getFirestore()
// export const storage = getStorage()

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMPj0XKidNBkxfhowjZj1dJKK5PZV03c8",
  authDomain: "sourabh-react2.firebaseapp.com",
  projectId: "sourabh-react2",
  storageBucket: "sourabh-react2.appspot.com",
  messagingSenderId: "103078264938",
  appId: "1:103078264938:web:ff21b784071d6d4a790a13",
  measurementId: "G-54Z5PND752"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()