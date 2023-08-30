import { Routes, Route } from "react-router-dom";
import Layout from "../pages/layout/PagesLayout";
import SignIn from "../pages/signin/SignInView";
import Profile from "../pages/profile/ProfileView";
import Error from "../pages/error/ErrorView";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/" element={<Homepage/>}/> */}
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
