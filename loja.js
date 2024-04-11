// Variáveis globais para armazenar a quantidade total e o valor total da compra
let quantidadeTotal = 0;
let valorTotal = 0;

document.addEventListener('DOMContentLoaded', function() {
    // Obtém todos os botões de compra e adiciona um ouvinte de evento a cada um
    document.querySelectorAll('.comprar-btn').forEach(function(botao) {
        botao.addEventListener('click', function() {
            let preco = parseFloat(this.getAttribute('data-preco'));
            let nomeLivro = this.getAttribute('data-nome');
            let inputId = this.getAttribute('data-input');
            comprarLivro(preco, nomeLivro, inputId);
        });
    });

    // Adiciona um ouvinte de evento para o botão de limpar histórico
    document.getElementById('limparHistorico').addEventListener('click', function() {
        limparHistorico();
    });
});

function comprarLivro(preco, nomeLivro, inputId) {
    let quantidade = parseInt(document.getElementById(inputId).value);
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida.");
    } else {
        quantidadeTotal += quantidade; // Adiciona a quantidade atual à quantidade total
        valorTotal += preco * quantidade; // Calcula o valor total da compra

        alert("Compra realizada com sucesso!\n" + 
              "Livro: " + nomeLivro + "\n" +
              "Quantidade: " + quantidade + "\n" +
              "Total: R$" + (preco * quantidade).toFixed(2) + "\n" +
              "Quantidade total: " + quantidadeTotal + "\n" +
              "Valor total: R$" + valorTotal.toFixed(2));

        // Atualiza o resumo da compra
        atualizarResumo();

        // Limpa o campo de entrada após a compra
        document.getElementById(inputId).value = "";
    }
}

function atualizarResumo() {
    // Atualiza a quantidade total e o valor total no resumo da compra
    document.getElementById("quantidadeTotal").innerText = quantidadeTotal;
    document.getElementById("valorTotal").innerText = valorTotal.toFixed(2);
}

function limparHistorico() {
    // Reseta as variáveis de quantidadeTotal e valorTotal para zero
    quantidadeTotal = 0;
    valorTotal = 0;

    // Atualiza o resumo da compra para refletir as alterações
    atualizarResumo();
}