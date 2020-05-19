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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
