// Import the functions you need from the SDKs you need'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASt7xvHTJpzg-rJz-22yVIAQL5yhK3Ah4",
    authDomain: "netflix-mern-37995.firebaseapp.com",
    projectId: "netflix-mern-37995",
    storageBucket: "netflix-mern-37995.appspot.com",
    messagingSenderId: "574575175742",
    appId: "1:574575175742:web:75a0b977fbf1ecb559c96f",
    measurementId: "G-83WXZSD58S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;


// import firebase from "firebase"

// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_KEY,
//     authDomain: "netflix-mern-37995.firebaseapp.com",
//     projectId: "netflix-mern-37995",
//     storageBucket: "netflix-mern-37995.appspot.com",
//     messagingSenderId: "574575175742",
//     appId: "1:574575175742:web:75a0b977fbf1ecb559c96f",
//     measurementId: "G-83WXZSD58S"
// };

// firebase.initializeApp(firebaseConfig)
// const storage = firebase.storage()

// export default storage;