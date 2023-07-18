import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  // useEffect(() => {
  //   async function a() {
  //     await console.log("rendered");
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //   }
  //   a();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log({ signInWithPopup: signInWithPopup });
    const userDocRef = createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>sign in with google popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        sign in with google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
