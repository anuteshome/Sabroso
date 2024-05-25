import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB9mbfz8cFkAV7jVhXjmD-dvlFRqa9t8Ks",
  authDomain: "sabroso-8df6a.firebaseapp.com",
  projectId: "sabroso-8df6a",
  storageBucket: "sabroso-8df6a.appspot.com",
  messagingSenderId: "427551074582",
  appId: "1:427551074582:web:edbb7e156d48bfe0a78837",
  measurementId: "G-8P4YXQY4WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);