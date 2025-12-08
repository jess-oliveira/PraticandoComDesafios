// Recuperar o botão de comprar.
function comprar(){
// Receber o TIPO e a QTDE
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = Number(document.getElementById('qtd').value);

    // Subtrair o valor inserido de quantidade disponível

    // para subtrair, primeiro precisa recuperar o valor:
    let qtdDisponivel = Number(document.getElementById(`qtd-${tipoIngresso}`).innerText);
    
    // antes de subtrair, precisa verificar se a quantidade esta disponível:
    if (quantidade > qtdDisponivel){
        alert ('Quantidade não disponível.');
    } else {
        // subtrai valores
        let novaQtd = qtdDisponivel - quantidade;
        // atualiza a qtde disponivel e zera campo qtde
        document.getElementById(`qtd-${tipoIngresso}`).innerText = novaQtd;
        document.getElementById('qtd').value = '';
        alert ('Compra realizada com suceso!')
    }

}

