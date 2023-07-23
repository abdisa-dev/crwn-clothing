import { signInWithgooglePopup, signInWithgoogleRedirect,createUserDocFromAuth} from "../../utils/firebase/firebase.utils"


const SignIn = () => {

 

  // async func just because of the response came from server/db / firebase/firestore
  const logGoogleUser = async () => {
    const {user} = await signInWithgooglePopup();
    const userDocRef = await createUserDocFromAuth(user)
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