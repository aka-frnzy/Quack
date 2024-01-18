import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9pnhsAEkRzteQC-bSYa5Z07w3p7K8I8Q",
    authDomain: "quacker-3b44b.firebaseapp.com",
    projectId: "quacker-3b44b",
    storageBucket: "quacker-3b44b.appspot.com",
    messagingSenderId: "728051331016",
    appId: "1:728051331016:web:4695e12fc3f08104b05afd",
    measurementId: "G-J551V3MCS1"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;