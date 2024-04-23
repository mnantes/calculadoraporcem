function calcularPorcentagem() {
    let valor = parseFloat(prompt("digite o valor:"));
    let porcentagem = parseFloat(prompt("digite a porcentagem:"));
    let resultado = valor * (porcentagem / 100);
    alert(`o valor de ${porcentagem}% de ${valor} é: ${resultado}`);
}
