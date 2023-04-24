import React from "react";
import { useFormLogin } from "../hooks/useFormLogin";
import TextField from "../Components/TextField";
import PageTitle from "../Components/PageTitle";
import Button from "../Components/Button";
import MiniButton from "../Components/MiniButton";
import Styles from "../css/styles.css";
import { Link } from "react-router-dom";

export default function Login() {
  const { fields, handleSubmit, handleTextFieldChange } = useFormLogin();

  return (
    <React.Fragment>
      <PageTitle title="Login" className="textCenter" />
      <form onSubmit={handleSubmit} className="menu" style={Styles}>
        <TextField
          className="input"
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleTextFieldChange}
          value={fields.email}
        />
        <TextField
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleTextFieldChange}
          value={fields.password}
        />
        <div>
          <Button text="Sign in" className="btn" />
          <Link to="/">
            <MiniButton text="Create Account" />
          </Link>
        </div>
      </form>
    </React.Fragment>
  );
}
