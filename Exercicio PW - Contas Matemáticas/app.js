import express from 'express'
import exerciciosRouter from './exercicio/index.js'

const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended: true }))
app.use('/', exerciciosRouter)

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT} 🚀`)
})