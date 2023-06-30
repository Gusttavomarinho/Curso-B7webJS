//formas de output
document.getElementById('titulo').innerHTML = "Opa , Novo titulo , Bem vindo";

//quase nunca esta forma pois  ela so serve junto com o documento se n troca tudo
document.write("Algum texto");

//janela
//window.alert("Mensagem de exemplo Windo."); //ou so alert("");

//console

console.log("Mostrando mensagem com console");


//switch

let dia = 6;
let diaNome = '';
let status_semana = '';

switch(dia) {
    case 1:
        diaNome = 'Segunda-Feira';
        break;
    case 2:
        diaNome = 'Terça-Feira';
        break;
    case 3:
        diaNome = 'Quarta-Feira';
        break;
    case 4:
        diaNome = 'Quinta-Feira';
        break;
    case 5:
        diaNome = 'Sexta-Feira';
        break;
    case 6:
        diaNome = 'Sabado';
        break;
    case 7:
        diaNome = 'Domingo';
        break;
    default:
        diaNome = 'Dia da semana invalido';
        break;



}

switch(status_semana){
    case 6:
    case 7:
        status_semana = 'Final de semana';
        break;
    default:
        status_semana = 'Dia de Semana';
}

document.getElementById("dia").innerHTML = "Hoje é: "+ diaNome + " - - " + status_semana;

//for 

//FOR LOOP
// FOR LOOP ARRAY


//FOR LOOP

let texto = '';

for (let i = 0; i <= 50; i++ ){
    texto = texto + i + '<br/>';
}

//FOR LOOP ARRAY
let carros = ['Ferrari','Fusca','Palio','Corolla','Ford Ka'];

let html =  '<ul>';

for (let i in carros){
    html += '<li>'+ carros[i] +'</li>';
}

html += '</ul>';



//while 

let c = 0;
let html2 = '';

while (c <= 10){

    html2 += "Numero: "+c+"<br/>";
    c++;

}

document.getElementById("demo").innerHTML = html2;