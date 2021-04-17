import firebase from "firebase/app";
import 'firebase/auth';
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBswW9lNf6NPfEaQZicKPRxOFs-nLa2AP8",
    authDomain: "coursescheduler-ccd79.firebaseapp.com",
    databaseURL: "https://coursescheduler-ccd79-default-rtdb.firebaseio.com",
    projectId: "coursescheduler-ccd79",
    storageBucket: "coursescheduler-ccd79.appspot.com",
    messagingSenderId: "315173692513",
    appId: "1:315173692513:web:8afbeceded6ba66a02b620",
    measurementId: "G-DXM0MEN6XE"
};

firebase.initializeApp(firebaseConfig);

export { firebase };