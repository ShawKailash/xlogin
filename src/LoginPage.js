import{ useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if(username === "user" && password === "password"){
      setError("");
      setIsSubmitted(true);
    }
    else{
      setError("Invalid username or password");
      setIsSubmitted(false);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isSubmitted ? (
        <div>
          <p>Wellcome, {username}!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
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
      )}
    </div>
  );
};

export default LoginPage;
