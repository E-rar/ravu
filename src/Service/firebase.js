// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM06DmweVLo8A0HJqXw30IuaPtHppXIHU",
  authDomain: "ravu-9b6fc.firebaseapp.com",
  projectId: "ravu-9b6fc",
  storageBucket: "ravu-9b6fc.appspot.com",
  messagingSenderId: "641650838283",
  appId: "1:641650838283:web:95bc02e7acf3b8770af00e",
  measurementId: "G-957NP8LL1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Init the Authentication service
const auth = getAuth(app)
// Init the Storage service
const storage = getStorage(app);
// Init the Firestore service
const db = getFirestore();
export { firebase, auth, storage, db }