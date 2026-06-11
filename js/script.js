// Função usada para carregar pagina dentro do index
async function carregarPagina(url) {
    const resposta = await fetch(url);
    const html = await resposta.text();
    document.getElementById("app").innerHTML = html;
}

//Pagina 1 - Triangulo
function VerificarTriangulo() {
    primeirovalorrecebido = document.querySelector("#PrimeiroValorTriangulo");
    segundovalorrecebido = document.querySelector("#SegundoValorTriangulo");
    terceirovalorrecebido = document.querySelector("#TerceiroValorTriangulo");
    resultadotriangulo = document.querySelector("#ResultadoTriangulo");

    let primeirovalor = Number(primeirovalorrecebido.value);
    let segundovalor = Number(segundovalorrecebido.value);
    let terceirovalor = Number(terceirovalorrecebido.value);

    let calculotrianguloum = primeirovalor + segundovalor
    let calculotriangulodois = segundovalor + terceirovalor
    let calculotriangulotres = terceirovalor + primeirovalor

    let mensagemtriangulo;
    let tipotriangulo;

    if (
        calculotrianguloum > terceirovalor &&
        calculotriangulodois > primeirovalor &&
        calculotriangulotres > segundovalor

    ) {
        mensagemtriangulo = "Ele é um triângulo!";

    }
    else {
        mensagemtriangulo = "Não é um triângulo!";
    }

    if (
        primeirovalor === segundovalor &&
        segundovalor === terceirovalor
    ) {
        tipotriangulo = "Equilátero";
    }
    else if (
        primeirovalor === segundovalor ||
        primeirovalor === terceirovalor ||
        segundovalor === terceirovalor
    ) {
        tipotriangulo = "Isósceles";
    }
    else {
        tipotriangulo = "Escaleno";
    }

    resultadotriangulo.innerHTML = `
    <h3>Realmente é triângulo? <b>${mensagemtriangulo}</b></h3>

    <h3>Qual o tipo do seu triângulo?
        <b>${tipotriangulo}</b>
    </h3>
`;
}

