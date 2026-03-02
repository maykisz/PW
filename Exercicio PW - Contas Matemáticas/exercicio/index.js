import express from 'express'
import { ex1 } from './ex1.js'
import { ex2 } from './ex2.js'
import { ex3 } from './ex3.js'

const router = express.Router()

// estado simples (para aprendizado)
let estado = {
    resultado1: "",
    respondido1: false,
    resultado2: "",
    respondido2: false,
    resultado3: "",
    respondido3: false
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

    if (req.body.exercicio === "3") {
        
        const resposta = req.body.resp3
        estado.respondido3 = true

        if (!resposta) {
            estado.resultado3 = "Escolha uma alternativa."
            estado.respondido3 = false
        }
        else if (resposta === "9") {
            estado.resultado3 = "Correto."
        }
        else {
            estado.resultado3 = "Errado."
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
            <hr>
            ${ex3(estado.resultado3, estado.respondido3)}
            <hr>
        </body>
        </html>
    `
}

export default router