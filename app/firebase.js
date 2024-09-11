import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDkTMi8JuZ8RX5ruteZSXX7XVuy8XGiBpc",
    authDomain: "newproject-b7a04.firebaseapp.com",
    projectId: "newproject-b7a04",
    storageBucket: "newproject-b7a04.appspot.com",
    messagingSenderId: "436197601953",
    appId: "1:436197601953:web:516839f894e4460e68b6e0",
    measurementId: "G-BWV9YE2BHM"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };