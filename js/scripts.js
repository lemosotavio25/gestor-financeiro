// Funções página pagamentos
function calcularTotalEntregas() {
    let total = 0;
    document.querySelectorAll('#entregas-tbody .valor').forEach(function (item) {
        total += parseFloat(item.textContent);
    });
    document.getElementById('total-entregas').textContent = 'R$ ' + total.toFixed(2);
    document.getElementById('total-entregas-gastos').textContent = 'R$ ' + total.toFixed(2);
    return total;
}

function calcularTotalGastos() {
    let totalGastos = 0;
    document.querySelectorAll('.gasto').forEach(function (item) {
        totalGastos += parseFloat(item.textContent);
    });
    document.getElementById('total-gastos').textContent = 'R$ ' + totalGastos.toFixed(2);
    return totalGastos;
}

function calcularTotalFinal() {
    const totalEntregas = calcularTotalEntregas();
    const totalGastos = calcularTotalGastos();
    const totalFinal = totalEntregas + totalGastos;
    document.getElementById('total-final').textContent = 'R$ ' + totalFinal.toFixed(2);
}

// Chama a função ao carregar a página
window.onload = calcularTotalFinal;