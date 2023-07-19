import {signInWithgooglePopup} from "../../utils/firebase/firebase.utils"


const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithgooglePopup();
    console.log(response)
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign IN with google popup</button>
    </div>
  )
}

export default SignIn;