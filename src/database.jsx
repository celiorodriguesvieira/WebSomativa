import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOkEgqdSvsEBIIcbK_RTZLK3PuXBiXtbA",
  authDomain: "projeto-web-db920.firebaseapp.com",
  projectId: "projeto-web-db920",
  storageBucket: "projeto-web-db920.appspot.com",
  messagingSenderId: "685388431875",
  appId: "1:685388431875:web:0c8cbcc1ef0f2a408c0436",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const createUserProfile = (uid, userData) => {
  return setDoc(doc(db, "usuarios", uid), {
    name: userData.name,
    surname: userData.surname,
    date: userData.date,
  });
};

export const createUserWithCredentials = (email, password) => {
  const auth = getAuth(app);
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = (email, password) => {
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, password);
};

export const getUserDataByUid = async (uid) => {
  const docRef = doc(db, "usuarios", uid);
  return await getDoc(docRef);
};
