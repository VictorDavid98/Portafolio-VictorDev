import firebase from 'firebase/app';
import"firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClyvgV2UpAswd5HPFFL7EphA0h2hcStV4",
  authDomain: "lock-landing.firebaseapp.com",
  projectId: "lock-landing",
  storageBucket: "lock-landing.appspot.com",
  messagingSenderId: "578053925621",
  appId: "1:578053925621:web:4071071e7eb0c65053f3bc"
};

export const db = firebase.initializeApp(firebaseConfig).firestore();









// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyClyvgV2UpAswd5HPFFL7EphA0h2hcStV4",
//   authDomain: "lock-landing.firebaseapp.com",
//   projectId: "lock-landing",
//   storageBucket: "lock-landing.appspot.com",
//   messagingSenderId: "578053925621",
//   appId: "1:578053925621:web:4071071e7eb0c65053f3bc"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export default db;

