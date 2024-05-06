// Interatividade na barra de navegação //
// Este trecho de código é executado quando o DOM é totalmente carregado
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o elemento com a classe 'hamburger', que geralmente é o ícone do menu de hambúrguer
    const hamburger = document.querySelector('.hamburger');
    // Seleciona o elemento com a classe 'nav-menu', que é o menu de navegação
    const navMenu = document.querySelector('.nav-menu');
  
    // Adiciona um ouvinte de evento de clique ao ícone do menu de hambúrguer
    hamburger.addEventListener('click', function () {
        // Quando o ícone do menu de hambúrguer é clicado, a classe 'show' é alternada no menu de navegação,
        // tornando-o visível ou oculto, dependendo do seu estado atual
        navMenu.classList.toggle('show');
    });
  });
  
  

// capturando elementos no DOM
// nome
let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

// funções gerais
function togglePopup(input, label) {
    // mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
        label.classList.add("required-popup")
    })

    // ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup")
    });
};

function estilizarInputCorreto(input, helper) {
    // função que insere a cor verde caso o input esteja correto
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
};

function estilizarInputIncorreto(input, helper) {
    // função que insere a cor vermelha caso o input esteja incorreto
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
};

togglePopup(nomeInput, nomeLabel);

// validar valor do input nome
nomeInput.addEventListener("blur", (e) => {
    let valorNome = e.target.value;

    if (valorNome == "" || valorNome.trim().length < 3) {
        // adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
        nomeHelper.innerText = "Digite seu nome com mínimo 3 caracteres"
        estilizarInputIncorreto(nomeInput, nomeHelper);
        inputsCadastroCorretos.nome = false;
    } else {
        // adicionar estilo dinâmico se o valor estiver correto
        estilizarInputCorreto(nomeInput, nomeHelper);
        inputsCadastroCorretos.nome = true;
    }
});

// capturando elementos no DOM
// sobrenome
let sobreNomeInput = document.getElementById("sobrenome");
let sobreNomeLabel = document.querySelector('label[for="sobrenome"]');
let sobreNomeHelper = document.getElementById("sobrenome-helper");

togglePopup(sobreNomeInput, sobreNomeLabel);

// validar valor do input sobrenome
sobreNomeInput.addEventListener("blur", (e) => {
    let valorSobreNome = e.target.value;

    if (valorSobreNome == "" || valorSobreNome.trim().length < 3) {
        // adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
        sobreNomeHelper.innerText = "Digite seu sobrenome com mínimo 3 caracteres"
        estilizarInputIncorreto(sobreNomeInput, sobreNomeHelper);
        inputsCadastroCorretos.sobrenome = false;
    } else {
        // adicionar estilo dinâmico se o valor estiver correto
        estilizarInputCorreto(sobreNomeInput, sobreNomeHelper);
        inputsCadastroCorretos.sobrenome = true;
    }
});

// capturando elementos no DOM
// data de nascimento
let dataNascInput = document.getElementById("data-nascimento");
let dataNascLabel = document.querySelector('label[for="data-nascimento"]');
let dataNascHelper = document.getElementById("data-nascimento-helper");

togglePopup(dataNascInput, dataNascLabel);

// validar valor do input data de nascimento
dataNascInput.addEventListener("blur", (e) => {
    let valorDataNasc = e.target.value;

    if (valorDataNasc == "") {
        // adicionar estilos dinâmicos se o valor tiver menos de 15 caracteres
        dataNascHelper.innerText = "Digite sua data de nascimento"
        estilizarInputIncorreto(dataNascInput, dataNascHelper);
        inputsCadastroCorretos.nascimento = false;
    } else {
        // adicionar estilo dinâmico se o valor estiver correto
        estilizarInputCorreto(dataNascInput, dataNascHelper);
        inputsCadastroCorretos.nascimento = true;
    }
});

// -------------------------------------   REVER ESSA PARTE   -------------------------------------
// funções de Estilo para o campo de gênero
function estilizarInputCorretoGenero(input, helper) {
    // Função que insere a cor verde caso o input esteja correto
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
}

function estilizarInputIncorretoGenero(input, helper) {
    // função que insere a cor vermelha caso o input esteja incorreto
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
}

// função para mostrar/ocultar popup de campo obrigatório para o campo de gênero
function togglePopupGenero(input, label) {
    // mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
        label.classList.add("required-popup");
    });

    // ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup");
    });
}

// Capturando elementos no DOM para o campo de gênero
let generoMascInput = document.getElementById("masculino");
let generoFemInput = document.getElementById("feminino");
let generoLabel = document.querySelector('label[for="genero"]');
let generoHelper = document.getElementById("genero-helper");

togglePopupGenero(generoMascInput, generoLabel);

