function calcularIMC(){
    let nome = document.getElementById("campo-nome").value;
    let massa = document.getElementById("campo-massa").value;
    let altura = document.getElementById("campo-altura").value;
    let imc = (massa/altura**2).toFixed(2);
    document.getElementById("resposta").innerHTML = "Olá, " + nome + ", o seu IMC é de " + imc;
}