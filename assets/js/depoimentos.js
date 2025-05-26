// Array com os depoimentos (foto, texto e nome)
const depoimentos = [
    {
        foto: "assets/image/feedback01.jpg",
        texto: '"A equipe superou todas as expectativas. Trabalho de alta qualidade e atenção aos detalhes."',
        nome: "Paola Fernandes"
    },
    {
        foto: "assets/image/feedback02.jpg",
        texto: '"Profissionais incríveis, entregaram tudo no prazo e com muita qualidade!"',
        nome: "Carlos Silva"
    },
    {
        foto: "assets/image/feedback03.jpg",
        texto: '"Recomendo demais! Atendimento excelente e resultado surpreendente."',
        nome: "Juliana Souza"
    }
];

let indiceAtual = 0; // Índice do depoimento atualmente exibido
let intervalo;       // Referência do intervalo do carrossel automático

// Função para exibir um depoimento pelo índice
function mostrarDepoimento(indice) {
    const depoimento = depoimentos[indice];
    // Corrigir caminho relativo para garantir que funcione em qualquer ambiente
    let fotoPath = depoimento.foto;
    if (!fotoPath.startsWith('assets/')) {
        fotoPath = 'assets/image/' + fotoPath.replace(/^.*[\\\/]/, '');
    }
    document.getElementById("depoimento-cliente").innerHTML = `
        <div class="depoimentos__foto" style="background-image: url('${fotoPath}')"></div>
        <div class="depoimentos__box">
            <p class="depoimentos__texto">${depoimento.texto}</p>
            <h3 class="depoimentos__nome">${depoimento.nome}</h3>
        </div>
    `;
}

// Função para avançar para o próximo depoimento
function proximoDepoimento() {
    indiceAtual = (indiceAtual + 1) % depoimentos.length;
    mostrarDepoimento(indiceAtual);
}

// Função para voltar para o depoimento anterior
function voltarDepoimento() {
    indiceAtual = (indiceAtual - 1 + depoimentos.length) % depoimentos.length;
    mostrarDepoimento(indiceAtual);
}

// Inicia o carrossel automático, trocando depoimento a cada 5 segundos
function iniciarCarrossel() {
    intervalo = setInterval(proximoDepoimento, 5000);
}

// Pausa o carrossel automático
function pausarCarrossel() {
    clearInterval(intervalo);
}

// Evento do botão "próximo": avança, pausa e reinicia o carrossel
document.getElementById("proximo").addEventListener("click", () => {
    proximoDepoimento();
    pausarCarrossel();
    iniciarCarrossel();
});

// Evento do botão "voltar": retrocede, pausa e reinicia o carrossel
document.getElementById("voltar").addEventListener("click", () => {
    voltarDepoimento();
    pausarCarrossel();
    iniciarCarrossel();
});

// Inicializa exibindo o primeiro depoimento e inicia o carrossel automático
mostrarDepoimento(indiceAtual);
iniciarCarrossel();