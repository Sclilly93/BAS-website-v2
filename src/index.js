// src/index.js project settings in the Firebase Console
import { initializeApp } from 'firebase/app';
import React from "react";






const firebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain',
  projectId: 'bas-website-design',
  storageBucket: 'your-storage-bucket',
  messagingSenderId: 'your-messaging-sender-id',
  appId: 'your-app-id',
};

const app = initializeApp(firebaseConfig);



firebase.initializeApp(firebaseConfig);



//react entry point
module.exports = {
  // ... other configurations
  entry: './src/index.js', 
};
