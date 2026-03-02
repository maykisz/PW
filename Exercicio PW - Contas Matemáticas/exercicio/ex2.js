export const ex2 = (resultado = "", respondido = false) => {

    if (respondido) {
        return `
            <h2>Exercício 2</h2>
            <p>Quanto é 5 x 3?</p>
            <p>${resultado}</p>
        `
    }

    return `
        <h2>Exercício 2</h2>
        <p>Quanto é 5 x 3?</p>

        <form method="POST" action="/">
            <input type="hidden" name="exercicio" value="2">

            <input type="radio" name="resp2" value="10"> 10 <br>
            <input type="radio" name="resp2" value="15"> 15 <br>
            <input type="radio" name="resp2" value="20"> 20 <br><br>

            <button type="submit">Verificar</button>
        </form>

        <p>${resultado}</p>
    `
}