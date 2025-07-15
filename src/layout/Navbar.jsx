import { useAuth } from "../auth/AuthContext";
import {Link} from "react-router";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <Link to="/Activities">Activities</Link>
        {token ? (
          <a onClick={() => logout()}>Log out</a>
        ) : (
          <>
            <Link to="/Register">Register</Link>
            <Link to="/Login">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
}
