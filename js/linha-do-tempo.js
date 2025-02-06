let eventoAtual = 0; // Inicia no primeiro evento (index 0)
const eventos = [
    { descricao: "Primeira lembrança...", imagem: "" },
    { descricao: "Outra lembrança marcante", imagem: "" },
    { descricao: "Evento memorável", imagem: "" },
    { descricao: "Grande Acontecimento", imagem: "" },
    { descricao: "Grande evento", imagem: "" },
    { descricao: "Mais um grande momento...", imagem: "" },
    { descricao: "Início de algo novo", imagem: "" },
    { descricao: "Recordação", imagem: "" },
    { descricao: "Ano de mudanças", imagem: "" },
    { descricao: "Evento de 2009", imagem: "" },
    { descricao: "Novo marco", imagem: "" },
    { descricao: "Lembrança", imagem: "" },
    { descricao: "Acontecimentos", imagem: "" },
    { descricao: "Momentos", imagem: "" },
    { descricao: "Recordações", imagem: "" },
    { descricao: "Evento final com uma surpresa!", imagem: "img/n.png", video: "video/Natalia.mp4" }
];


// Função para exibir a linha do tempo
function mostrarLinhaDoTempo() {
    ocultarTodasAsSecoes();

    const linhaDoTempoWrapper = document.getElementById('linha-do-tempo-wrapper');
    if (linhaDoTempoWrapper) {
        linhaDoTempoWrapper.classList.add('conteudo-visivel');

        // Limpa o conteúdo da seção para evitar duplicações
        linhaDoTempoWrapper.innerHTML = ''; // Limpa apenas o conteúdo

        // Adiciona o título
        const titulo = document.createElement('h2');
        titulo.textContent = 'Linha do Tempo';
        linhaDoTempoWrapper.appendChild(titulo);

        // Adiciona o botão "Fechar"
        const botaoFechar = document.createElement('button');
        botaoFechar.className = 'btn-fechar';
        botaoFechar.textContent = 'Fechar';
        botaoFechar.onclick = fecharLinhaDoTempo; // Registra o evento de fechar
        linhaDoTempoWrapper.appendChild(botaoFechar);

        // Adiciona o botão "Próximo Evento" apenas na Linha do Tempo
        const botaoProximo = document.createElement('button');
        botaoProximo.id = 'botao-proximo';
        botaoProximo.textContent = 'Próximo Evento';
        botaoProximo.onclick = proximoEvento; // Registra o evento do botão "Próximo"
        linhaDoTempoWrapper.appendChild(botaoProximo);

        // Gera os eventos da linha do tempo
        eventos.forEach((evento, index) => {
            const eventoDiv = document.createElement('div');
            eventoDiv.classList.add('linha-do-tempo-evento');
            eventoDiv.id = `evento-${index + 1}`;
            eventoDiv.style.display = 'none'; // Inicialmente oculta os eventos

            eventoDiv.innerHTML = `
                <div class="evento-imagem">
                    <img src="${evento.imagem}" alt="Evento ${index + 1}">
                </div>
                <div class="evento-descricao">
                    <p class="data">${evento.data || ''}</p>
                    <p class="descricao">${evento.descricao}</p>
                    <button onclick="exibirDetalhes(${index})">Ver Detalhes</button>
                </div>
                
            `;
            linhaDoTempoWrapper.appendChild(eventoDiv);
        });

        // Torna o primeiro evento visível
        mostrarEvento(0); // Exibe o primeiro evento
    } else {
        console.error('Seção "Linha do Tempo" não encontrada.');
    }
}

// Função para fechar a seção de Linha do Tempo
function fecharLinhaDoTempo() {
    const linhaDoTempoWrapper = document.getElementById('linha-do-tempo-wrapper');
    if (linhaDoTempoWrapper) {
        linhaDoTempoWrapper.classList.remove('conteudo-visivel');
        linhaDoTempoWrapper.innerHTML = ''; // Limpa o conteúdo ao fechar
    }

    // Remove o botão "Próximo Evento" ao fechar a linha do tempo
    const botaoProximo = document.getElementById('botao-proximo');
    if (botaoProximo) {
        botaoProximo.style.display = 'none';
    }
}

// Função para mostrar um evento específico
function mostrarEvento(indice) {
    // Esconde o evento anterior
    const eventoAnterior = document.getElementById(`evento-${eventoAtual + 1}`);
    if (eventoAnterior) {
        eventoAnterior.style.display = 'none'; // Oculta o evento anterior
    }

    // Exibe o evento atual
    const evento = document.getElementById(`evento-${indice + 1}`);
    if (evento) {
        evento.style.display = 'flex'; // Torna o evento visível
        evento.classList.add('aberto');
    }

    // Esconde o botão "Próximo" e o conteúdo abaixo do evento 22
    if (indice === 15) { // Evento 22 (index 21)
        document.getElementById("botao-proximo").style.display = 'none'; // Esconde o botão "Próximo"
        document.getElementById("conteudo-abaixo").style.display = 'none'; // Oculta o conteúdo abaixo
    } else {
        document.getElementById("botao-proximo").style.display = 'block'; // Exibe o botão "Próximo"
        document.getElementById("conteudo-abaixo").style.display = 'block'; // Exibe o conteúdo abaixo
    }
}

