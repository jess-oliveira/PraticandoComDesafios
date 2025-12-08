// carrinho é a lista que guarda os itens (cada item é um objeto { nomeProduto, valorProduto, quantidade })
let carrinho = [];

function adicionar() {
    // pega a string que o usuário selecionou no <select> ou input (ex: "Nome do produto - R$ 100")
    let produto = document.getElementById('produto').value;

    // split separa a string onde tem '-' e pega a primeira parte [0] -> "Nome do produto"
    // trim remove espaços extras no começo/fim (se o usuário ou o HTML tiver um espaço sobrando)
    let nomeProduto = produto.split('-')[0].trim();

    // split com 'R$' pega a parte depois do 'R$' (ex: " 100"), Number transforma em número
    // trim aqui também é uma boa prática antes do Number, caso tenha espaço: produto.split('R$')[1].trim()
    let valorProduto = Number(produto.split('R$')[1]);

    // pega o input de quantidade e converte para número
    let quantidadeInput = document.getElementById('quantidade');
    let quantidade = Number(quantidadeInput.value);

    // validação simples: se quantidade for falsy (0, NaN, '', undefined), mostra alerta e para
    if (!quantidade) {
        alert('Insira uma quantidade válida!');
        return; // interrompe a execução da função, nada mais acontece
    }

    // procura no carrinho se já existe um item com esse nome
    // se existir, item será o objeto encontrado; se não existir, item será undefined
    let item = carrinho.find(i => i.nomeProduto === nomeProduto);

    if (item) {
        // se já existe o produto no carrinho, somamos a quantidade nova à quantidade existente
        item.quantidade += quantidade;
    } else {
        // se não existe, criamos um novo objeto e empurramos para o array carrinho
        carrinho.push({
            nomeProduto,
            valorProduto,
            quantidade
        });
    }

    // atualiza a parte visual do carrinho (função que renderiza o conteúdo)
    atualizarCarrinhoHTML();
}
