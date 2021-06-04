import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRVkF1o9B0v_rNRzdmuAJishrcBoqTnbc",
    authDomain: "fir-aee99.firebaseapp.com",
    projectId: "fir-aee99",
    storageBucket: "fir-aee99.appspot.com",
    messagingSenderId: "692541096335",
    appId: "1:692541096335:web:f5b3641955699bbf074bfa",
    measurementId: "G-PV73HC5T2M"
};
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
const db = app.firestore()
  export default db