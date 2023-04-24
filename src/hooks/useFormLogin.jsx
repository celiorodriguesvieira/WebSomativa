import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../database";

export function useFormLogin() {
  const navigate = useNavigate();

  const [fields, setFields] = useState({
    email: "",
    password: "",
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

      const { email, password } = fields;

      // logar o usuario
      const data = await signInUser(email, password);

      console.log(data);

      // usuario logado
      navigate("/principal");
    } catch (error) {
      window.alert("Usuário ou senha inválidos!");
    }
  };
  return { fields, handleTextFieldChange, handleSubmit, setFields };
}
