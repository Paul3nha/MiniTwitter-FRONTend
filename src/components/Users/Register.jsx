import { useState } from "react";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://minitwitter-paulenha.up.railway.app/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      }
    );
    const data = await res.json();
    console.log(`He recibio:`, {
      username: username,
      email: email,
      password: password,
    });

    if (!res.ok) {
      setError(true);
    } else {
      setUsername(data.username);
      setEmail(data.email);
      setPassword(data.password);
    }
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div id="register" className="page">
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <label>
          <span>Username:</span>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          <span>Email:</span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          <span>Password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button onClick={handleRegister}>Registrarme</button>

        {error && <p>El usuario ya existe</p>}
      </form>
    </div>
  );
};
