import {auth, signInWithgooglePopup, signInWithgoogleRedirect,createUserDocFromAuth} from "../../utils/firebase/firebase.utils"
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

const SignIn = () => {

  useEffect(() => {
  const getRedirectResultResponse = async () => {
      const response = await getRedirectResult(auth);
      
      console.log(response)
    }
    getRedirectResultResponse()
  }, [])

  // async func just because of the response came from server/db / firebase/firestore
  const logGoogleUser = async () => {
    const {user} = await signInWithgooglePopup();
    createUserDocFromAuth(user)
  }

  
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with google popup</button>
      <button onClick={signInWithgoogleRedirect}>Sign In with google Redirect</button>
    </div>
  )
}

export default SignIn;