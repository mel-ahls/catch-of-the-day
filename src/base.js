import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp = {
  apiKey: "AIzaSyBxmC5WFOKK5vIvEjXWpU6rmI_LUo8BwGM",
  authDomain: "catch-of-the-day-mel.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-mel.firebaseio.com",
  // projectId: "catch-of-the-day-mel",
  // storageBucket: "catch-of-the-day-mel.appspot.com",
  // messagingSenderId: "96916732936",
  // appId: "1:96916732936:web:0ed39a84dff06951fc25bd",
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;