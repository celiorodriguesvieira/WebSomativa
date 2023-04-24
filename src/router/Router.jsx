import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "../views/Cadastro";
import Login from "../views/Login";
import Principal from "../views/Principal";
import NotFound from "../views/NotFound";

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Cadastro} />
        <Route path="/login" Component={Login} />
        <Route path="/principal" Component={Principal} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
}
