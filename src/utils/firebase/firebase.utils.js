import {initializeApp} from "firebase/app"
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider} from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyAHPzhNuAaBeH5YLnrvipmqfnInH7EoP7k",

  authDomain: "crwn-cloting-7f302.firebaseapp.com",

  projectId: "crwn-cloting-7f302",

  storageBucket: "crwn-cloting-7f302.appspot.com",

  messagingSenderId: "336778113189",

  appId: "1:336778113189:web:c1dfef352da994fdbe1d4c"

};

// init firebase app which integrated with the console 
const firebaseApp = initializeApp(firebaseConfig)

// authorization provider weather the user is valid or not
const provider = new GoogleAuthProvider()

// custom parameter display if there are multiple account on provide signin
provider.setCustomParameters({prompt: 'select_account'})

// authentication key to authernticate with providers
export const auth = getAuth()

// way to provide signin inthis case popup dialog which recives to params the auth and provider to validate the user 
export const signInWithgooglePopup = () => signInWithPopup(auth, provider)

// initalizing database
export const db = getFirestore()

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid)
  console.log(userDocRef)
}