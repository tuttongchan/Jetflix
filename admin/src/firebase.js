import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: 'jetflix-9dd7b.firebaseapp.com',
  projectId: 'jetflix-9dd7b',
  storageBucket: 'jetflix-9dd7b.appspot.com',
  messagingSenderId: '568212460577',
  appId: '1:568212460577:web:6d637b911a05fdb560ff60',
  measurementId: 'G-95M5VD25WM',
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
