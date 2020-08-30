import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDNF259wro8oF3xGQuVubV3l4G2b453oTU',
  authDomain: 'crwn-db-bc535.firebaseapp.com',
  databaseURL: 'https://crwn-db-bc535.firebaseio.com',
  projectId: 'crwn-db-bc535',
  storageBucket: 'crwn-db-bc535.appspot.com',
  messagingSenderId: '213349923671',
  appId: '1:213349923671:web:4a7ea3fc1097d565511c12',
  measurementId: 'G-78F6T2YM71',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('Error creating a user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
