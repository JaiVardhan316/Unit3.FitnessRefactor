import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router";
import { Link } from "react-router";

/** A form that allows users to log into an existing account. */
export default function Login() {
  const { login } = useAuth();

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const tryLogin = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await login({ username, password });
      navigate("/Activities");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h1>Log in to your account</h1>
      <form action={tryLogin}>
        <label>
          Username
          <input type="text" name="username" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button>Login</button>
        {error && <output>{error}</output>}
      </form>
      <Link to="/Register">Need an account? Register here.</Link>
    </>
  );
}
