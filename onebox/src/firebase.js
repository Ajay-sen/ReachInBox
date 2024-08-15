
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getDatabase } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyB-NItIu_pwXym4DrlBgZM2PE8qZR8_4_I",
  authDomain: "onebox-9da0d.firebaseapp.com",
  projectId: "onebox-9da0d",
  storageBucket: "onebox-9da0d.appspot.com",
  messagingSenderId: "640989383005",
  appId: "1:640989383005:web:b7fea9078295a2006b40b4",
  measurementId: "G-M37PTXV13G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
export const db=getFirestore(app);
export const provider=new GoogleAuthProvider();