import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const app = initializeApp(firebaseConfig);

//refernciák:
export const db=getFirestore(app)
export const auth=getAuth(app)
