// Criar lista para receber participantes.
let participantes = [];

// Ativar botão adicionar para incluir participante na lista.
function adicionar() {
    // Pego o valor digitado no campo de input com id 'nome-amigo'.
    let amigo = document.getElementById('nome-amigo').value;
    // Variavel que ira receber o amigo e transformar tudo em minuscula
    let verificarNome = amigo.toLowerCase();  // Correção do nome da variável

    // Se o campo estiver vazio (falsy), aviso o usuário e interrompo a função.
    if (!amigo) {
        alert('Insira um nome válido!');
        return; // interrompe a execução da função, nada mais acontece
    }

    // Se o nome já está na lista de participantes, aviso e interrompo.
    if (participantes.some(n => n.toLowerCase() === verificarNome)) {  // Corrigido nome da variável
        alert ('Nome já existente na lista!');
        return;
    }

    // Se tudo ok, adiciono o nome ao array participantes.
    participantes.push(amigo);

    atualizarLista();  // Atualiza a lista visível

    // Limpa o campo de input para quem for digitar o próximo nome.
    document.getElementById('nome-amigo').value = '';
}

// Função para atualizar a lista visível na tela
function atualizarLista() {
    let inclusos = document.getElementById('lista-amigos');

    inclusos.innerHTML = participantes
        .map((nome, indice) =>
            `<span onclick="remover(${indice})" style="cursor:pointer">${nome}</span>`
        )
        .join(', ');
}

// Função para remover um participante pelo índice (quando clicar no nome)
function remover(index) {
    // index é a posição do participante no array 'participantes' (0, 1, 2...)
    // removemos 1 elemento a partir desse índice usando splice
    participantes.splice(index, 1); // altera o array original removendo o elemento

    // Depois de remover, precisamos re-renderizar a lista na tela (mesma lógica do adicionar)
    let inclusos = document.getElementById('lista-amigos');
    inclusos.innerHTML = participantes
        .map((nome, indice) => 
            `<span onclick="remover(${indice})" style="cursor:pointer">${nome}</span>`
        )
        .join(', ');

    atualizarLista();
}

// Função para embaralhar os participantes
function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // i + 1 porque o valor máximo de "i" é inclusivo.
        [lista[i], lista[j]] = [lista[j], lista[i]];  // Troca os elementos entre as posições "i" e "j".
    }
    return lista;
}

// Função para criar pares de amigo secreto
function criarPares(listaEmbaralhada) {
    const pares = [];
    const totalParticipantes = listaEmbaralhada.length;

    for (let i = 0; i < totalParticipantes; i++) {
        if (i === totalParticipantes - 1) {
            // O último participante sorteia o primeiro
            pares.push([listaEmbaralhada[i], listaEmbaralhada[0]]);
        } else {
            pares.push([listaEmbaralhada[i], listaEmbaralhada[i + 1]]);
        }
    }

    return pares;
}

// Ativar botão sortear para dividir participantes em pares
function sortear() {
    if (participantes.length < 4) {
        alert('Adicione pelo menos quatro participantes!');
        return;
    }

    // Embaralha a lista de participantes
    let listaEmbaralhada = embaralhar([...participantes]);

    // Cria os pares
    let pares = criarPares(listaEmbaralhada);

    // Exibe os pares na tela
    let resultado = document.getElementById('lista-sorteio');
    resultado.innerHTML = pares.map(par => {
        return `${par[0]} sorteou ${par[1]}`;
    }).join('<br>');

    // Limpa a visualização do elemento que lista os nomes para a tela
    document.getElementById('lista-amigos').innerHTML = '';
}

// Reinicia o sistema (limpa participantes e resultado)
function reiniciar() {
    participantes = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
}
