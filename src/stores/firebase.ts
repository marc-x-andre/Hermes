// Import the functions you need from the SDKs you need
import { ref } from "vue";
import { defineStore } from "pinia";
import { initializeApp } from "firebase/app";

const app = initializeApp({
  apiKey: "AIzaSyAyjrt4tS-2ypiu5tcIjbqNXQAHbqdaUEY",
  authDomain: "hermes-mxa.firebaseapp.com",
  projectId: "hermes-mxa",
  storageBucket: "hermes-mxa.firebasestorage.app",
  messagingSenderId: "1097947031531",
  appId: "1:1097947031531:web:3ad3e2f08a332f43afdbae",
  measurementId: "G-86WX69L9Y9",
});

export const useFirebaseStore = defineStore("firebase", () => {
  const firebaseApp = ref(app);
  return {
    firebaseApp,
  };
});
