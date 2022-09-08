
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMxK1iazMlpmd2BUILGjcLSFMbgq_lfmI",
  authDomain: "uber-next-clone-live-cf606.firebaseapp.com",
  projectId: "uber-next-clone-live-cf606",
  storageBucket: "uber-next-clone-live-cf606.appspot.com",
  messagingSenderId: "911678854455",
  appId: "1:911678854455:web:595a8d35e1c1b1c2f036b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export{app,provider,auth}