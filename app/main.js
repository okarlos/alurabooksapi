let livros = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const elementoLivros = document.getElementById('livros')

getBuscarLivros()

async function getBuscarLivros() {
    const res = await fetch(endpointAPI)
    livros = await res.json()
    console.table(livros)
    exibirLivros(livros)
}

function exibirLivros (listaDeLivros) {
    listaDeLivros.forEach(livro => {
        elementoLivros.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">${livro.preco}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    });
}