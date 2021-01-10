import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBain85YZGcfMGwSi8Ylpe0HrZPObZXlHw",
    authDomain: "instagram-clone-victor.firebaseapp.com",
    projectId: "instagram-clone-victor",
    storageBucket: "instagram-clone-victor.appspot.com",
    messagingSenderId: "655901285872",
    appId: "1:655901285872:web:2a3e7988592f0bb845d135",
    measurementId: "G-Z4CEPZRV67"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };

//   export default db;