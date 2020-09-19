import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBkZe4yhhKnnNDf3LcDQYaqRlJvOoSVSIY",
  authDomain: "projectbluebird-3b2e0.firebaseapp.com",
  databaseURL: "https://projectbluebird-3b2e0.firebaseio.com",
  projectId: "projectbluebird-3b2e0",
  storageBucket: "projectbluebird-3b2e0.appspot.com",
  messagingSenderId: "823680104200",
  appId: "1:823680104200:web:d549b3a1c1ad8f88fb9ebd",
  measurementId: "G-BZB78VHFMV"
};

//if(firebase.apps.length === 0){
//}

firebase.initializeApp(firebaseConfig)  

export const fb = firebase;
export const db = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();



