import {getApp, getApps ,initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDTZmzsqOy9mRhlklzcorxwpYX0C5xDzdU",
    authDomain: "restaurantapp-ccfbe.firebaseapp.com",
    databaseURL: "https://restaurantapp-ccfbe-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-ccfbe",
    storageBucket: "restaurantapp-ccfbe.appspot.com",
    messagingSenderId: "524483669773",
    appId: "1:524483669773:web:bde15d93772f4bc1e64a44"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);
  
  export { app, firestore, storage };