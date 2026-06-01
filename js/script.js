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

// Pagina 5 - Calcular Credito Bancario 
function calcularCreditobancario(){
    // Inputs
    let saldoMedio = parseFloat(document.getElementById("saldoMedio").value);
    let classificacao = "";

    // Funcao para calcular credito
    function calcularCredito(saldo, porcentagem){
        let resultado = saldo * (porcentagem / 100)
        classificacao = `voce tem direto a R$${resultado} de Credito!`;
    }

    // Verificar qual classificação
    if(saldoMedio >= 601){
        calcularCredito(saldoMedio, 40)
    } else if(saldoMedio >= 401){
        calcularCredito(saldoMedio, 30)
    } else if(saldoMedio >= 201){
        calcularCredito(saldoMedio, 20)
    } else {
        classificacao = "voce nao tem nenhum Credito Disponivel"
    }

    // Escrever no HTML
    document.getElementById("totalizadores").innerHTML = 
     ` <h3>Saldo Medio é de: R$${String(saldoMedio.toFixed(2))} e <strong>${classificacao}</strong> </h3> `
}

