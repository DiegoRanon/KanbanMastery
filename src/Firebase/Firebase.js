// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDU4iwHkbrlOoSgV8Ii-KBZJdV1SYQCmI",
  authDomain: "kanbanmastery.firebaseapp.com",
  projectId: "kanbanmastery",
  storageBucket: "kanbanmastery.appspot.com",
  messagingSenderId: "764082120548",
  appId: "1:764082120548:web:11d277fc8cc4ce8acafc71",
  measurementId: "G-75VS2XJ55H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// const analytics = getAnalytics(app);