import { initializeApp } from "firebase/app"
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyCCoboLd7rCjUEt2r0Sk2mI5PUofHfozrw",
  authDomain: "study-teams.firebaseapp.com",
  projectId: "study-teams",
  storageBucket: "study-teams.appspot.com",
  messagingSenderId: "468574221017",
  appId: "1:468574221017:web:3d52185c9355bf193144c8",
  measurementId: "G-J80YLE8G3V"
}

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp)