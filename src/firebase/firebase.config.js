// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeAACATtpS-_ZPqt1hiCxJzcDAtKHsH2s",
  authDomain: "the-news-dragon-ab310.firebaseapp.com",
  projectId: "the-news-dragon-ab310",
  storageBucket: "the-news-dragon-ab310.appspot.com",
  messagingSenderId: "133069329952",
  appId: "1:133069329952:web:9691f76709aafb992cce45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app