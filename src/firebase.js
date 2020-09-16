//
//

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCT4s0mFqv12mMwMflIPQVEbb6xqLncoQM',
  authDomain: 'tiktok-clone-react-c6e15.firebaseapp.com',
  databaseURL: 'https://tiktok-clone-react-c6e15.firebaseio.com',
  projectId: 'tiktok-clone-react-c6e15',
  storageBucket: 'tiktok-clone-react-c6e15.appspot.com',
  messagingSenderId: '582580971836',
  appId: '1:582580971836:web:da1fa8f4a0500c9df5d639',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
