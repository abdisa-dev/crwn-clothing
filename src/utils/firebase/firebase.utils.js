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
const googleProvider = new GoogleAuthProvider()

// custom parameter display if there are multiple account on provide signin
googleProvider.setCustomParameters({prompt: 'select_account'})

// authentication key to authernticate with providers
export const auth = getAuth()

// way to provide signin in this case popup dialog which recives two params the auth and provider to validate the user 
export const signInWithgooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithgoogleRedirect = () => signInWithRedirect(auth, googleProvider)

// initalizing database
export const db = getFirestore()


export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid)

  const userSnapShot = await getDoc(userDocRef)


  if (!userSnapShot.exists()) {
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch(error) {
      console.log("there is an error while creating document", error.message)
    }
  }

  return userDocRef
}
