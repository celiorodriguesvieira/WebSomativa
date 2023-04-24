import React from "react";
import TextField from "../Components/TextField";
import PageTitle from "../Components/PageTitle";
import Button from "../Components/Button";
import MiniButton from "../Components/MiniButton";
import { useFormRegisterUser } from "../hooks/useFormRegisterUser";
import Style from "../css/styles.css";
import { Link } from "react-router-dom";

export default function Register() {
  const { fields, handleTextFieldChange, handleSubmit } = useFormRegisterUser();
  return (
    <React.Fragment>
      <PageTitle title="Register" className="textCenter" />
      <div style={Style}>
        <form onSubmit={handleSubmit} className="menu">
          <TextField
            className="input"
            type="text"
            name="name"
            placeholder="First name"
            onChange={handleTextFieldChange}
            value={fields.name}
          />
          <TextField
            className="input"
            type="text"
            name="surname"
            placeholder="Last name"
            onChange={handleTextFieldChange}
            value={fields.surname}
          />

          <TextField
            className="input"
            type="date"
            name="date"
            onChange={handleTextFieldChange}
            value={fields.date}
          />
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
            <Button text="Create an account" />
            <Link to="/login">
              <MiniButton type="button" text="Aready have a account?" />
            </Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
