var typeRobotrons = ["amarelo", "branco", "preto", "rosa", "vermelho", "azul"];

var position = 0;

if (position > typeRobotrons.length || position < 0){
    position = 0;
};

function botaoDo(){
    document.getElementsByClassName("robo")[0].src = "img/robotron-" + typeRobotrons[position] + ".png";
    //document.getElementById("img-robo").src = "img/robotron-" + typeRobotrons[position] + ".png";
    position++;
};

function botaoUndo(){
    document.getElementsByClassName("robo")[0].src = "img/robotron-" + typeRobotrons[position] + ".png";
    position--;
};