// validar valor do gênero masculino
generoMascInput.addEventListener("blur", () => {
    if (!generoMascInput.checked && !generoFemInput.checked) {
        // adicionar estilos dinâmicos se nenhum dos radio buttons foi selecionado
        generoHelper.innerText = "Escolha seu gênero e clique para selecionar";
        estilizarInputIncorretoGenero(generoMascInput, generoHelper);
        inputsCadastroCorretos.genero = false;
    } else {
        // adicionar estilo dinâmico se pelo menos um dos radio buttons foi selecionado
        estilizarInputCorretoGenero(generoMascInput, generoHelper);
        inputsCadastroCorretos.genero = true;
    }
});

togglePopupGenero(generoFemInput, generoLabel);

// validar valor do gênero feminino
generoFemInput.addEventListener("blur", () => {
    if (!generoMascInput.checked && !generoFemInput.checked) {
        // adicionar estilos dinâmicos se nenhum dos radio buttons foi selecionado
        generoHelper.innerText = "Clique para selecionar seu gênero";
        estilizarInputIncorretoGenero(generoFemInput, generoHelper);
        inputsCadastroCorretos.genero = false;
    } else {
        // adicionar estilo dinâmico se pelo menos um dos radio buttons foi selecionado
        estilizarInputCorretoGenero(generoFemInput, generoHelper);
        inputsCadastroCorretos.genero = true;
    }
});

// capturando elementos no DOM
// email
let emailInput = document.getElementById("email-form");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel);

// validar valor do input email
emailInput.addEventListener("blur", (e) => {
    let valorEmail = e.target.value;

    // expressão regular para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(valorEmail)) {
        // se o e-mail é válido
        estilizarInputCorreto(emailInput, emailHelper);
        inputsCadastroCorretos.email = true;
    } else {
        // se o e-mail é inválido
        emailHelper.innerText = "Digite um email válido. Exemplo: seunome@gmail.com";
        estilizarInputIncorreto(emailInput, emailHelper);
        inputsCadastroCorretos.email = false;
    }
});

// capturando elementos no DOM
// telefone
let telInput = document.getElementById("telefone");
let telLabel = document.querySelector('label[for="telefone"]');
let telHelper = document.getElementById("tel-helper");

// togglePopup(telInput, telLabel);

// validar valor do input telefone
// telInput.addEventListener("blur", (e) => {
//     let valorTelefone = e.target.value;

//     if (valorTelefone == "" || valorTelefone.length < 14) {
//         // adicionar estilos dinâmicos se o valor tiver menos de 14 caracteres
//         telHelper.innerText = "Digite um número de telefone válido. Exemplo: +5531999998877"
//         estilizarInputIncorreto(telInput, telHelper);
//         inputsCadastroCorretos.tel = false;
//     } else {
//         // adicionar estilo dinâmico se o valor estiver correto
//         estilizarInputCorreto(telInput, telHelper);
//         inputsCadastroCorretos.tel = true;
//     }
// });

// capturando elementos no DOM
// endereço
let enderecoInput = document.getElementById("endereco");
let enderecoLabel = document.querySelector('label[for="endereco"]');
let enderecoHelper = document.getElementById("endereco-helper");

togglePopup(enderecoInput, enderecoLabel);

// validar valor do input endereço
enderecoInput.addEventListener("blur", (e) => {
    let valorEndereco = e.target.value;

    if (valorEndereco == "") {
        // adicionar estilos dinâmicos se o valor for nulo
        enderecoHelper.innerText = "Digite seu endereço. Exemplo: Rua do Galo, 13, bairro Campeão, BH, MG"
        estilizarInputIncorreto(enderecoInput, enderecoHelper);
        inputsCadastroCorretos.endereco = false;
    } else {
        // adicionar estilo dinâmico se o valor estiver correto
        estilizarInputCorreto(enderecoInput, enderecoHelper);
        inputsCadastroCorretos.endereco = true;
    }
});

// capturando elementos no DOM
// usuario
let usuarioCadastroInput = document.getElementById("usuario-cadastro");
let usuarioCadastroLabel = document.querySelector('label[for="usuario-cadastro"]');
let usuarioCadastroHelper = document.getElementById("usuario-cadastro-helper");

togglePopup(usuarioCadastroInput, usuarioCadastroLabel);

// validar valor do input usuário
usuarioCadastroInput.addEventListener("blur", (e) => {
    let valorUsuarioCadastro= e.target.value;

    if (valorUsuarioCadastro.length < 6 || valorUsuarioCadastro == "") {
        // adicionar estilos dinâmicos se o valor tiver menos de 6 caracteres
        usuarioCadastroHelper.innerText = "Digite um nome de usuário válido, ele deve conter no mínimo 6 caracteres"
        estilizarInputIncorreto(usuarioCadastroInput, usuarioCadastroHelper);
        inputsCadastroCorretos.usuarioCadastro = false;
    } else {
        // adicionar estilo dinâmico se o valor estiver correto
        estilizarInputCorreto(usuarioCadastroInput, usuarioCadastroHelper);
        inputsCadastroCorretos.usuarioCadastro = true;
    }
});

