"use client"; 
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Para redireccionar

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    const fakeToken = JSON.stringify({ username: "UsuarioPrueba" });
    localStorage.setItem('token', fakeToken);

    router.push('/'); 
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}
