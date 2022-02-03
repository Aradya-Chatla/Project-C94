//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyA7ah_nTHe7o3Epp92MsfIYP5qEIk28pC4",
      authDomain: "kwitter-project-b9cd7.firebaseapp.com",
      projectId: "kwitter-project-b9cd7",
      storageBucket: "kwitter-project-b9cd7.appspot.com",
      messagingSenderId: "64450735037",
      appId: "1:64450735037:web:f15754f30f58e5becc40d4"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach
      (function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code

      //End code
      
      });});}
getData();
