// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3Cs6l6qvrBdqZJ7c0Y1R8AV_ySPdmIXw",
  authDomain: "inventory-management-23d74.firebaseapp.com",
  projectId: "inventory-management-23d74",
  storageBucket: "inventory-management-23d74.appspot.com",
  messagingSenderId: "826050095245",
  appId: "1:826050095245:web:f0799d36331775a82b9ac4",
  measurementId: "G-MTTX9SMMY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { firestore };