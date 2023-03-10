var typeRobotrons = ["amarelo", "azul", "branco", "preto", "rosa", "vermelho"];

var position = 0;

function botaoDo(){
    document.getElementsByClassName("robo")[0].src = "img/robotron-" + typeRobotrons[position];
    //document.getElementsByClassName("robo").item
    position++;
};

function botaoUndo(){

};