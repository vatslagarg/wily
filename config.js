import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAx8yEH5Lg4QD70E_3XNIL_jcA8-4qTEsc",
    authDomain: "wily-6659f.firebaseapp.com",
    projectId: "wily-6659f",
    storageBucket: "wily-6659f.appspot.com",
    messagingSenderId: "526261062217",
    appId: "1:526261062217:web:37a8dc37ceb469cae18d98"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();