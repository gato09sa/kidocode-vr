import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCU2Pi8tqjDGRU6D7HeVEpRBa1K72fKibo",
  authDomain: "kidocode-vr.firebaseapp.com",
  projectId: "kidocode-vr",
  storageBucket: "kidocode-vr.firebasestorage.app",
  messagingSenderId: "808827342473",
  appId: "1:808827342473:web:c805341aa2752d377f8058"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export async function loginAnonymous() {
  const userCredential = await signInAnonymously(auth);
  return userCredential.user;
}