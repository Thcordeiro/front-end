


const style = document.createElement("style");
style.innerHTML = `
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(to bottom, #003366, #4c9fcc);
  }
  .container {
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    width: 300px;
  }
  h1 {
    color: white;
    background-color: black;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  p {
    color: white;
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  .input-field {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    background-color: #ccc;
    border-radius: 5px;
    padding: 5px;
  }
  .input-field input {
    border: none;
    outline: none;
    background: none;
    flex: 1;
    padding: 8px;
    font-size: 1em;
  }
  .input-field i {
    margin-right: 8px;
    color: gray;
  }
  .btn {
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
  }
  .existing-account {
    color: white;
    margin-top: 15px;
    display: block;
    text-decoration: none;
    font-size: 0.9em;
  }
  .existing-account:hover {
    text-decoration: underline;
  }
`;
document.head.appendChild(style);


const container = document.createElement("div");
container.className = "container";


const title = document.createElement("h1");
title.textContent = "Bem Vindo";
container.appendChild(title);


const instruction = document.createElement("p");
instruction.textContent = "Insira seus Dados";
container.appendChild(instruction);


const emailField = document.createElement("div");
emailField.className = "input-field";
const emailIcon = document.createElement("i");
emailIcon.className = "fas fa-envelope";
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.id = "email";
emailInput.placeholder = "Email";
emailField.appendChild(emailIcon);
emailField.appendChild(emailInput);
container.appendChild(emailField);


const passwordField = document.createElement("div");
passwordField.className = "input-field";
const passwordIcon = document.createElement("i");
passwordIcon.className = "fas fa-lock";
const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.id = "password";
passwordInput.placeholder = "Senha";
passwordField.appendChild(passwordIcon);
passwordField.appendChild(passwordInput);
container.appendChild(passwordField);

const button = document.createElement("button");
button.className = "btn";
button.textContent = "Continuar";
button.onclick = continuar;
container.appendChild(button);

const existingAccountLink = document.createElement("a");
existingAccountLink.href = "#";
existingAccountLink.className = "existing-account";
existingAccountLink.textContent = "Já tem uma conta?";
container.appendChild(existingAccountLink);

document.body.appendChild(container);

function continuar() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  alert("Dados enviados com sucesso!\nEmail: " + email + "\nSenha: " + password);
}

// Adiciona Font Awesome para os ícones
const fontAwesomeScript = document.createElement("script");
fontAwesomeScript.src = "https://kit.fontawesome.com/a076d05399.js";
fontAwesomeScript.crossOrigin = "anonymous";
document.head.appendChild(fontAwesomeScript);
