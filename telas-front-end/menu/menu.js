
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
    width: 300px;
  }
  h1 {
    color: white;
    font-size: 2em;
    margin-bottom: 10px;
  }
  p {
    color: white;
    font-size: 1em;
    margin-bottom: 20px;
  }
  .button-row {
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
  }
  .button {
    width: 120px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
  }
  .button.black {
    background-color: black;
    color: white;
  }
  .button.gray {
    background-color: #ccc;
    color: black;
  }
  .icons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .icon {
    font-size: 1.5em;
    color: white;
    cursor: pointer;
  }
`;
document.head.appendChild(style);

// Cria o container principal
const container = document.createElement("div");
container.className = "container";

// Título
const title = document.createElement("h1");
title.textContent = "Menu";
container.appendChild(title);

// Subtítulo
const subtitle = document.createElement("p");
subtitle.textContent = "Como Devemos Prosseguir?";
container.appendChild(subtitle);

// Linha de botões - Depósito e Transferência
const buttonRow1 = document.createElement("div");
buttonRow1.className = "button-row";

const depositoButton = document.createElement("button");
depositoButton.className = "button black";
depositoButton.textContent = "Depósito";
buttonRow1.appendChild(depositoButton);

const transferenciaButton = document.createElement("button");
transferenciaButton.className = "button gray";
transferenciaButton.textContent = "Transferência";
buttonRow1.appendChild(transferenciaButton);

container.appendChild(buttonRow1);

// Linha de botões - Saque e Pagamento
const buttonRow2 = document.createElement("div");
buttonRow2.className = "button-row";

const saqueButton = document.createElement("button");
saqueButton.className = "button gray";
saqueButton.textContent = "Saque";
buttonRow2.appendChild(saqueButton);

const pagamentoButton = document.createElement("button");
pagamentoButton.className = "button black";
pagamentoButton.textContent = "Pagamento";
buttonRow2.appendChild(pagamentoButton);

container.appendChild(buttonRow2);

// Adiciona ícones abaixo dos botões
const iconRow = document.createElement("div");
iconRow.className = "icons";

const clockIcon = document.createElement("i");
clockIcon.className = "icon fas fa-clock";
iconRow.appendChild(clockIcon);

const bookIcon = document.createElement("i");
bookIcon.className = "icon fas fa-book";
iconRow.appendChild(bookIcon);

container.appendChild(iconRow);

// Adiciona o container ao corpo da página
document.body.appendChild(container);

// Adiciona Font Awesome para os ícones
const fontAwesomeScript = document.createElement("script");
fontAwesomeScript.src = "https://kit.fontawesome.com/a076d05399.js";
fontAwesomeScript.crossOrigin = "anonymous";
document.head.appendChild(fontAwesomeScript);
