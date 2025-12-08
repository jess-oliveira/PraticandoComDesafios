// Criar lista para receber participantes.
let participantes = []

// Ativar botão adicionar para incluir participante na lista.
function adicionar () {
    let amigo = document.getElementById('nome-amigo').value;
    participantes.push(amigo);
    
    let inclusos = document.getElementById('lista-amigos')
    inclusos.innerHTML = (participantes.join(', '))
    
    document.getElementById('nome-amigo').value = ''
}
// Ativar botão sortear 
// Embaralhar a lista
// Combinar pares sem repetir
// zerar