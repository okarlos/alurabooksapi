const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {

    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarLivrosDisponiveis() : filtrarPorCategoria(categoria)
    exibirLivros(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calculaTotalLivros(livrosFiltrados)
        exibirTotalLivros(valorTotal)
    }
}

function exibirTotalLivros(valorTotal) {
    return elementoTotalLivros.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal.toFixed(2).toString().replace(".", ",")}</span></p>
    </div>
    `
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarLivrosDisponiveis() {
    return livros.filter(livro => livro.quantidade > 0)
}

