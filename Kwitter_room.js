// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeLoX3sTc5aiDrM-AgoWCIWvvmGtwX6GQ",
    authDomain: "kwitter-project-c33b7.firebaseapp.com",
    projectId: "kwitter-project-c33b7",
    storageBucket: "kwitter-project-c33b7.appspot.com",
    messagingSenderId: "471428655540",
    appId: "1:471428655540:web:465139229e1d9c5f64eae1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.database().ref("/").child(user_name).update({purpose : "adding username"})
