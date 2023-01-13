import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <>
      <div className="form-input">
        <div className="form">
          <form>
            <input type="email" placeholder="Email" name="email" required />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <button>Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
