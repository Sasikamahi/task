// Login.jsx
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login(e) {
    e.preventDefault();
    try {
      const res = await axios.post("https://junesece2025.onrender.com/login", {
        username: username,
        password: password,
      });

      const { message, isLogin } = res.data;

      if (isLogin) {
        localStorage.setItem("isLogin", "true");
        alert(message);
        window.location.href = "/";
      } else {
        localStorage.setItem("isLogin", "false");
        alert(message);
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("An error occurred during login.");
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Enter your User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Create an account? <Link to="/signup">Signup</Link>
      </p>
    </section>
  );
};

export default Login;
