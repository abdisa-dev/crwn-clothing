import {signInWithgooglePopup, createUserDocFromAuth} from "../../utils/firebase/firebase.utils"


const SignIn = () => {

  // async func just because of the response came from server/db / firebase/firestore
  const logGoogleUser = async () => {
    const {user} = await signInWithgooglePopup();
    createUserDocFromAuth(user)
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign IN with google popup</button>
    </div>
  )
}

export default SignIn;