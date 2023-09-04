import { Routes, Route } from "react-router-dom";
import Layout from "../pages/layout/PagesLayout";
import SignIn from "../pages/signin/SignInView";
import Profile from "../pages/profile/ProfileView";
import Error from "../pages/error/ErrorView";
import Home from "../pages/home/homeView";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home signMethod="Sign In" />} />
        <Route path="/login" element={<SignIn signMethod="Sign In" />} />
        <Route path="/profile" element={<Profile signMethod="Sign Out" />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
