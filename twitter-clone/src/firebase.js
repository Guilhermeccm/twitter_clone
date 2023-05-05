
import firebase from "./firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAggv5azxEe3A3o--UQCaiZ5oKgzktPePc",
    authDomain: "twitter-clone-79188.firebaseapp.com",
    projectId: "twitter-clone-79188",
    storageBucket: "twitter-clone-79188.appspot.com",
    messagingSenderId: "772572557363",
    appId: "1:772572557363:web:d7e91b0d1b5207be0e3346",
    measurementId: "G-RQYREGSGY5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;