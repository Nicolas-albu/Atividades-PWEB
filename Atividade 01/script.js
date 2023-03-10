function enterBotao(event){
    //verifica se a tecla ENTER foi pressionada
    if(event.keyCode === 13) {
        tabButton();
    }
}

function verificarNomeCompleto(nomeCompleto) {    
    const regex = /\d+/; //verifica se tem números
    return !regex.test(nomeCompleto);
};

function tabButton(){
    let nomeCompleto = document.getElementById("campo-de-nome-completo").value.trim();    
    if (verificarNomeCompleto(nomeCompleto)){
        let nomeCompletoSeparado = nomeCompleto.split(" ");
        let sobrenome = nomeCompletoSeparado.slice(1);

        document.getElementById("campo-de-nome").value = nomeCompletoSeparado[0];
        document.getElementById("campo-de-sobrenome").value = sobrenome.join(" ");
        document.getElementById("campo-de-nome-completo").value = "";
    } else {
        alert("Não pode inserir número no campo de nome completo");
    }
};