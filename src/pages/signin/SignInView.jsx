import "../../style/style.css";
import SignInForm from "../../components/SignInForm";

export default function SignInView() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <SignInForm />
      </section>
    </main>
  );
}
