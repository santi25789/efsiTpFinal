"use client"; 
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();

    // Simulación de registro
    if (firstName && lastName && email && password) {
      const fakeToken = JSON.stringify({ username: `${firstName} ${lastName}` });
      localStorage.setItem('token', fakeToken); // Guardamos el token simulado en localStorage

      router.push('/'); // Redirigir a la página principal después del registro
    } else {
      alert("Todos los campos son obligatorios.");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Registrarse</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nombre"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Apellido"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
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
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
