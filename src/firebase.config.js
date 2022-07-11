// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCgoqHqZnj-6K5z6BDbdyZ3e3SljYtHL5M',
  authDomain: 'house-marketplace-app-3f6b3.firebaseapp.com',
  projectId: 'house-marketplace-app-3f6b3',
  storageBucket: 'house-marketplace-app-3f6b3.appspot.com',
  messagingSenderId: '792608217071',
  appId: '1:792608217071:web:12d3794d7b1524612f481a',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
