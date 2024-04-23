document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const toggleButtons = document.querySelectorAll(".toggle-button");

    // Manipulador de evento para o menu hamburguer
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });

    // Manipuladores de eventos para os botões de alternância
    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const conteudo = this.nextElementSibling;
            toggleDisplay(conteudo);
        });

        // Manipuladores de eventos de toque para dispositivos móveis
        button.addEventListener("touchstart", function(event) {
            event.preventDefault(); 
            const conteudo = this.nextElementSibling;
            toggleDisplay(conteudo);
        });
    });

    // Função para alternar a exibição de conteúdo
    function toggleDisplay(element) {
        if (element.style.display === "block") {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    }
});
