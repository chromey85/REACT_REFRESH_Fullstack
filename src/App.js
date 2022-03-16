import { useState, useEffect } from "react";
import { Login } from "./components/login";
import { Home } from "./components/home";
import { tokenLogin } from "./utils";
import "./App.css";

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    tokenLogin(setUser);
  }, []);

  return (
    <div className="App">
      {/* {user && <h1>{user}</h1>} */}
      {/* {user ? <h1>{user}</h1> : <h1 id="login_title">Ready???</h1>} */}
      {!user ? <Login setUser={setUser} /> : <Home user={user} />}
    </div>
  );
};

export default App;
