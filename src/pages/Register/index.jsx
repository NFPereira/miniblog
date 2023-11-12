import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmePassword, setConfirmePassowrd] = useState("");
  const [error, setError] = useState("");

  const {
    createUser,
    error: authError,
    loading,
    setLoading,
  } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (displayName === "") {
      setError("Informe o nome do usuário!");
      return;
    }
    if (email === "") {
      setError("Informe o e-mail!");
      return;
    }
    if (password === "") {
      setError("Informe a senha");
      return;
    }
    if (confirmePassword === "") {
      setError("Confirme a senha");
      return;
    }
    if (password !== confirmePassword) {
      setError("As senhas devem ser iguais");
      return;
    }

    const res = await createUser(user);

    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmePassowrd("");
    setLoading(false);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            placeholder="Nome do usuário"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="text"
            name="email"
            placeholder="E-mail do usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmação de Senha:</span>
          <input
            type="password"
            name="confirmePassword"
            placeholder="Confirme sua senha"
            value={confirmePassword}
            onChange={(e) => setConfirmePassowrd(e.target.value)}
          />
        </label>
        <div className={styles.div_btn}>
          {!loading && <button className="btn">Cadastrar</button>}
          {loading && (
            <button className="btn" disabled>
              Aguarde...
            </button>
          )}
        </div>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
