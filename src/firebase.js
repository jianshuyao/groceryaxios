import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyD6hoONEc5K1s4n6PMuI92pcwarnIP8Wfc",
    authDomain: "groceryaxios-88663.firebaseapp.com",
    databaseURL: "https://groceryaxios-88663.firebaseio.com",
    projectId: "groceryaxios-88663",
    storageBucket: "groceryaxios-88663.appspot.com",
    messagingSenderId: "700246308958",
    appId: "1:700246308958:web:eaf118435ae1b7985e1ccf",
    measurementId: "G-3ZMQEBNRQR"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;