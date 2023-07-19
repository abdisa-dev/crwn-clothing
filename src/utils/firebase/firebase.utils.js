import {initializeApp} from "firebase/app"
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {

  apiKey: "AIzaSyAHPzhNuAaBeH5YLnrvipmqfnInH7EoP7k",

  authDomain: "crwn-cloting-7f302.firebaseapp.com",

  projectId: "crwn-cloting-7f302",

  storageBucket: "crwn-cloting-7f302.appspot.com",

  messagingSenderId: "336778113189",

  appId: "1:336778113189:web:c1dfef352da994fdbe1d4c"

};

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({prompt: 'select_account'})

export const auth = getAuth()
export const signInWithgooglePopup = () => signInWithPopup(auth, provider)