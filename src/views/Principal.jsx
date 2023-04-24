import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MiniButton from "../Components/MiniButton";
import PageTitle from "../Components/PageTitle";
import Styles from "../css/styles.css";
import { getUserDataByUid } from "../database";

export default function Main(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const userData = await getUserDataByUid(uid);
        setUser(userData.data());
      }
    });
  }, [auth]);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      window.alert("Erro ao sair! 🐛");
    }
  };

  return (
    <React.Fragment>
      <PageTitle title="Welcome!" style={Styles} className="textCenter" />
      {user ? (
        <table border="1">
          <tbody>
            <tr>
              <td>Nome:</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>Sobrenome:</td>
              <td>{user.surname}</td>
            </tr>
            <tr>
              <td>Data de Nascimento:</td>
              <td>{user.date}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Carregando dados...</p>
      )}
      <div style={{ marginTop: 50 }}>
        <MiniButton text="Sair" onClick={handleLogout} />
      </div>
    </React.Fragment>
  );
}
