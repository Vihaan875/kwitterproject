  var firebaseConfig = {
    apiKey: "AIzaSyApXeZA6mbbR6N1eE_Kv9nh66hWM6kjrsU",
    authDomain: "kwitter-fd6f2.firebaseapp.com",
    projectId: "kwitter-fd6f2",
    storageBucket: "kwitter-fd6f2.appspot.com",
    messagingSenderId: "894452663473",
    appId: "1:894452663473:web:85c58d2d4892e482b4ce90",
    measurementId: "G-RJ8E5Y8GVK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      });});}
getData();
function addRoom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room name",room_name);
  window.location="kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  
}