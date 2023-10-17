// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqsHsOtK0QSM4t3Hb08UPh2NBOwBB8YtM",
  authDomain: "fir-blog-d0dcf.firebaseapp.com",
  projectId: "fir-blog-d0dcf",
  storageBucket: "fir-blog-d0dcf.appspot.com",
  messagingSenderId: "23430314381",
  appId: "1:23430314381:web:ebc4cf5b2e8c7ec75a65c4",
  measurementId: "G-2KCT6X0X3G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);
