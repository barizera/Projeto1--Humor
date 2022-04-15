const buttonclick = document.querySelector("#button");
const img = document.querySelector("#imagem");
const pEvoluiu = document.querySelector("#pEvoluiu");

const imgList = [
  "./Assets/imagens/Charmander 1.png" /* [0]*/,
  "./Assets/imagens/charmeleon.png" /* [1]*/,
  "./Assets/imagens/Charizard Esnobe.png" /* [2]*/,
];

buttonclick.addEventListener("click", () => {
  if (img.attributes.src.nodeValue == imgList[0]) {
    pEvoluiu.innerText = "O Charmander evoluiu para Charmeleon";
    img.setAttribute("src", `${imgList[1]}`);
  } else if (img.attributes.src.nodeValue == imgList[1]) {
    pEvoluiu.innerText = "O Charmeleon evoluiu para Charizard";
    img.setAttribute("src", `${imgList[2]}`);
  } else {
    pEvoluiu.innerText = "Algo de errado aconteceu, o Charizard involuiu para Charmander";
    img.setAttribute("src", `${imgList[0]}`);
  }
});
