export const ex1 = (resultado = "", respondido = false) => {

    if (respondido) {
        return `
            <h2>Exercício 1</h2>
            <p>Quanto é 2 + 2?</p>
            <p>${resultado}</p>
        `
    }

    return `
        <h2>Exercício 1</h2>
        <p>Quanto é 2 + 2?</p>

        <form method="POST" action="/">
            <input type="hidden" name="exercicio" value="1">

            <input type="radio" name="resp1" value="3"> 3 <br>
            <input type="radio" name="resp1" value="4"> 4 <br>
            <input type="radio" name="resp1" value="5"> 5 <br><br>

            <button type="submit">Verificar</button>
        </form>

        <p>${resultado}</p>
    `
}