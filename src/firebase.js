// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyARdshAeqgJBNWJZBrmfrxoBgxt6CmVS50",
  authDomain: "pipestock-d292e.firebaseapp.com",
  projectId: "pipestock-d292e",
  storageBucket: "pipestock-d292e.firebasestorage.app",
  messagingSenderId: "895031219328",
  appId: "1:895031219328:web:9445b01d4f22696cfe8265",
  measurementId: "G-QPPRCNNHHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
