import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4ztdj41ggb21d_cKygq0cxxQzCINKyzY",
  authDomain: "pipestock2025.firebaseapp.com",
  projectId: "pipestock2025",
  storageBucket: "pipestock2025.appspot.com",
  messagingSenderId: "591046290131",
  appId: "1:591046290131:web:0e52d5cff4cdb00fb70226",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
