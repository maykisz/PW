export const ex5 = (resultado = "", respondido = false) => {
    if (respondido) {
        return `
            <h2>Exercício 5</h2>
            <p>Quanto é 8 + 6?</p>
            <p>${resultado}</p>
        `
    }

return `
    <h2>Exercício 5</h2>
        <p>Quanto é 8 + 6?</p>  

        <form method="POST" action="/">
            <input type="hidden" name="exercicio" value="5">

            <input type="radio" name="resp5" value="12"> 12 <br>
            <input type="radio" name="resp5" value="14"> 14 <br>
            <input type="radio" name="resp5" value="10"> 10 <br><br>

            <button type="submit">Verificar</button>
        </form>

        <p>${resultado}</p>
`
}