import express from 'express'
import { ex1 } from './ex1.js'
import { ex2 } from './ex2.js'
import { ex3 } from './ex3.js'
import { ex4 } from './ex4.js'
import { ex5 } from './ex5.js'

const router = express.Router()

// estado simples (para aprendizado)
let estado = {
    resultado1: "",
    respondido1: false,
    resultado2: "",
    respondido2: false,
    resultado3: "",
    respondido3: false,
    resultado4: "",
    respondido4: false,
    resultado5: "",
    respondido5: false
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

    if (req.body.exercicio === "4") {
        
        const resposta = req.body.resp4
        estado.respondido4 = true

        if (!resposta) {
            estado.resultado4 = "Escolha uma alternativa."
            estado.respondido4 = false
        }
        else if (resposta === "12") {
            estado.resultado4 = "Correto."
        } 
        else {
            estado.resultado4 = "Errado."
        }
    }

    if (req.body.exercicio === "5") {
        
        const resposta = req.body.resp5
        estado.respondido5 = true

        if (!resposta) {
            estado.resultado5 = "Escolha uma alternativa."
            estado.respondido5 = false
        } 
        else if (resposta === "14") {
            estado.resultado5 = "Correto."
        } 
        else {
            estado.resultado5 = "Errado."
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
            ${ex4(estado.resultado4, estado.respondido4)}
            <hr>
            ${ex5(estado.resultado5, estado.respondido5)}
        </body>
        </html>
    `
}

export default router