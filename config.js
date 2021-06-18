 import firebase from "firebase";
 require('@firebase/firestore')
 
 var firebaseConfig = {
  apiKey: "AIzaSyBX26IHSOAZHFC0tbCsz-csx0uvtjf6Lk4",
  authDomain: "story-hub-7b43a.firebaseapp.com",
  projectId: "story-hub-7b43a",
  storageBucket: "story-hub-7b43a.appspot.com",
  messagingSenderId: "1013814934219",
  appId: "1:1013814934219:web:c017f767bb2f444613f94e",
  measurementId: "G-S7FSMVYDQZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
  export default firebase.firestore();