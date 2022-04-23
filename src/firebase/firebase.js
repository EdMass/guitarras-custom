import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyASH0Pt5-APzuGNhxGDkVGTtC57MBIeM0Q",
  authDomain: "guitarrascustom.firebaseapp.com",
  projectId: "guitarrascustom",
  storageBucket: "guitarrascustom.appspot.com",
  messagingSenderId: "971407158180",
  appId: "1:971407158180:web:0ddec11036d92fbb842f31"
};

// Initialize Firebase
const auth = initializeApp(firebaseConfig);

export const db = getFirestore(auth)

export default auth;