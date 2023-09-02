import SignInForm from "../../components/SignInForm";
import { useOutletContext } from "react-router-dom";
import { useSignMethod } from "../layout/PagesLayout";

export default function SignInView({ signMethod }) {
  const { setSignMethod } = useOutletContext();
  useSignMethod(signMethod, setSignMethod);

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
