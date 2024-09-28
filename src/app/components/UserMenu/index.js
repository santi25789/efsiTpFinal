"use client"; 
import styles from './style.module.css';
import { useState, useEffect } from 'react'; 
import Link from 'next/link'; 

export default function UserMenu() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Leer directamente desde localStorage al cargar el componente
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = JSON.parse(token); // Asegúrate de que esto coincida con la estructura que guardaste
      setUser(decoded.username); // Ajusta según la estructura del token
    }
  }, []); // Solo se ejecuta una vez al montar el componente

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null); // Actualiza el estado al cerrar sesión
  };

  return (
    <div className={styles.userMenu}>
      {user ? (
        <div>
          <p>Bienvenido, {user}</p>
          <button onClick={handleLogout} className={styles.button}>Cerrar Sesión</button>
        </div>
      ) : (
        <div>
          <Link href="/login">
            <button className={styles.button}>Iniciar Sesión</button>
          </Link>
          <Link href="/register">
            <button className={styles.button}>Registrarse</button>
          </Link>
        </div>
      )}
    </div>
  );
}
