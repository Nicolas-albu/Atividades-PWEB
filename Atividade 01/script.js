function buttonSeparated(){
    nomeCompleto = document.getElementById("campo-de-nome-completo").value.split(" ");
    document.getElementById("campo-de-nome").value = nomeCompleto[0];
    document.getElementById("campo-de-sobrenome").value = nomeCompleto[1];
};