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