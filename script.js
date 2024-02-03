document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('.box form');
    var thankYouContainer = document.getElementById('thank-you-container');
    var boxContainer = document.querySelector('.box');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Aqui você pode adicionar a lógica para processar o formulário, se necessário

        // Oculta a div .box
        boxContainer.style.display = 'none';

        // Exibe a mensagem de agradecimento
        thankYouContainer.style.display = 'block';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const thankYouContainer = document.getElementById('thank-you-container');

    if (thankYouContainer) {
        window.location.hash = '#thank-you-container';
    }
});