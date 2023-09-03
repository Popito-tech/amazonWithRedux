import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAWI3LKUOwRNkxEmZ51BfYL1mS6bEOuNAE",
    authDomain: "redux-9c13a.firebaseapp.com",
    projectId: "redux-9c13a",
    storageBucket: "redux-9c13a.appspot.com",
    messagingSenderId: "78936355215",
    appId: "1:78936355215:web:965c4023421f5d6423dbfa"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);