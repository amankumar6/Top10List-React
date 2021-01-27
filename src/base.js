import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDqdQZiNcJ-Gv3iYinQWNQ7iBteihq0bxI",
  authDomain: "top10list-aman.firebaseapp.com",
  databaseURL: "https://top10list-aman-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;