import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDC794bFbM64Lwx-mbDC5yjZtVw-q7hI1k",
  authDomain: "crown-shop-db-ec99b.firebaseapp.com",
  databaseURL: "https://crown-shop-db-ec99b.firebaseio.com",
  projectId: "crown-shop-db-ec99b",
  storageBucket: "crown-shop-db-ec99b.appspot.com",
  messagingSenderId: "878489588003",
  appId: "1:878489588003:web:e2f8640152b43878c2bc96",
  measurementId: "G-FP0SDTQPRX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
