console.log("firebase is the most beautiful creation");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "collegeprojectnewswebsite.firebaseapp.com",
  projectId: "collegeprojectnewswebsite",
  storageBucket: "collegeprojectnewswebsite.appspot.com",
  messagingSenderId: "876167017067",
  appId: "1:876167017067:web:ed188ea339fc7970d2f72e"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);