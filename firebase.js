import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// From the Firebase console: Project settings → General → Your apps → SDK setup and
// configuration. This config is safe to commit — it's a public client identifier, not a
// secret. Access control is enforced by the Firestore security rules, not by hiding these values.
const firebaseConfig = {
  apiKey: "AIzaSyAtXmQCK5_ndPQYwglKEXqitjoUz6diwZ4",
  authDomain: "greenpath-96558.firebaseapp.com",
  projectId: "greenpath-96558",
  storageBucket: "greenpath-96558.firebasestorage.app",
  messagingSenderId: "577295479926",
  appId: "1:577295479926:web:4978ede3d0a753b5cd1b57",
  measurementId: "G-90QP7EKY43",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
