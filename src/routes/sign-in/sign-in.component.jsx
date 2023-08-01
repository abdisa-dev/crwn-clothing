import { signInWithgooglePopup,createUserDocFromAuth} from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  // async func just because of the response came from server/db/ firebase/firestore
  const logGoogleUser = async () => { 
    const {user} = await signInWithgooglePopup();
    const userDocRef = await createUserDocFromAuth(user)
  }


  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with google popup</button>
      < SignUpForm/>
    </div>
  )
}

export default SignIn;