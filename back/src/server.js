import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const dataList = []

app.get('/GETUsuarios', (req, res) => {
    res.send({ Sucesso: true, ListaUsuarios: dataList });
});

app.post('/SETUsuarios', (req, res) => {
    const { dados } = req.body
    dataList.push(dados)

    // console.log('Usuário cadastrado com sucesso!');
    // console.log(dataList)
    res.send({ Sucesso: true, msg: 'Usuário cadastrado com sucesso!', Lista: dataList });

});

app.listen(3001, () => {
    // console.log("Servidor rodando!")
})
