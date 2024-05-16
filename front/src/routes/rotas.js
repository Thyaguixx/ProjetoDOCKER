import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import UserList from "../Components/ListaUsuarios";
import Erro404 from "../Components/Erro404";
import Inicio from "../Components/TelaInicial";
import Cadastro from "../Components/Cadastro";

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/cadastro-usuario" element={<Cadastro />} />
                <Route path="/lista-usuarios" element={<UserList />} />
                <Route path="/" element={<Navigate to={"/inicio"} />} />
                <Route path="*" element={<Erro404 />} />
            </Routes>
        </BrowserRouter>
    );
};