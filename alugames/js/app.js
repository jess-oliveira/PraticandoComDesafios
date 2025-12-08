let jogosAlugados = 1;

function alterarStatus(id) {
    // A função recebe como parâmetro a variával 'id', que é o identificador único de cada jogo que no htm é o 1 2 3.
    // Imagine que cada jogo tem uma "identidade", e os parametros passados pra 'id' nos ajuda a encontrar esse jogo na página.
    
    let gameClicado = document.getElementById(`game-${id}`); 
    // A primeira coisa que fazemos é procurar o jogo clicado na página acessando o htm através do metodo document.getElementById
    // que seleciona o elemento através do seu id que vai ser chamado para cada função dependendo do jogo clicado.
    
    let imagem = gameClicado.querySelector('.dashboard__item__img'); 
    // Dentro do jogo clicado que encontramos acima com gameClicado, procuramos a imagem que representa o jogo.
    // A classe '.dashboard__item__img' é o que nos permite acessar a imagem específica.

    let botao = gameClicado.querySelector('.dashboard__item__button');
    // Também pegamos o botão que está associado a esse jogo.
    // Esse botão pode ser "Alugar" ou "Devolver", dependendo do status do jogo.
    

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Agora, usamos o método classList.contains para verificar se a imagem já tem a classe 'dashboard__item__img--rented'.
        // Essa classe indica que o jogo está alugado. Assim o botao sera para "devolver"

        let resposta = prompt('Deseja devolver o jogo? Responda s para SIM ou n para NÃO');
        // se a pessoa clicar para devolver, será perguntado se ela tem certeza e a variável resposta vai guardar o valor passado pelo usuário.

        if (resposta && (resposta.toLowerCase() === 's')) {
            // Então se a resposta for 's' ou 'S', prossegue com a devolução do jogo.
            
            imagem.classList.remove('dashboard__item__img--rented');
            // ira usar remove para remover a imagem de devolver referente a dashboard__item__img--rented
            botao.classList.remove('dashboard__item__button--return');
            // irá remover tambem o botão devolver 
            botao.textContent = 'Alugar';
            // e agora o botao recebe o texto alugar

            jogosAlugados--;
            console.log(`Jogos alugados: ${jogosAlugados}`);

        } else {
            // Se a resposta não for 's', retorna o alert , mas não muda nada.
            alert('O jogo não foi devolvido.');
        }

    } else {
        // Se o jogo NÃO tem a classe 'dashboard__item__img--rented', significa que ele ainda não foi alugado.

        imagem.classList.add('dashboard__item__img--rented');
        // Agora, adicionamos a classe 'dashboard__item__img--rented' à imagem, para indicar que o jogo está alugado.
        // A imagem vai ficar "escurecida" ou alterada, para mostrar que o jogo não está mais disponível.

        botao.classList.add('dashboard__item__button--return');
        // Adicionamos a classe ao botão que faz ele ter o visual de "Devolver", indicando que o jogo foi alugado e agora precisa ser devolvido.

        botao.textContent = 'Devolver';
        // Por fim, mudamos o texto do botão para 'Devolver', pois agora o jogo está alugado e o botão serve para devolver.

        jogosAlugados++;
        console.log(`Jogos alugados: ${jogosAlugados}`);
    }
}
