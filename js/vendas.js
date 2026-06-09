valorproduto = document.querySelector("#ValorProduto");
condicaopagamento = document.querySelector("#CondicaoPagamento");

valororiginal = document.querySelector("#ValorOriginal");
valorfinal = document.querySelector("#ValorFinal");
diferencavalor = document.querySelector("#DiferencaValor");

function CalcularVenda() {

    let valorprodutorecebido = Number(valorproduto.value);
    let condicaorecebida = condicaopagamento.value.toLowerCase();

    let valorcalculado;
    let diferenca;

    if (condicaorecebida === "a") {
        valorcalculado = valorprodutorecebido * 0.90;
    }
    else if (condicaorecebida === "b") {
        valorcalculado = valorprodutorecebido * 0.85;
    }
    else if (condicaorecebida === "c") {
        valorcalculado = valorprodutorecebido;
    }
    else if (condicaorecebida === "d") {
        valorcalculado = valorprodutorecebido * 1.10;
    }
    else {
        valorcalculado = 0;
    }

    diferenca = valorcalculado - valorprodutorecebido;

    valororiginal.textContent = valorprodutorecebido.toFixed(2);
    valorfinal.textContent = valorcalculado.toFixed(2);
    diferencavalor.textContent = diferenca.toFixed(2);
}