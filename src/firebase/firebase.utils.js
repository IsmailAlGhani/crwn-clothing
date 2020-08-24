import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCKrGOcpjnNrR_cusPkoROnQpSPl-FyZ5Q",
  authDomain: "crwn-db-b7a5b.firebaseapp.com",
  databaseURL: "https://crwn-db-b7a5b.firebaseio.com",
  projectId: "crwn-db-b7a5b",
  storageBucket: "crwn-db-b7a5b.appspot.com",
  messagingSenderId: "16918892981",
  appId: "1:16918892981:web:6c111bfcdc8fdfef7d89fc",
  measurementId: "G-B4KPK8N9GP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;