let livros = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivros()

async function getBuscarLivros() {
    const res = await fetch(endpointAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivros(livrosComDesconto)
}