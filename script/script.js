const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

let state = {};

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach(option);
}

function selectOption(option) {}

const textNodes = [
  {
    id: 1,
    text: "Inside which HTML tag do we put the JavaScript?",
    options: [
      {
        text: "js",
        nextText: 2,
      },
      {
        text: "javascript",
        nextText: 2,
      },
      {
        text: "script",
        setState: { jstag: true },
        nextText: 2,
      },
      {
        text: "scripting",
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "Which Of The Dialog Box Display a Message And a Data Entry Field?",
    options: [
      {
        text: "Alert()",
        nextText: 3,
      },
      {
        text: "Prompt()",
        setState: { display: true },
        nextText: 3,
      },
      {
        text: "Confirm()",
        nextText: 3,
      },
      {
        text: "Msg()",
        nextText: 3,
      },
    ],
  },
];

startGame();
