import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
};

let instance = null;

export default function getFirebase() {
  if (typeof window !== 'undefined') {
    if (instance)
      return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }
}
