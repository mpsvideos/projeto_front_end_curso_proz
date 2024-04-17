// capturando elementos no DOM
// nome completo
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

// validar valor do input nome completo
nomeInput.addEventListener("blur", (e) => {
    let valorNome = e.target.value;

    if (valorNome.length < 15) {
        // adicionar estilos dinâmicos se o valor tiver menos de 15 caracteres
        nomeHelper.innerText = "Favor inserir seu nome completo"
        estilizarInputIncorreto(nomeInput, nomeHelper);
        inputsCadastroCorretos.nome = false;
    } else {
        // adicionar estilo dinâmico se o valor estiver correto
        estilizarInputCorreto(nomeInput, nomeHelper);
        inputsCadastroCorretos.nome = true;
    }
});

// capturando elementos no DOM
// genero
// let generoInput = document.getElementById("genero-form");
// let generoLabel = document.querySelector('label[for="genero"]');
// let generoHelper = document.getElementById("genero-helper");

// console.log(generoInput)
// console.log(generoLabel)
// console.log(generoHelper)

// togglePopup(generoInput, generoLabel);

// capturando elementos no DOM
// email
let emailInput = document.getElementById("email-form");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel);

// validar valor do input email
emailInput.addEventListener("blur", (e) => {
    let valorEmail = e.target.value;

    if (valorEmail.includes("@") && valorEmail.includes(".com")) {
        // adicionar estilo dinâmico se o valor estiver correto
        estilizarInputCorreto(emailInput, emailHelper);
        inputsCadastroCorretos.email = true;
    } else {       
        // adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
        emailHelper.innerText = "Favor inserir um email válido"
        estilizarInputIncorreto(emailInput, emailHelper);
        inputsCadastroCorretos.email = false;
    }
});

// capturando elementos no DOM
// telefone
let telInput = document.getElementById("telefone");
let telLabel = document.querySelector('label[for="telefone"]');
let telHelper = document.getElementById("tel-helper");

togglePopup(telInput, telLabel);

// validar valor do input telefone
telInput.addEventListener("blur", (e) => {
    let valorTelefone = e.target.value;

    if (valorTelefone.length < 17) {
        // adicionar estilos dinâmicos se o valor tiver menos de 17 caracteres
        telHelper.innerText = "Favor inserir um número de telefone válido. Exemplo: +55 31 99999-8877"
        estilizarInputIncorreto(telInput, telHelper);
        inputsCadastroCorretos.tel = false;
    } else {
        // adicionar estilo dinâmico se o valor estiver correto
        estilizarInputCorreto(telInput, telHelper);
        inputsCadastroCorretos.tel = true;
    }
});

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
        enderecoHelper.innerText = "O preenchimento desse campo é obrigatório"
        estilizarInputIncorreto(enderecoInput, enderecoHelper);
        inputsCadastroCorretos.endereco = false;
    } else {
        // adicionar estilo dinâmico se o valor estiver correto
        estilizarInputCorreto(enderecoInput, enderecoHelper);
        inputsCadastroCorretos.endereco = true;
    }
});

// capturando elementos no DOM
// senha
let senhaCadastroInput = document.getElementById("senha");
let senhaCadastroLabel = document.querySelector('label[for="senha"]');
let senhaCadastroHelper = document.getElementById("senha-helper");

togglePopup(senhaCadastroInput, senhaCadastroLabel);

// // validar valor do input senha
senhaCadastroInput.addEventListener("blur", (e) => {
    let valorSenha = e.target.value;

    if (valorSenha == "" || valorSenha.length < 6) {
        // adicionar estilos dinâmicos se o valor for nulo ou menor que 6
        senhaCadastroHelper.innerText = "Digite uma senha válida, ela deve ter no mínimo seis caracteres"
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

// // validar valor do input contra-senha
contraSenhaCadastroInput.addEventListener("blur", (e) => {
    let valorContraSenha = e.target.value;
    let valorSenha = e.target.value;

    if (valorContraSenha == valorSenha) {
        // adicionar estilo dinâmico se o valor estiver correto
        estilizarInputCorreto(contraSenhaCadastroInput, contraSenhaCadastroHelper);
        inputsCadastroCorretos.contrasenha = true;
    }


    // verificar essa condição
    if (valorContraSenha == "") {
        // adicionar estilos dinâmicos se o valor for nulo ou menor que 6
        contraSenhaCadastroHelper.innerText = "Confirme a senha"
        estilizarInputIncorreto(contraSenhaCadastroInput, contraSenhaCadastroHelper);
        inputsCadastroCorretos.contrasenha = false;
    } else {
        // adicionar estilos dinâmicos se a senha e contra-senha forem diferentes
        contraSenhaCadastroHelper.innerText = "As senhas precisam ser iguais"
        estilizarInputIncorreto(contraSenhaCadastroInput, contraSenhaCadastroHelper);
        inputsCadastroCorretos.contrasenha = false;
    }
});

// evitar envio do formulário
let btnCadastrar = document.querySelector('input[type="submit"]');
let inputsCadastroCorretos = {
    nome: false,
    genero: false,
    email: false,
    tel: false,
    endereco: false,
    senha: false,
    contrasenha: false
};

// // botão cadastrar
// btnCadastrar.addEventListener("click", (e) => {
//     if (inputsCorretos.nome == false ||
//         inputsCorretos.genero == false ||
//         inputsCorretos.email == false ||
//         inputsCorretos.tel == false ||
//         inputsCorretos.endereco == false ||
//         inputsCorretos.senha == false ||
//         inputsCorretos.contrasenha == false) {
//         e.preventDefault();
//         alert("Favor preencher todos os campos!");
//     } else {
//         alert("Login realizado com sucesso!");
//     }
// })