// capturando elementos no DOM
// senha
let senhaCadastroInput = document.getElementById("senha");
let senhaCadastroLabel = document.querySelector('label[for="senha"]');
let senhaCadastroHelper = document.getElementById("senha-helper");

togglePopup(senhaCadastroInput, senhaCadastroLabel);

// validar valor do input senha
senhaCadastroInput.addEventListener("blur", (e) => {
    let valorSenha = e.target.value;

    if (valorSenha == "" || valorSenha.length < 6) {
        // adicionar estilos dinâmicos se o valor for nulo ou menor que 6
        senhaCadastroHelper.innerText = "Digite uma senha válida, ela deve conter no mínimo 6 caracteres"
        estilizarInputIncorreto(senhaCadastroInput, senhaCadastroHelper);
        inputsCadastroCorretos.senha = false;
    } else {
        // adicionar estilo dinâmico se o valor estiver correto
        estilizarInputCorreto(senhaCadastroInput, senhaCadastroHelper);
        inputsCadastroCorretos.senha = true;
    }
});

// capturando elementos no DOM
// contra-senha
let contraSenhaCadastroInput = document.getElementById("contra-senha");
let contraSenhaCadastroLabel = document.querySelector('label[for="contra-senha"]');
let contraSenhaCadastroHelper = document.getElementById("contra-senha-helper");

togglePopup(contraSenhaCadastroInput, contraSenhaCadastroLabel);

// validar valor do input contra-senha
contraSenhaCadastroInput.addEventListener("blur", (e) => {
    let valorContraSenha = e.target.value;
    let valorSenha = senhaCadastroInput.value;

    if (valorContraSenha == valorSenha) {
        // adicionar estilo dinâmico se o valor estiver correto
        estilizarInputCorreto(contraSenhaCadastroInput, contraSenhaCadastroHelper);
        inputsCadastroCorretos.contrasenha = true;
    } else if (valorContraSenha == "") {
        // adicionar estilos dinâmicos se o valor for nulo ou menor que 6
        contraSenhaCadastroHelper.innerText = "Confirme a senha e a contra-senha"
        estilizarInputIncorreto(contraSenhaCadastroInput, contraSenhaCadastroHelper);
        inputsCadastroCorretos.contrasenha = false;
    } else {
        // adicionar estilos dinâmicos se a senha e contra-senha forem diferentes
        contraSenhaCadastroHelper.innerText = "As senhas devem ser iguais"
        estilizarInputIncorreto(contraSenhaCadastroInput, contraSenhaCadastroHelper);
        inputsCadastroCorretos.contrasenha = false;
    }
});

// evitar envio do formulário
let btnCadastrar = document.querySelector('input[type="submit"]');
let inputsCadastroCorretos = {
    nome: false,
    sobrenome: false,
    nascimento: false,
    genero: false,
    email: false,
    tel: false,
    endereco: false,
    usuarioCadastro: false,
    senha: false,
    contrasenha: false
};

// evento do botão cadastrar
btnCadastrar.addEventListener("click", (e) => {
    if (inputsCadastroCorretos.nome == false ||
        inputsCadastroCorretos.sobrenome == false ||
        inputsCadastroCorretos.nascimento == false ||
        inputsCadastroCorretos.genero == false ||
        inputsCadastroCorretos.email == false ||
        inputsCadastroCorretos.tel == false ||
        inputsCadastroCorretos.endereco == false ||
        inputsCadastroCorretos.usuarioCadastro == false ||
        inputsCadastroCorretos.senha == false ||
        inputsCadastroCorretos.contrasenha == false) {
        e.preventDefault();
        alert("Favor preencher todos os campos!");
    } else {
        alert("Cadastro realizado com sucesso!");
    }
})

// Botão voltar ao topo //
  
  // Define uma função chamada scrollFunction que é chamada sempre que ocorre um evento de rolagem
  window.onscroll = function() {
    scrollFunction();
  };
  
  // Função para mostrar ou ocultar o botão de voltar ao topo, dependendo da posição de rolagem
  function scrollFunction() {
    // Verifica se a posição de rolagem vertical do corpo do documento é maior que 20 pixels
    // ou se a posição de rolagem vertical do elemento raiz (html) é maior que 20 pixels
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      // Se a posição de rolagem for maior que 20 pixels, o botão de voltar ao topo é exibido
      document.getElementById("btnTopo").style.display = "block";
    } else {
      // Caso contrário, o botão de voltar ao topo é ocultado
      document.getElementById("btnTopo").style.display = "none";
    }
  }
  
  // Função para rolar a página de volta ao topo quando o botão de voltar ao topo é clicado
  function scrollToTop() {
    // Define a posição de rolagem vertical do corpo do documento como 0, levando a página de volta ao topo
    document.body.scrollTop = 0;
    // Define a posição de rolagem vertical do elemento raiz (html) como 0, levando a página de volta ao topo
    document.documentElement.scrollTop = 0;
  }