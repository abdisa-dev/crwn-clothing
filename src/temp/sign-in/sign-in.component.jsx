import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../firebase/firebase.util";

const signIn = () => {
  const logInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logInWithGoogle}>sign in with Googlepopup</button>
    </div>
  );
};

export default signIn;
