//Atividade 03
var typeRobotrons = ["robotron", "robotron-amarelo", "robotron-branco", "robotron-preto", "robotron-rosa", "robotron-vermelho"];

var positionActual = 0;

function validadePosition(){
    if (positionActual > typeRobotrons.length-2) positionActual = typeRobotrons.length-2;
    if (positionActual < 1) positionActual = 1;
    console.log("posição: " + positionActual);
}

function botaoDo(){
    validadePosition();
    positionActual++;
    document.getElementsByClassName("robo")[0].src = "img/" + typeRobotrons[positionActual] + ".png";
};

function botaoUndo(){
    validadePosition();
    positionActual--;
    document.getElementsByClassName("robo")[0].src = "img/" + typeRobotrons[positionActual] + ".png";
};



//Atividade 04

//valor dos contadores (input.value)
let counterValue = Array.from(document.getElementsByClassName("controle-contador"));

//botão +
let buttonPlus = Array.from(document.getElementsByClassName("controle-ajuste-major"));

//botão -
const buttonMinor = Array.from(document.getElementsByClassName("controle-ajuste-minor"));

document.addEventListener("DOMContentLoaded", (event) => {
    buttonMinor.map((button) => {
        button.addEventListener("click", () => {
            //Se o valor do contador da posição não for zero
            if (!(button.nextElementSibling.value == 0))
                button.nextElementSibling.value--;
        });
    });

    buttonPlus.map((button) => {
        button.addEventListener("click", () => {
            if (button.previousElementSibling.value != 100)
                //button.previousElementSibling.value == "00" ? button.previousElementSibling.value = 10 : button.previousElementSibling.value += 10;
                if (button.previousElementSibling.value == "00") button.previousElementSibling.value = 10;
                else button.previousElementSibling.value += 10;
        });
    });
});







