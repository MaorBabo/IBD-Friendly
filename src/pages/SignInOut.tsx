import "./SignInOut.css";
import SignInForm from "../components/SignInForm";

const SignInOut = () => {
  return (
    <div className="background-image">
      <h1 className="site-logo">IBD-friendly</h1>
      <SignInForm navToSignIn="Home" navToSignUp="Home" />
    </div>
  );
};

export default SignInOut;
