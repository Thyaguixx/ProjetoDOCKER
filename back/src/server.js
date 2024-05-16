import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const dataList = []

app.get('/GETUsuarios', (req, res) => {
    // const listaSessao = localStorage.getItem('dataList')
    res.send({ Sucesso: true, ListaUsuarios: dataList });
    // if (listaSessao) {
    //     console.log(listaSessao);
    //     res.send({ Sucesso: true, ListaUsuarios: listaSessao });
    // }
    // const usuarios = [{
    //     UsuarioID: 1,
    //     UsuarioLogin: "Teste1"
    // },
    // {
    //     UsuarioID: 2,
    //     UsuarioLogin: "Teste2"
    // },
    // {
    //     UsuarioID: 3,
    //     UsuarioLogin: "Teste3"
    // },
    // {
    //     UsuarioID: 4,
    //     UsuarioLogin: "Teste4"
    // },]

    // console.log('Usuários buscados com sucesso!');
    // res.send({ Sucesso: true, usuarios: usuarios });

});

app.post('/SETUsuarios', (req, res) => {
    const { dados } = req.body
    dataList.push(dados)

    console.log('Usuário cadastrado com sucesso!');
    console.log(dataList)
    res.send({ Sucesso: true, msg: 'Usuário cadastrado com sucesso!', Lista: dataList });

});

app.listen(3001, () => {
    console.log("Servidor rodando!")
})
