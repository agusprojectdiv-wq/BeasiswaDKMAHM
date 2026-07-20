// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyD-nafPz2YXnTxjbm_IA6xSkRz5_Xg-9vY",

  authDomain: "beasiswadkmahm.firebaseapp.com",

  projectId: "beasiswadkmahm",

  storageBucket: "beasiswadkmahm.firebasestorage.app",

  messagingSenderId: "191632508919",

  appId: "1:191632508919:web:4c52fca242a13fbdaa50f2",

  measurementId: "G-C1RJ72P5X8"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);