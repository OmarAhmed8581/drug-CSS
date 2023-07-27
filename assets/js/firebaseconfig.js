const firebaseConfig = {
    apiKey: "AIzaSyDajCtkkUAGsxwGPmwU2y-45HP6vQFbQrM",
    authDomain: "blockchain-fe004.firebaseapp.com",
    projectId: "blockchain-fe004",
    storageBucket: "blockchain-fe004.appspot.com",
    messagingSenderId: "731119083844",
    appId: "1:731119083844:web:63a6352762d6648d8b7711",
    measurementId: "G-D0C9GBLGDZ",
    databaseURL: "https://blockchain-fe004-default-rtdb.firebaseio.com/",
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
