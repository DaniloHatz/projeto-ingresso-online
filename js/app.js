let quantidadeDisponivel;

function comprar() {
    let tipoIngresso = document.getElementById(`tipo-ingresso`).value;
    let quantidadeCompra = parseInt(document.getElementById(`qtd`).value);
    quantidadeDisponivel = parseInt(document.getElementById(`qtd-${tipoIngresso}`).textContent);

    if (quantidadeCompra <= 0 || isNaN(quantidadeCompra)) {
        alert(`Quantidade informada inválida. Verifique.`);
        return
    }

    if (quantidadeDisponivel < quantidadeCompra) {
        alert(`Quantidade de ingressos indisponível para ${tipoIngresso}. Você está tentando comprar ${quantidadeCompra} ingressos e a disponibilidade é de apenas ${quantidadeDisponivel} ingresso(s).`);
        return;
    } else {
        alert(`Compra realiada com sucesso!`);
        document.getElementById(`qtd-${tipoIngresso}`).textContent = quantidadeDisponivel - quantidadeCompra;
    }
}