import { initializeApp } from 'firebase/app';
import { getRemoteConfig } from "firebase/remote-config"; 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZNrjuhBpHNLkXL1GeKK-leWpbz4BQadI",
    authDomain: "looptimize-website.firebaseapp.com",
    projectId: "looptimize-website",
    storageBucket: "looptimize-website.appspot.com",
    messagingSenderId: "195428476005",
    appId: "1:195428476005:web:6d58e98a776b9f3ff0528c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const remoteConfig = getRemoteConfig(app);
