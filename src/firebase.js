import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAv05NsfaCjx7UOIGketu-DndHkfAWlNdA",
  authDomain: "chat-7baf1.firebaseapp.com",
  projectId: "chat-7baf1",
  storageBucket: "chat-7baf1.appspot.com",
  messagingSenderId: "461674591322",
  appId: "1:461674591322:web:80405366bd4537fb489463"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth()