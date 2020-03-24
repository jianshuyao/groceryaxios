import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    aapiKey: "AIzaSyAK7iTBsJEJAkeMkiRkPRoTlGor3HuJm5U",
    authDomain: "week8-5a6b1.firebaseapp.com",
    databaseURL: "https://week8-5a6b1.firebaseio.com",
    projectId: "week8-5a6b1",
    storageBucket: "week8-5a6b1.appspot.com",
    messagingSenderId: "489186800",
    appId: "1:489186800:web:33ab211feb9a3330a5a935",
    measurementId: "G-Q0THYTQJ3F"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;