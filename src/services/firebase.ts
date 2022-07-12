import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDuq1NWpOla_oAa2GXs3YrCr3hGYZP5_LY",
  authDomain: "official-ivan-express.firebaseapp.com",
  projectId: "official-ivan-express",
  storageBucket: "official-ivan-express.appspot.com",
  messagingSenderId: "854513014994",
  appId: "1:854513014994:web:dd5f9261953796ee8e350b",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
