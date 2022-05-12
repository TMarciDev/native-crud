// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, push, child } from "firebase/database";
import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDEGwPN6vd4fpyD3B4RN3z7u_XsktB_IM",
    authDomain: "native-crud-de32c.firebaseapp.com",
    databaseURL: "https://native-crud-de32c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "native-crud-de32c",
    storageBucket: "native-crud-de32c.appspot.com",
    messagingSenderId: "488992826632",
    appId: "1:488992826632:web:5ff871986361f0430038bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const db = getFirestore(app);

export const create = (value: String) => {
    const itemId = push(child(ref(database), 'items')).key;

    set(ref(database, 'items/' + itemId), {
        value: value
    })
    alert('saved')
}

export async function getItems() {
    const itemsCol = collection(db, 'items');
    const itemSnapshot = await getDocs(itemsCol);
    const itemList = itemSnapshot.docs.map(doc => doc.data());
    return itemList;
}

