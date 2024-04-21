
//interatividade na navebar//

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
  
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });
  });




document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-button");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const conteudo = this.nextElementSibling;
            if (conteudo.style.display === "block") {
                conteudo.style.display = "none";
            } else {
                conteudo.style.display = "block";
            }
        });

        // Adiciona manipuladores de eventos de toque para dispositivos móveis
        button.addEventListener("touchstart", function(event) {
            event.preventDefault(); // Impede o comportamento padrão do toque (como o scroll)
            const conteudo = this.nextElementSibling;
            if (conteudo.style.display === "block") {
                conteudo.style.display = "none";
            } else {
                conteudo.style.display = "block";
            }
        });
    });
});