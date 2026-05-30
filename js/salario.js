cargorecebido = document.querySelector("#CargoInformado");
salariorecebido = document.querySelector("#SalarioInformado");
valorfinal = document.querySelector("#ValorSalarioNovo");
valoraumentado = document.querySelector("#AumentoSalario");
salarioantigoexibido = document.querySelector("#SalarioAntigo");
diferencaentreossalarios = document.querySelector("#DiferencaSalarios");

function CalcularSalario() {

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
    valorfinal.textContent = valorfinaldosalario.toFixed(2);
    // Exibe apenas o valor do aumento
    valoraumentado.textContent = valordeaumento.toFixed(2);
    // Exibe o salário antigo informado pelo usuário
    salarioantigoexibido.textContent = salarioatualrecebido.toFixed(2);
    // Exibe a diferença entre o salário novo e o antigo
    diferencaentreossalarios.textContent = diferencageral.toFixed(2)

}