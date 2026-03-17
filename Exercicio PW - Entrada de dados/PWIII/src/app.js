import express from 'express';

const app = express();
const PORT = 3000;

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());
// Middleware para interpretar dados URL-encoded (formulários)
app.use(express.urlencoded({ extended: true }));



// Exercícios básicos
const listaBasica = [
    { questao: 1, descricao: '8 ^ 2', resposta: '64', resolucao: '8 * 8 = 64' },
    { questao: 2, descricao: '150 ^ 0', resposta: '1', resolucao: 'Qualquer número elevado a 0 é igual a 1' },
    { questao: 3, descricao: '1,9 ^ 2', resposta: '3,61', resolucao: '1,9 * 1,9 = 3,61' },
    { questao: 4, descricao: '20 ^ -1', resposta: '0,05', resolucao: '1 / 20 = 0,05 (inverter a base pelo expoente negativo)' },
    { questao: 5, descricao: '2 ^ -6', resposta: '0,015625', resolucao: '1 / (2^6) = 1 / 64 = 0,015625' },
    { questao: 6, descricao: '-3 ^ 2', resposta: '9', resolucao: '(-3) * (-3) = 9' },
    { questao: 7, descricao: '-10 ^ 6', resposta: '-1.000.000', resolucao: 'O sinal negativo está fora da potência: -(10^6) = -1.000.000' },
    { questao: 8, descricao: '(-10) ^ 6', resposta: '1.000.000', resolucao: '(-10) * (-10) * (-10) * (-10) * (-10) * (-10) = 1.000.000' },
    { questao: 9, descricao: '(-3) ^ 4', resposta: '81', resolucao: '(-3) * (-3) * (-3) * (-3) = 81' },
    { questao: 10, descricao: '1,7 ^ 2', resposta: '2,89', resolucao: '1,7 * 1,7 = 2,89' }
];

// Exercícios de nível vestibular
const listaVestibular = [
    { questao: '11-FGV', descricao: '(3^2 · 9^3) / 27^4', resposta: '1/81', resolucao: 'Transforme tudo na base 3: 3², 9³ = (3²)³ = 3^6, 27^4 = (3³)^4 = 3^12. Divida: 3^(2+6-12) = 3^-4 = 1/81' },
    { questao: '12-MACKENZIE', descricao: '(2^25 + 2^25) / 2^24', resposta: '4', resolucao: '2^25 + 2^25 = 2*2^25 = 2^26. Dividindo por 2^24: 2^26 / 2^24 = 2^(26-24) = 2^2 = 4' },
    { questao: '13-FUvest', descricao: 'Metade de 2^100', resposta: '2^99', resolucao: 'Dividir por 2 equivale a 2^100 / 2^1 = 2^(100-1) = 2^99' },
    { questao: '14-PUC', descricao: '(0,5)^-2 + (1/3)^-1', resposta: '7', resolucao: '(0,5)^-2 = (1/2)^-2 = 2^2 = 4; (1/3)^-1 = 3; 4 + 3 = 7' },
    { questao: '15-ITA', descricao: 'Qual é maior: 2^300 ou 3^200?', resposta: '3^200', resolucao: '2^300 = (2^3)^100 = 8^100; 3^200 = (3^2)^100 = 9^100. Logo, 9^100 > 8^100, então 3^200 é maior' }
];



function buscarPorQuestaoBasica(questao) {
    return listaBasica.filter(exercicio => exercicio.questao == questao);
}


function buscarPorQuestaoVestibular(questao) {
    return listaVestibular.filter(exercicio => exercicio.questao.toString().includes(questao));
}

// Rota raiz: retorna todas as listas
app.get('/', (req, res) => {
    res.json({ listaBasica, listaVestibular });
});


app.get('/exerc/params/basica/:questao', (req, res) => {
    res.json(buscarPorQuestaoBasica(req.params.questao));
});

app.get('/exerc/params/vestibular/:questao', (req, res) => {
    res.json(buscarPorQuestaoVestibular(req.params.questao));
});


app.get('/exerc/query/basica', (req, res) => {
    const { questao } = req.query;
    res.json(buscarPorQuestaoBasica(questao));
});

app.get('/exerc/query/vestibular', (req, res) => {
    const { questao } = req.query;
    res.json(buscarPorQuestaoVestibular(questao));
});


app.post('/exerc/body/basica', (req, res) => {
    const { questao } = req.body;
    res.json(buscarPorQuestaoBasica(questao));
});

app.post('/exerc/body/vestibular', (req, res) => {
    const { questao } = req.body;
    res.json(buscarPorQuestaoVestibular(questao));
});

// Exemplo de exercício individual
app.get('/exerc/:id', (req, res) => {
    const id = req.params.id;
    let exercicio = [...listaBasica, ...listaVestibular].find(e => e.questao.toString() === id);
    if (exercicio) {
        res.json(exercicio);
    } else {
        res.status(404).json({ mensagem: 'Exercício não encontrado' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});