var firebaseConfig = {
    apiKey: "AIzaSyCcJitb2Wcopb5ZD-j8HLoVCqTcyqPixQ0",
    authDomain: "mathsquiz-2d8dd.firebaseapp.com",
    databaseURL: "https://mathsquiz-2d8dd-default-rtdb.firebaseio.com",
    projectId: "mathsquiz-2d8dd",
    storageBucket: "mathsquiz-2d8dd.appspot.com",
    messagingSenderId: "1024884733293",
    appId: "1:1024884733293:web:8b6be7cef2115d4c745664"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById("Output").innerHTML = row ;
document.getElementById("number1").value = "" ;
document.getElementById("number2").value = "" ;