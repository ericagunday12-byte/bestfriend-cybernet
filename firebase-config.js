// Firebase Configuration
// Production credentials for BESTFRIEND Cybernet Enterprises

const firebaseConfig = {
    apiKey: "AIzaSyDZAMrwljPLnS_Ipqj1Y0FLT4Hf4M64eRw",
    authDomain: "bestfriend-cybernet.firebaseapp.com",
    databaseURL: "https://bestfriend-cybernet-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bestfriend-cybernet",
    storageBucket: "bestfriend-cybernet.firebasestorage.app",
    messagingSenderId: "949732764719",
    appId: "1:949732764719:web:0ac195de9ad10d47abeada",
    measurementId: "G-ZPQ1KL8MZG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get Firebase services
const auth = firebase.auth();
const database = firebase.database();
const storage = firebase.storage();

// Enable offline persistence for Realtime Database
firebase.database().ref().keepSynced(true);

