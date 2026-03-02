import express from 'express'
import { ex1 } from './ex1.js'
import { ex2 } from './ex2.js'

const router = express.Router()

// estado simples (para aprendizado)
let estado = {
    resultado1: "",
    respondido1: false,
    resultado2: "",
    respondido2: false
}

router.get('/', (req, res) => {
    res.send(pagina())
})

router.post('/', (req, res) => {

    if (req.body.exercicio === "1") {

        const resposta = req.body.resp1
        estado.respondido1 = true

        if (!resposta) {
            estado.resultado1 = "Escolha uma alternativa."
            estado.respondido1 = false
        } 
        else if (resposta === "4") {
            estado.resultado1 = "Correto."
        } 
        else {
            estado.resultado1 = "Errado."
        }
    }

    if (req.body.exercicio === "2") {

        const resposta = req.body.resp2
        estado.respondido2 = true

        if (!resposta) {
            estado.resultado2 = "Escolha uma alternativa."
            estado.respondido2 = false
        } 
        else if (resposta === "15") {
            estado.resultado2 = "Correto."
        } 
        else {
            estado.resultado2 = "Errado."
        }
    }

    res.send(pagina())
})

function pagina() {
    return `
        <html>
        <body>
            ${ex1(estado.resultado1, estado.respondido1)}
            <hr>
            ${ex2(estado.resultado2, estado.respondido2)}
        </body>
        </html>
    `
}

export default router