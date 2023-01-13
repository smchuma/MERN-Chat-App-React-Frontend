import React from "react";

const Signup = () => {
  return (
    <>
      <div className="form-input">
        <div className="form">
          <form>
            <input type="text" placeholder="Name" name="name" required />
            <input type="email" placeholder="Email" name="email" required />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <input
              type="password"
              placeholder=" Confirm Password"
              name="password"
              required
            />
            <button>Signup</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
