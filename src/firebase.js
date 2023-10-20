// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCccdqRwfWDPlyWNIQoyMDCVl9aPaD5i9U",
  authDomain: "dickota-9e93e.firebaseapp.com",
  projectId: "dickota-9e93e",
  storageBucket: "dickota-9e93e.appspot.com",
  messagingSenderId: "616831957421",
  appId: "1:616831957421:web:456d4cfcb680d4a246c924",
  measurementId: "G-Y54JEBES8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);