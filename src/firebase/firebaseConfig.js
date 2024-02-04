import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA4EsC2HmyOEz9xL9pfzmapNRuCpdE-cVY",
    authDomain: "chat-quiz-website-88e7a.firebaseapp.com",
    projectId: "chat-quiz-website-88e7a",
    storageBucket: "chat-quiz-website-88e7a.appspot.com",
    messagingSenderId: "147918320515",
    appId: "1:147918320515:web:c6692373135b23a747fcb6"
  };

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
const firestore = firebase.firestore();
export const Firebase = firebase;

export default firestore;

