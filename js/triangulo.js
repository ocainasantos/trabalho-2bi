primeirovalorrecebido = document.querySelector("#PrimeiroValorTriangulo");
segundovalorrecebido = document.querySelector("#SegundoValorTriangulo");
terceirovalorrecebido = document.querySelector("#TerceiroValorTriangulo");
verificacaotriangulo = document.querySelector("#VerificaSeSEVerdadeiroTriangulo");
tipotriangulojs = document.querySelector("#TipoDoTriangulo");

function VerificarTriangulo() {
    let primeirovalor = Number(primeirovalorrecebido.value);
    let segundovalor = Number(segundovalorrecebido.value);
    let terceirovalor = Number(terceirovalorrecebido.value);

    let calculotrianguloum = primeirovalor + segundovalor
    let calculotriangulodois = segundovalor + terceirovalor
    let calculotriangulotres = terceirovalor + primeirovalor

    if (
        calculotrianguloum > terceirovalor &&
        calculotriangulodois > primeirovalor &&
        calculotriangulotres > segundovalor

    ) {
        verificacaotriangulo.textContent = "Ele e um triangulo!";

    }
    else {
        verificacaotriangulo.textContent = "Nao e um triangulo!";
    }

        if (
            primeirovalor === segundovalor &&
            segundovalor === terceirovalor
        ) {
            tipotriangulojs.textContent = "Equilátero";
        }
        else if (
            primeirovalor === segundovalor ||
            primeirovalor === terceirovalor ||
            segundovalor === terceirovalor
        ) {
            tipotriangulojs.textContent = "Isósceles";
        }
        else {
            tipotriangulojs.textContent = "Escaleno";
        }
}