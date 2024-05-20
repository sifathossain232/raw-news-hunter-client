// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   VITE_APIKEY: import.meta.env.VITE_APIKEY,
//   VITE_AUTHDOMAIN: import.meta.env.VITE_APIKEY,
//   VITE_PROJECTID: import.meta.env.VITE_APIKEY,
//   VITE_STORAGEBUCKET: import.meta.env.VITE_APIKEY,
//   VITE_MESSAGINGSENDERID: import.meta.env.VITE_APIKEY,
//   VITE_APPID: import.meta.env.VITE_APIKEY
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdsfLZnbn2AM08rngFSVjUTIZpJmMLS4c",
  authDomain: "raw-news-hunter.firebaseapp.com",
  projectId: "raw-news-hunter",
  storageBucket: "raw-news-hunter.appspot.com",
  messagingSenderId: "238215341096",
  appId: "1:238215341096:web:de9412573303765199c11d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;