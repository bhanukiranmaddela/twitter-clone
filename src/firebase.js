import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBjJjF8GnOuPmvTQX8VfyU-lpxk7mCupjU",
    authDomain: "twitter-clone-978fb.firebaseapp.com",
    projectId: "twitter-clone-978fb",
    storageBucket: "twitter-clone-978fb.appspot.com",
    messagingSenderId: "1077105577007",
    appId: "1:1077105577007:web:a9af7c182b902b6b198ada",
    measurementId: "G-PTCL7QD71Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;
  