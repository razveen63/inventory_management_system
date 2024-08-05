// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyylo8mVITShyCsiyv2OrPjr6qxfqSdB4",
  authDomain: "inventory-management-e64c1.firebaseapp.com",
  projectId: "inventory-management-e64c1",
  storageBucket: "inventory-management-e64c1.appspot.com",
  messagingSenderId: "365923636296",
  appId: "1:365923636296:web:2b8ac56f607dc877f2f47d",
  measurementId: "G-0XTL707TX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}