// Função para mostrar o modal com os detalhes do evento
function exibirDetalhes(indice) {
    eventoAtual = indice; // Atualiza o evento atual
    const evento = eventos[indice];
    const modal = document.getElementById("modal-evento");
    
    // Preenche o modal com os detalhes do evento
    document.getElementById("modal-data").innerText = `Data: ${evento.data}`;
    document.getElementById("modal-descricao").innerText = evento.descricao;
    document.getElementById("modal-imagem").src = evento.imagem;  // Carrega a imagem
    
    // Verifica se o evento tem um vídeo associado e exibe-o
    const modalVideo = document.getElementById("modal-video");
    const videoPlayer = document.getElementById("video-player");
    
    if (evento.video) {
        modalVideo.style.display = "block"; // Exibe o vídeo
        videoPlayer.src = evento.video; // Define a fonte do vídeo
        videoPlayer.play(); // Inicia a reprodução do vídeo
    } else {
        modalVideo.style.display = "none"; // Esconde o vídeo se não houver
    }

    // Exibe o modal
    modal.style.display = "block";
}
// Função para esconder o botão "Próximo" de todas as seções
function esconderBotaoProximo() {
    const botaoProximo = document.getElementById('botao-proximo');
    if (botaoProximo) {
        botaoProximo.style.display = 'none';
    }
}

// Função para mostrar o botão "Próximo" quando a seção Linha do Tempo estiver visível
function mostrarBotaoProximo() {
    const botaoProximo = document.getElementById('botao-proximo');
    if (botaoProximo) {
        botaoProximo.style.display = 'block';
    }
}
// Função para exibir o modal com o vídeo
function exibirVideo(urlDoVideo) {
    const modalVideo = document.getElementById("modal-video");
    const videoPlayer = document.getElementById("video-player");
    const videoSource = document.getElementById("video-source");

    // Define a URL do vídeo
    videoSource.src = urlDoVideo;

    // Atualiza o src do vídeo para garantir que ele seja carregado corretamente
    videoPlayer.load();

    // Exibe o modal
    modalVideo.style.display = "block";

    // Reproduz o vídeo automaticamente
    videoPlayer.play();
}

// Função para fechar o modal e parar o vídeo
function fecharModal() {
    const modalVideo = document.getElementById("modal-video");
    const videoPlayer = document.getElementById("video-player");

    // Pausa o vídeo
    videoPlayer.pause();

    // Reseta o tempo do vídeo para 0
    videoPlayer.currentTime = 0;

    // Esconde o modal
    modalVideo.style.display = "none";
}
// Função para fechar o modal
function fecharEvento() {
    const modal = document.getElementById("modal-evento");
    modal.style.display = "none";
}

// Função para avançar para o próximo evento no modal
function proximoEventoModal() {
    if (eventoAtual < eventos.length - 1) {
        eventoAtual++;
        exibirDetalhes(eventoAtual);
    }
}

// Função para voltar para o evento anterior no modal
function eventoAnteriorModal() {
    if (eventoAtual > 0) {
        eventoAtual--;
        exibirDetalhes(eventoAtual);
    }
}

// Função para atualizar os botões "Próximo" e "Anterior"
function atualizarBotoesModal() {
    const botaoProximo = document.getElementById("botao-proximo-modal");
    const botaoAnterior = document.getElementById("botao-anterior-modal");

    // Mostra ou esconde os botões com base no evento atual
    if (eventoAtual === 0) {
        botaoAnterior.style.display = "none";
    } else {
        botaoAnterior.style.display = "inline-block";
    }

    if (eventoAtual === eventos.length - 1) {
        botaoProximo.style.display = "none";
    } else {
        botaoProximo.style.display = "inline-block";
    }
}

// Função para avançar para o próximo evento na linha do tempo
function proximoEvento() {
    if (eventoAtual < eventos.length - 1) {
        eventoAtual++;
        mostrarEvento(eventoAtual);
    }
}

// Função para voltar para o evento anterior na linha do tempo
function eventoAnterior() {
    if (eventoAtual > 0) {
        eventoAtual--;
        mostrarEvento(eventoAtual);
    }
}



// Adiciona o evento de clique no botão de fechar do vídeo
document.getElementById("fechar-video").addEventListener("click", fecharModal);

// Chama a função para exibir a linha do tempo assim que o DOM estiver pronto
document.addEventListener("DOMContentLoaded", mostrarLinhaDoTempo);