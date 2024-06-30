import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState(''); // Estado para el nombre de usuario
  const [password, setPassword] = useState(''); // Estado para la contraseña

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', { username, password }); // Petición de login
      localStorage.setItem('token', response.data.access_token); // Almacena el token JWT en el localStorage
      window.location.href = '/products'; // Redirige a la página de productos
    } catch (error) {
      console.error('Login failed', error); // Manejo de error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /> {/* Input para nombre de usuario */}
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> {/* Input para contraseña */}
      </div>
      <button type="submit">Login</button> {/* Botón de login */}
    </form>
  );
}

export default Login;
