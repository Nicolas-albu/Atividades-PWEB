//https://www.alura.com.br/artigos/trocando-caracteres-de-uma-string-no-java#:~:text=M%C3%A9todo%20replaceAll(),que%20passarmos%20por%20outro%20caractere.?utm_source=awin&utm_medium=site&utm_term=101248&awc=23465_1678467659_5f104ce2c64fa8a3922f21a302913942
//https://github.com/Lea1dev/displayName-JavaScript/blob/main/script.js

function tratamentoNomeCompleto(nomeCompleto) {
    return nomeCompleto.replace(/ \s+/g, " ").trim();
};

function buttonSeparated(){
    let nomeCompleto = document.getElementById("campo-de-nome-completo").value;
    let nomeCompletoTratado = this.tratamentoNomeCompleto(nomeCompleto);
    let nomeCompletoSeparado = nomeCompletoTratado.split(" ");
    document.getElementById("campo-de-nome").value = nomeCompletoSeparado[0];
    let sobrenome = nomeCompletoSeparado.slice(1);

    document.getElementById("campo-de-sobrenome").value = sobrenome.join(" ");
};