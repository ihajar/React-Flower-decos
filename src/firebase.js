import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCfT_5L_5oWMx_7kCZmSUs67HrATuIWjm4",
    authDomain: "tinder-plant-clone.firebaseapp.com",
    databaseURL: "https://tinder-plant-clone.firebaseio.com",
    projectId: "tinder-plant-clone",
    storageBucket: "tinder-plant-clone.appspot.com",
    messagingSenderId: "593607172128",
    appId: "1:593607172128:web:91bc0acd7547595b331c45",
    measurementId: "G-9826XW6LZT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;