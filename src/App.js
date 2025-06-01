import{ useState } from "react";

const XLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(username === "" || password ===""){
      setMessage("Both fields are required");
      return;
    }
  
    if(username === "user" && password === "password"){
      setIsLoggedIn(true);
      setMessage(`Welcome, ${username}!`);
    }
    else{
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      {isLoggedIn ? (
        <p>{message}</p>
      ) : (
        <div>
          {message && <p>{message}</p>}
          <form onSubmit={handleSubmit}>
            <div>
              <lebel htmlFor="username">Username:</lebel>
              <input type="text" id="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div>
              <lebel htmlFor="password">Password:</lebel>
              <input type="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default XLogin;
