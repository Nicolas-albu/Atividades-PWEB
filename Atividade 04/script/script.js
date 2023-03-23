
const formulario = document.getElementById("formulario");
const telefone = Array.from(document.getElementsByName('input-telefone'))[0];
const DDD = Array.from(document.getElementsByClassName('ddd'))[0];
const seletorSerie = document.getElementById('serie');

// atividades.map((element) => {
//     element.addEventListener('click', (counter) => {
//         if (counter < 3) {
//             element.checked = true;
//             counter++;
//             console.log(counter);
//         }
//     });
// });


const dddsBrasil = [
    '11', '12', '13', '14', '15', '16', '17', '18', '19',
    '21', '22', '24',
    '27', '28',
    '31', '32', '33', '34', '35', '37', '38',
    '41', '42', '43', '44', '45', '46',
    '47', '48', '49',
    '51', '53', '54', '55',
    '61',
    '62', '64',
    '63',
    '65', '66',
    '67',
    '68',
    '69',
    '71', '73', '74', '75', '77',
    '79',
    '81', '87',
    '82',
    '83',
    '84',
    '85', '88',
    '86', '89',
    '91', '93', '94',
    '92',
    '95', '96', '97', '98', '99'
];

function validityDDD(){
    if(!dddsBrasil.includes(DDD.value)){
        DDD.setCustomValidity("Insira um DDD válido");
        DDD.reportValidity();
    } else {
        DDD.setCustomValidity("");
    }
}

seletorSerie.addEventListener('change', (event) => {
    if(seletorSerie.value == '1'){
        seletorSerie.setCustomValidity("Insira sua série");
        seletorSerie.reportValidity();
    } else {
        seletorSerie.setCustomValidity("");
    }
});



formulario.addEventListener('submit', (event) => {
    const atividades = document.querySelectorAll('input[type=checkbox]:checked');
    event.preventDefault();


    if (atividades.length > 3) return alert('Você só pode ter até 3 atividades');

    alert('Cadastro realizado com sucesso!');
});