
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAo4BQgu6xfFkfH-w3DM7Kct2SoBbaMl0Y",
      authDomain: "kwitter2-34ae7.firebaseapp.com",
      databaseURL: "https://kwitter2-34ae7-default-rtdb.firebaseio.com",
      projectId: "kwitter2-34ae7",
      storageBucket: "kwitter2-34ae7.appspot.com",
      messagingSenderId: "50412229194",
      appId: "1:50412229194:web:496fc20a4b08639ad80cb3"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name"); 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
