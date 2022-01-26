import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyC1kbGy-qJxdFOo1CTaoOdU3E_4sJTWP9I",
    authDomain: "shopping-cart-3ad84.firebaseapp.com",
    projectId: "shopping-cart-3ad84",
    storageBucket: "shopping-cart-3ad84.appspot.com",
    messagingSenderId: "197662680502",
    appId: "1:197662680502:web:6ab2f7fac4940897b80d17",
    measurementId: "G-C3H5SZG5QP"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef  = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot);

    if(!snapShot.exists)
    {
        const {displayName, email}  = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } 
        catch(error)
        {
            console.log('error creating user', error.message)
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth =  firebase.auth();
export const firestore = firebase.firestore();

const provider  = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;