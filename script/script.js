//video https://www.youtube.com/watch?v=R1S_NhKkvGA
//minute

const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

let state = {};

const startGame = () => {
  state = {};
  showTextNode(1);
};

const showTextNode = (textNodeIndex) => {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
};

const showOption = (option) => {
  return true;
};

const selectOption = (option) => {
  //btn.style.backgroundColor = "green";
  const nextTextNodeId = option.nextText;
  //////////////if-statement has to be changed as soon as I have more than 2 questions///////////////////////
  if (nextTextNodeId > 2) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
};

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
