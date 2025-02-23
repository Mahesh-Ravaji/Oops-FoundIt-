
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { db } from "../config/firebase";
// import { db } from "../firebase";
import { db } from "../firebase";

import { db } from "../../firebase";



import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBni2J6LhT5LxsnFcw9z2840BZn5x16S7E",
    authDomain: "oops-fonditt.firebaseapp.com",
    projectId: "oops-fonditt",
    storageBucket: "oops-fonditt.firebasestorage.app",
    messagingSenderId: "869024670944",
    appId: "1:869024670944:web:d63a1467a698b0d02d5c85",
    measurementId: "G-GXG77KSCMK"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Firebase Authentication
const db = getFirestore(app); // Firestore Database

export { auth, db };




























// // // firebase-config.js
// // import { initializeApp } from "firebase/app";
// // import { getAuth } from "firebase/auth";
// // // ... other imports if needed (for Firestore, etc.)


// // const firebaseConfig = {
// //   // YOUR_FIREBASE_CONFIG_HERE - Paste in from your firebase console
// // };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app); // Get the auth instance

// export { auth }; // export the auth object to be used in other components

// // Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Initialize Firebase Analytics
// const analytics = getAnalytics(app);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBni2J6LhT5LxsnFcw9z2840BZn5x16S7E",
//   authDomain: "oops-fonditt.firebaseapp.com",
//   projectId: "oops-fonditt",
//   storageBucket: "oops-fonditt.firebasestorage.app",
//   messagingSenderId: "869024670944",
//   appId: "1:869024670944:web:d63a1467a698b0d02d5c85",
//   measurementId: "G-GXG77KSCMK"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);