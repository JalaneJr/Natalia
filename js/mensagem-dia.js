function mostrarMensagemDia() {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => secao.classList.remove('conteudo-visivel'));

    // Encontra a seção "mensagem-dia" e a exibe
    const secaoMensagem = document.getElementById('mensagem-dia');
    if (secaoMensagem) {
        secaoMensagem.classList.add('conteudo-visivel');
        secaoMensagem.style.display = 'block';
    } else {
        console.error('Seção "Mensagem do Dia" não encontrada.');
    }

}

