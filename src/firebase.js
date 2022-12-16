import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyB8pJi9VdUIKxRJQx-pmRd3nhzxKKAZFT0',
	authDomain: 'linkedin-clone-ff991.firebaseapp.com',
	projectId: 'linkedin-clone-ff991',
	storageBucket: 'linkedin-clone-ff991.appspot.com',
	messagingSenderId: '554512014140',
	appId: '1:554512014140:web:7b17619ccb8edab37d9c39',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
