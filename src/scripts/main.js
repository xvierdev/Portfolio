// Script desenvolvido para a interatividade da página.

document.addEventListener("DOMContentLoaded", function() {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth();
    document.getElementById('age').innerHTML = anoAtual;
});