import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBWrVVcS0y56R3qcLrMkuwTtJS2lxGbwsY",
    authDomain: "clone-7d2a4.firebaseapp.com",
    databaseURL: "https://clone-7d2a4.firebaseio.com",
    projectId: "clone-7d2a4",
    storageBucket: "clone-7d2a4.appspot.com",
    messagingSenderId: "266719854578",
    appId: "1:266719854578:web:d3b87df19b9c3b441c356b",
    measurementId: "G-2FTFBJ9S4X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }