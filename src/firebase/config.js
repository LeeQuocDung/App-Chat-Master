// firebase setup
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const fbConfig = {
    apiKey: "AIzaSyB2A4cdKCjgciIWlCtXEgWkLsy-bst2Dm8",
    authDomain: "chat-room-9112f.firebaseapp.com",
    projectId: "chat-room-9112f",
    storageBucket: "chat-room-9112f.appspot.com",
    messagingSenderId: "527572640600",
    appId: "1:527572640600:web:e26cd4d7a9b5fb075ffb2d",
};
const firebaseConfig = {
    apiKey: "AIzaSyBNNYPVmSdcErf1Lgkoofi1v2X3NU5MbFE",
    authDomain: "app-chat-c8da7.firebaseapp.com",
    databaseURL: "https://app-chat-c8da7-default-rtdb.firebaseio.com",
    projectId: "app-chat-c8da7",
    storageBucket: "app-chat-c8da7.appspot.com",
    messagingSenderId: "278102044846",
    appId: "1:278102044846:web:61a95e4f8cd1f19d5cbd3f",
    measurementId: "G-0YNPM18E5G"
  };
let app = initializeApp(firebaseConfig);
let db = getFirestore(app);
export { db };
