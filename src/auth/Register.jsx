import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router";
import { Link } from "react-router";

/** A form that allows users to register for a new account */
export default function Register() {
  const { register } = useAuth();

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const tryRegister = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await register({ username, password });
      navigate("/Activities");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h1>Register for an account</h1>
      <form action={tryRegister}>
        <label>
          Username
          <input type="text" name="username" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button>Register</button>
        {error && <output>{error}</output>}
      </form>
      <Link to="/Login">Already have an account? Log in here.</Link>
    </>
  );
}
