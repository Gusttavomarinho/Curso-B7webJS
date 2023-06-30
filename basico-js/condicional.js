
var hora = 16;

if ( hora < 12) {
    console.log("Bom dia");
} else if ( hora < 18){
    console.log("Boa tarde");
}else if (hora <= 23) {
    console.log("Boa noite");

}

//condicional and  no JS = &&
if (hora >= 12 && hora < 18){
    console.log("Boa tarde! #2");
}

//condicional or no JS = ||
if (hora == 12 || hora == 18){
    console.log("Voce esta na hora do rush #3");
}


