import firebase from "firebase"

const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "netflix-mern-37995.firebaseapp.com",
    projectId: "netflix-mern-37995",
    storageBucket: "netflix-mern-37995.appspot.com",
    messagingSenderId: "574575175742",
    appId: "1:574575175742:web:75a0b977fbf1ecb559c96f",
    measurementId: "G-83WXZSD58S"
};

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()

export default storage