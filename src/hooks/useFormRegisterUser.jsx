import { useState } from "react";
import { createUserWithCredentials, createUserProfile } from "../database";
import { useNavigate } from "react-router-dom";

export function useFormRegisterUser() {
  const navigate = useNavigate();

  const [fields, setFields] = useState({
    date: "",
    email: "",
    name: "",
    password: "",
    surname: "",
  });

  const handleTextFieldChange = (event) => {
    setFields((prevState) => {
      // prevState é o state anterior.
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (event) => {
    try {
      // parar o evento do submit do form para não dar refresh na pagina
      event.preventDefault();

      const { email, password, name, surname, date } = fields;

      // criar credenciais do usuario
      const { user } = await createUserWithCredentials(email, password);
      const { uid } = user;

      // salvar os dados do usuario
      await createUserProfile(uid, { name, surname, date });

      // enviar o usuario para o login
      navigate("/login");
      alert(`${name} sua conta foi criada com sucesso! 🚀`);
    } catch (error) {
      window.alert(error.message);
    }
  };
  return { fields, handleTextFieldChange, handleSubmit, setFields };
}
