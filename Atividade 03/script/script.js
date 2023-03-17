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

// ================================SIMPLES=======================================
//botão +
const buttonPlus = document.getElementsByClassName("controle-ajuste");

//botão -
const buttonMinor = document.getElementsByClassName("controle-ajuste minor");

buttonMinor[0].addEventListener("click", alert("test"));
buttonPlus[0].addEventListener("click", alert("test"));


// ================================COMPLETO=======================================

//valor dos contadores (input.value)
let counterValue = document.getElementsByClassName("controle-contador");

//botão +
let buttonPlus = document.getElementsByClassName("controle-ajuste");

//botão -
const buttonMinor = document.getElementsByClassName("controle-ajuste minor");

/*
for(let position = 0; position < buttonMinor.length; position++){
    buttonMinor[position].addEventListener("click", actionOfButtonMinor(position));
}

for(let position = 0; position < buttonPlus.length; position++){
    buttonPlus[position].addEventListener("click", actionOfButtonPlus(position));
}
*/

for(let positionOfButton = 0; positionOfButton < buttonMinor.length; positionOfButton++){
    buttonMinor[positionOfButton].addEventListener("click", (positionOfButton) => {
        //Se o valor do contador da posição não for zero
        if (!(counterValue[positionOfButton].value == 0))
            counterValue[positionOfButton].value--;
    });
};

for(let positionOfButton = 0; positionOfButton < buttonPlus.length; positionOfButton++){
    buttonPlus[positionOfButton].addEventListener("click", (positionOfButton) => {
        counterValue[positionOfButton].value++;
    });
};