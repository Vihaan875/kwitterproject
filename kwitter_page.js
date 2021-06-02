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

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                u_name:user_name,
                message:msg,
                like:0
          });
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
u_name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+u_name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function updateLike(message_id)
{
      console.log("clicked on like button"+message_id);
      button_id=message_id;
      likes=document.getElementById(message_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  
}