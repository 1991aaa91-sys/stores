import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDGO1_9xTcyMisrsdWLCedxbRLRaUKMNxc",
  authDomain: "mystores-18c7c.firebaseapp.com",
  projectId: "mystores-18c7c",
  storageBucket: "mystores-18c7c.firebasestorage.app",
  messagingSenderId: "1013220512083",
  appId: "1:1013220512083:web:8cacc80e108c5b03c851a6"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const CLOUD_NAME = "lgliw0mw";
export const UPLOAD_PRESET = "stores_upload";
