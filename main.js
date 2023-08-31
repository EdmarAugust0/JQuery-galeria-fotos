$(document).ready(function() {

    $('header button').click(function() {
        // slideDown para fazer o form descer bnitinho ao clicar no botão
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function() {
        // slideUp para fazer o form subir de volta
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()

        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem)
        $(`
            <div class="imagem-link">
                <a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank">Ver imagem em tamanho real</a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        // fadeIn é para fazer o intem surgir e o 1000 é 1seg, para isso precisamos deixar o display none lá encima
        $(novoItem).fadeIn(1000)
        $('#endereco-imagem-nova').val('')
    })
})