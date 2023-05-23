const firebaseConfig = {
    apiKey: "AIzaSyDKZ0rm9lWsLtUtcxSd6Jyb4j5uCpDhRBc",
    authDomain: "chat-player-09.firebaseapp.com",
    databaseURL: "https://chat-player-09-default-rtdb.firebaseio.com",
    projectId: "chat-player-09",
    storageBucket: "chat-player-09.appspot.com",
    messagingSenderId: "265479108872",
    appId: "1:265479108872:web:26f9fd888b8adbc7fe14bd"
  };
  
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}

  
  
