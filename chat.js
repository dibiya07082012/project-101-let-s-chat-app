var firebaseConfig = {
    apiKey: "AIzaSyAtu8htn2twZ4yB3zybVV1nfklYv6OXQX4",
    authDomain: "chat-app-a2125.firebaseapp.com",
    databaseURL: "https://chat-app-a2125-default-rtdb.firebaseio.com",
    projectId: "chat-app-a2125",
    storageBucket: "chat-app-a2125.appspot.com",
    messagingSenderId: "742600310944",
    appId: "1:742600310944:web:e6a41701bcd620089849c5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name" , user_name);

    window.location = "chat_room.html";
    
}

