import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgujkrQr1oLiB2OwCffxgYewvTWDOUYGM",
  authDomain: "prepwise-a187e.firebaseapp.com",
  projectId: "prepwise-a187e",
  storageBucket: "prepwise-a187e.firebasestorage.app",
  messagingSenderId: "881762963923",
  appId: "1:881762963923:web:945daba021c5aea0a2df26",
  measurementId: "G-CDR6NG4XWV"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
