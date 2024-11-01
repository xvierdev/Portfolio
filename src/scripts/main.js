// Script desenvolvido para a interatividade da página.
const detailsElements = document.querySelectorAll('details');

detailsElements.forEach(detailsElement => {
    detailsElement.addEventListener('mouseover', () => {detailsElement.open = true;});
    detailsElement.addEventListener('mouseout', () => {detailsElement.open = false;});
});