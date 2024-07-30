import { initializeApp } from 'firebase/app';
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDAuNLd6VakdyGdPPvMoNcysxa6IqvBf9U",
  authDomain: "keep-83999.firebaseapp.com",
  projectId: "keep-83999",
  storageBucket: "keep-83999.appspot.com",
  messagingSenderId: "699789101720",
  appId: "1:699789101720:web:284ed32a21656a2ece5eed"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth,googleProvider, db };