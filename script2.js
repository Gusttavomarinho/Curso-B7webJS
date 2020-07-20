let nome = 'Gustavo Henrique Marinho de Oliveira';

let resultado = nome.indexOf('Henrique');

console.log( resultado);

let time;

function comecar(){
     time = setInterval(ShowTime,1000);
}

function parar(){
    clearInterval(time);
}

function remover_time(){
    document.getElementById("demo").style.display = "none";
}


function ShowTime() {
    let d = new Date();

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h+':'+m+':'+s;

    document.querySelector('.demo').innerHTML = txt;

}

setTimeout(function() {
    console.log("Rodoooooou!");
},2000)


let nome2 = 'Gustavo';
let idade2 = 24;

let frase_nome_idade = `Meu nome é ${nome2}, e eu tenho ${idade2} anos`;
let FraseNomeIdade = `Meu nome é ${nome2}, e ano que vem eu farei ${idade2 + 1} anos`;

console.log(frase_nome_idade);
console.log(FraseNomeIdade);