
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
     console. log("Room Name - " + Room_name);
     row="<div class='room_name' id="+Room_name+" onclick='redirectToRoomNmae(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function addPoom()
{
   room_name = document.getElementById("room_name").ariaValueMax;

   firebase.database().ref("/").child(room_name).update({
         purpose:"adding room name"
   });

   localStorage.setItem("room_name", room_name);

   window.loaction = "Kwitter_page.html";

}
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
     window.location= "Kwitter_page.html"
}