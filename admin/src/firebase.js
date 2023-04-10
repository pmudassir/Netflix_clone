import { initializeApp } from "firebase/app";

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