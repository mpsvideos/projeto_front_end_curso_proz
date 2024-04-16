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

togglePopup(nomeInput, nomeLabel);

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

// validar valor do input nome completo
nomeInput.addEventListener("blur", (e) => {
    let valorNome = e.target.value;

    if (valorNome.length < 15) {
        // adicionar estilos dinâmicos se o valor tiver menos de 15 caracteres
        nomeHelper.innerText = "Favor inserir seu nome completo"
        estilizarInputIncorreto(nomeInput, nomeHelper);
        inputsCorretos.nome = false;
    } else {
        // adicionar estilo dinâmico se o valor estiver correto
        estilizarInputCorreto(nomeInput, nomeHelper);
        inputsCorretos.nome = true;
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

    if (valorEmail.includes("@") && valorEmail.includes(".com")) {
        // adicionar estilo dinâmico se o valor estiver correto
        estilizarInputCorreto(emailInput, emailHelper);
        inputsCorretos.email = true;
    } else {       
        // adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
        emailHelper.innerText = "Favor inserir um email válido"
        estilizarInputIncorreto(emailInput, emailHelper);
        inputsCorretos.email = false;
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
        inputsCorretos.tel = false;
    } else {
        // adicionar estilo dinâmico se o valor estiver correto
        estilizarInputCorreto(telInput, telHelper);
        inputsCorretos.tel = true;
    }
});