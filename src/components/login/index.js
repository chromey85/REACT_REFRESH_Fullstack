import { useState } from "react";
import { createUser, login } from "../../utils";
import logo from "../../images/Faker-Gram.png";
import "./index.css";

export const Login = ({ setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [bool, setBool] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    // setUser({ username: username, email: email, pass: pass });
    if (bool) {
      login(username, pass, setUser);
    } else {
      if (email && email.includes("@")) {
        createUser(username, email, pass, setUser);
      }
    }
  };

  return (
    <>
      <img id="fake_logo" src={logo} alt="Logo" />
      <form onSubmit={submitHandler}>
        <input
          onChange={(event) => setUsername(event.target.value)}
          placeholder="username"
        />
        {!bool && (
          <input
            onChange={(event) => setEmail(event.target.value)}
            placeholder="email"
            type="email"
          />
        )}
        <input
          onChange={(event) => setPass(event.target.value)}
          placeholder="password"
          type="password"
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setBool(!bool)}>Log in or Sign up</button>
    </>
  );
};
