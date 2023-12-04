import React from "react";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../Context/AuthContext";

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();
  return (
    <div className={styles.navbar}>
      <div className={styles.brand}>
        <NavLink to="/">
          Mini <span>Blog</span>
        </NavLink>
      </div>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Cadastrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Novo Post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
        {user && <button onClick={logout}>Sair</button>}
      </ul>
    </div>
  );
};

export default Navbar;
