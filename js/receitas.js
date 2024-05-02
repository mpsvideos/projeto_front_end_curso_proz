document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const toggleButtons = document.querySelectorAll(".toggle-button");
  
    // Manipulador de evento para o menu hamburguer
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });
  
    // Manipulador de evento para os botões de alternância de receitas
    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const conteudo = this.nextElementSibling;
            toggleDisplay(conteudo);
        });
  
        // Manipulador de evento para dispositivos de toque
        button.addEventListener("touchstart", function(event) {
            event.preventDefault(); 
            const conteudo = this.nextElementSibling;
            toggleDisplay(conteudo);
        });
    });
  
    // Função para alternar a exibição de conteúdo
    function toggleDisplay(element) {
        if (element.style.display === "none" || element.style.display === "") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
  });

  
  
  // Botão de voltar ao topo
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btnTopo").style.display = "block";
  } else {
    document.getElementById("btnTopo").style.display = "none";
  }
  }
  
  function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  }
  