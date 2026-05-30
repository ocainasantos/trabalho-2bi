anocarro = document.querySelector("#AnodoCarroHtml");
valorfipe = document.querySelector("#ValorTabelaCarroHtml");
impostocarro = document.querySelector("#ValorImpostoSobreCarro");
valortotalfinal = document.querySelector("#ValorTotalCarro");

function CalcularImposto() {
    let anorecebido = Number(anocarro.value);
    let valorrecebidofipe = Number(valorfipe.value);

    let impostorecebidocarro = Number(impostocarro.value);
    let valorfinalsomado = Number(valortotalfinal.value);

    if (anorecebido <= 1989) {
        impostorecebidocarro = valorrecebidofipe * 0.01;
    }
    else {
        impostorecebidocarro = valorrecebidofipe * 0.015;
    }

    valorfinalsomado = valorrecebidofipe + impostorecebidocarro;

    impostocarro.textContent = impostorecebidocarro.toFixed(2);
    valortotalfinal.textContent = valorfinalsomado.toFixed(2);
}
