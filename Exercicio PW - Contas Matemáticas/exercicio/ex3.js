export const ex3 = (resultado = "", respondido = false) => {

    if (respondido) {
        return `
            <h2>Exercício 3</h2>
            <p>Quanto é 27 / 3?</p>
            <p>${resultado}</p>
        `
    }

return `
    <h2>Exercício 3</h2>
        <p>Quanto é 27 / 3?</p>

        <form method="POST" action="/">
            <input type="hidden" name="exercicio" value="3">

            <input type="radio" name="resp3" value="12"> 12 <br>
            <input type="radio" name="resp3" value="7"> 7 <br>
            <input type="radio" name="resp3" value="9"> 9 <br><br>

            <button type="submit">Verificar</button>
        </form>

        <p>${resultado}</p>
`
}