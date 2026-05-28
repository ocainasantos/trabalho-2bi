// Função usada para carregar pagina dentro do index
async function carregarPagina(url) {
    const resposta = await fetch(url);
    const html = await resposta.text();
    document.getElementById("app").innerHTML = html;
}

// Pagina 2 - Calcular IMC
function calcularImc(){

    // Calcular IMC
    let valorPeso = parseFloat(document.getElementById("valorPeso").value);
    let valorAltura = parseFloat(document.getElementById("valorAltura").value);
    let valorImc = (valorPeso / (valorAltura * 2));
    let classificacao = "";

    // Verificar qual classificação
    if(valorImc <= 18.5)
        classificacao= "abaixo do peso"
    else if(valorImc <= 24.9)
        classificacao = "com peso normal"
    else if(valorImc <= 29.9)
        classificacao = "com sobrepeso"
    else if(valorImc <= 34.9)
        classificacao = "em obesidade grau 1"
    else if(valorImc <= 39.9)
        classificacao = "em obesidade grau 2"
    else if(valorImc >= 40)
        classificacao = "em obesidade grau 3"

    // Escrever no HTML
    document.getElementById("totalizadores").innerHTML =
     ` <h3>Seu IMC é de: ${valorImc.toFixed(2)} e você esta <strong>${classificacao}</strong> </h3> `
}
