import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { BsFillPersonFill, BsLockFill, BsEnvelopeFill } from 'react-icons/bs';
import iziToast from 'izitoast';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [curso, setCurso] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const usuarioDados = {
            UsuarioNome: nome,
            UsuarioIdade: idade,
            UsuarioCurso: curso
        };

        try {
            const response = await Axios.post(`${process.env.REACT_APP_API_URL}/SETUsuarios`, {
                dados: usuarioDados
            });

            if (response.data.Sucesso) {
                // console.log(response.data);
                localStorage.setItem('dataList', JSON.stringify(response.data.Lista));
                
                iziToast.success({
                    title: response.data.msg,
                    position: 'topRight'
                });

                navigate('/lista-usuarios');
            } else {
                iziToast.error({
                    title: response.data.msg,
                    position: 'topRight'
                });
            }
        } catch (error) {
            // console.error('Erro ao enviar dados:', error);
            iziToast.error({
                title: 'Erro ao enviar dados',
                position: 'topRight'
            });
        }
    };

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <div style={{ maxWidth: '600px', width: '100%', padding: '20px', textAlign: 'center' }}>
                <Form onSubmit={handleSubmit} className="p-4 border rounded" style={{ backgroundColor: 'white' }}>
                    <h1 className="mb-4 text-center">Cadastro</h1>
                    <Form.Group className="mb-3" controlId="formBasicNome">
                        <div className="d-flex align-items-center">
                            <BsFillPersonFill style={{ marginRight: '10px' }} />
                            <Form.Label className="m-0">Nome</Form.Label>
                        </div>
                        <Form.Control
                            type="text"
                            placeholder="Digite seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <div className="d-flex align-items-center">
                            <BsEnvelopeFill style={{ marginRight: '10px' }} />
                            <Form.Label className="m-0">Idade</Form.Label>
                        </div>
                        <Form.Control
                            type="text"
                            placeholder="Coloque sua idade"
                            value={idade}
                            onChange={(e) => setIdade(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <div className="d-flex align-items-center">
                            <BsLockFill style={{ marginRight: '10px' }} />
                            <Form.Label className="m-0">Curso</Form.Label>
                        </div>
                        <Form.Control
                            type="text"
                            placeholder="Coloque seu curso"
                            value={curso}
                            onChange={(e) => setCurso(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        CADASTRAR
                    </Button>
                </Form>
            </div>
        </Container>
    );
}

export default Cadastro;