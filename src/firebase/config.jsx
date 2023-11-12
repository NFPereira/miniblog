import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDc2fo7supfpJ2HnrsggZlc3g2h6wohLa4",
  authDomain: "miniblog-f037c.firebaseapp.com",
  projectId: "miniblog-f037c",
  storageBucket: "miniblog-f037c.appspot.com",
  messagingSenderId: "48937124754",
  appId: "1:48937124754:web:dcb3c971405b615971b74b",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