// Pagina 2 - Calcular IMC
function calcularImc() {

    // Calcular IMC
    let valorPeso = parseFloat(document.getElementById("valorPeso").value);
    let valorAltura = parseFloat(document.getElementById("valorAltura").value);
    let valorImc = (valorPeso / (valorAltura * 2));
    let classificacao = "";

    // Verificar qual classificação
    if (valorImc <= 18.5)
        classificacao = "abaixo do peso"
    else if (valorImc <= 24.9)
        classificacao = "com peso normal"
    else if (valorImc <= 29.9)
        classificacao = "com sobrepeso"
    else if (valorImc <= 34.9)
        classificacao = "em obesidade grau 1"
    else if (valorImc <= 39.9)
        classificacao = "em obesidade grau 2"
    else if (valorImc >= 40)
        classificacao = "em obesidade grau 3"

    // Escrever no HTML
    document.getElementById("totalizadores").innerHTML =
        ` <h3>Seu IMC é de: ${valorImc.toFixed(2)} e você esta <strong>${classificacao}</strong> </h3> `
}
// Pagina 3 - Calcular Imposto
function CalcularImposto() {
    anocarro = document.querySelector("#AnodoCarroHtml");
    valorfipe = document.querySelector("#ValorTabelaCarroHtml");
    impostocarro = document.querySelector("#ValorImpostoSobreCarro");
    valortotalfinal = document.querySelector("#ValorTotalCarro");
    resultadoimposto = document.querySelector("#ResultadoImposto");

    let anorecebido = Number(anocarro.value);
    let valorrecebidofipe = Number(valorfipe.value);

    let impostorecebidocarro;
    let valorfinalsomado;

    if (anorecebido === 0 || valorrecebidofipe === 0) {
        alert("Preencha o ano e o valor da tabela.");
        return;
    }

    if (anorecebido <= 1989) {
        impostorecebidocarro = valorrecebidofipe * 0.01;
    }
    else {
        impostorecebidocarro = valorrecebidofipe * 0.015;
    }

    valorfinalsomado = valorrecebidofipe + impostorecebidocarro;

    resultadoimposto.innerHTML = `
    <h3>O imposto a ser pago pelo seu veículo é de:
        <b>R$ ${impostorecebidocarro.toFixed(2)}</b>
    </h3>

    <h3>Valor total a ser pago:
        <b>R$ ${valorfinalsomado.toFixed(2)}</b>
    </h3>
`;
}
// Pagina 4 - Salario
function CalcularSalario() {
    cargorecebido = document.querySelector("#CargoInformado");
    salariorecebido = document.querySelector("#SalarioInformado");
    valorfinal = document.querySelector("#ValorSalarioNovo");
    valoraumentado = document.querySelector("#AumentoSalario");
    salarioantigoexibido = document.querySelector("#SalarioAntigo");
    diferencaentreossalarios = document.querySelector("#DiferencaSalarios");
    resultadoSalario = document.querySelector("#ResultadoSalario");

    // Recebe o cargo digitado pelo usuário
    // O toLowerCase() transforma tudo em minúsculo
    // Ex.: "Gerente" -> "gerente"
    let cargoquefoipassado = cargorecebido.value.toLowerCase();

    // Recebe o salário digitado e converte para número
    let salarioatualrecebido = Number(salariorecebido.value);

    // Variáveis que serão calculadas
    let valorfinaldosalario;
    let valordeaumento;
    let diferencageral;

    // Verifica qual cargo foi informado
    // e aplica a porcentagem correspondente

    if (cargoquefoipassado === "gerente") {
        // Aumento de 10%
        valordeaumento = salarioatualrecebido * 0.10;
    }
    else if (cargoquefoipassado === "engenheiro") {
        // Aumento de 20%
        valordeaumento = salarioatualrecebido * 0.20;
    }
    else if (cargoquefoipassado === "tecnico") {
        // Aumento de 30%
        valordeaumento = salarioatualrecebido * 0.30;
    }
    else {
        // Caso o cargo não exista na tabela, aplica aumento de 40%
        valordeaumento = salarioatualrecebido * 0.40;
    }
    // Calcula o novo salário
    valorfinaldosalario = valordeaumento + salarioatualrecebido;
    // Calcula a diferença entre o salário novo e o antigo
    diferencageral = valorfinaldosalario - salarioatualrecebido;
    // Exibe o novo salário na tela

    resultadoSalario.innerHTML = `
    <h3>O seu novo salário será de: R$ ${valorfinaldosalario.toFixed(2)}</h3>

    <h3>Teve um aumento de: R$ ${valordeaumento.toFixed(2)}</h3>

    <h5>Seu salário anterior era: R$ ${salarioatualrecebido.toFixed(2)}</h5>

    <p>
        A diferença entre o salário novo e o antigo é de
        <b>R$ ${diferencageral.toFixed(2)}</b>
    </p>
`;

}
// Pagina 5 - Calcular Credito Bancario 
function calcularCreditobancario() {
    // Inputs
    let saldoMedio = parseFloat(document.getElementById("saldoMedio").value);
    let classificacao = "";

    // Funcao para calcular credito
    function calcularCredito(saldo, porcentagem) {
        let resultado = saldo * (porcentagem / 100)
        classificacao = `voce tem direto a R$${resultado} de Credito!`;
    }

    // Verificar qual classificação
    if (saldoMedio >= 601) {
        calcularCredito(saldoMedio, 40)
    } else if (saldoMedio >= 401) {
        calcularCredito(saldoMedio, 30)
    } else if (saldoMedio >= 201) {
        calcularCredito(saldoMedio, 20)
    } else {
        classificacao = "voce nao tem nenhum Credito Disponivel"
    }

    // Escrever no HTML
    document.getElementById("totalizadores").innerHTML =
        ` <h3>Saldo Medio é de: R$${String(saldoMedio.toFixed(2))} e <strong>${classificacao}</strong> </h3> `
}
// Pagina 6 - Lanchonete
function lanchonete() {
    let input = document.getElementById("cardapio").value;
    let quantidade = Number(document.getElementById("quantidade").value)

    const items = [
        { nome: "Cachorro Quente", valor: 11 },
        { nome: "Bauru", valor: 8.50 },
        { nome: "Misto Quente", valor: 8 },
        { nome: "Hamburguer", valor: 9 },
        { nome: "CheseeBurguer", valor: 10 },
        { nome: "Refrigerante", valor: 4.5 }
    ]

    items.forEach(item => {
        if (item.nome == input) {
            preco = item.valor * quantidade;
        }
    });

    document.getElementById("totalizadores").innerHTML =
        `<h3>Voce selecionou ${quantidade} ${input}, Total foi R$${preco.toFixed(2)}</h3>`

}
// Pagina 7 - Vendas
function CalcularVenda() {
    valorproduto = document.querySelector("#ValorProduto");
    condicaopagamento = document.querySelector("#CondicaoPagamento");

    valororiginal = document.querySelector("#ValorOriginal");
    valorfinal = document.querySelector("#ValorFinal");
    diferencavalor = document.querySelector("#DiferencaValor");
    resultadoVenda = document.querySelector("#ResultadoVenda");

    let valorprodutorecebido = Number(valorproduto.value);
    let condicaorecebida = condicaopagamento.value.toLowerCase();


    let valorcalculado;
    let diferenca;

    if (condicaorecebida === "") {
        alert("Selecione uma condição de pagamento.");
        return;
    }

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

    resultadoVenda.innerHTML = `
    <h3>Valor original: R$ ${valorprodutorecebido.toFixed(2)}</h3>
    <h3>Valor final: R$ ${valorcalculado.toFixed(2)}</h3>
    <h3>Diferença: R$ ${diferenca.toFixed(2)}</h3>
`;
}

// Pagina 8 - Calcular Pagamento
function calcularPagamento() {
    let nivelSelect = Number(document.getElementById("nivelSelect").value)
    let quantidadeHoras = Number(document.getElementById("quantidadeHora").value)
    let salario = 0;
    const niveis = [
        { nivel: 1, valorHora: 12 },
        { nivel: 2, valorHora: 17 },
        { nivel: 3, valorHora: 25 }
    ]

    niveis.forEach(nivel => {
        if (nivel.nivel == nivelSelect) {
            salario = Number(nivel.valorHora) * quantidadeHoras * 4.5;
        }
    });
    // Escrever no HTML
    document.getElementById("totalizadores").innerHTML =
        ` <h3>Voce e nivel ${nivelSelect} e seu salario e R$${salario.toFixed(2)} </h3> `
}