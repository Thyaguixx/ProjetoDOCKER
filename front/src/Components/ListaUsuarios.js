import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const GETUsuarios = async () => {
        try {
            const response = await Axios.get(`${process.env.REACT_APP_API_URL}/GETUsuarios`);
            if (response.data.Sucesso) {
                return response.data.ListaUsuarios;
            } else {
                console.error('Erro ao buscar usuários:', response.data.msg);
                return [];
            }
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            return [];
        }
    };

    const fetchUsers = async () => {
        const users = await GETUsuarios();
        setUsers(users);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleAddUser = () => {
        navigate('/cadastro-usuario');
    };

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <div className="bg-white p-4 rounded shadow" style={{ width: '80%', maxWidth: '800px' }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-center mb-0">Lista de Usuários</h2>
                    <Button variant="primary" onClick={handleAddUser}>Adicionar Usuário</Button>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Curso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.UsuarioNome}</td>
                                <td>{user.UsuarioIdade}</td>
                                <td>{user.UsuarioCurso}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default UserList;
