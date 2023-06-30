function alterar(titulo){
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = "Trocou o campo!";
}



function somar(x, y){
    let total = x + y;

    return total;

}

var resultado = somar(10,15);

console.log(resultado);

function clicou(){

    document.getElementById("titulo").innerHTML = "Trocou o titulo com o botao!";
}

function passou() {
    //let contador = Math.random(100);
    console.log("Passou o mouse o titulo!");
}

function azul(){
    limpar_cor();
    document.getElementById("cor").classList.add("azul");
}

function verde(){
    limpar_cor();
    document.getElementById("cor").classList.add("verde");
}

function limpar_cor(){
    document.getElementById("cor").classList.remove("azul");
    document.getElementById("cor").classList.remove("verde");
}

//array 

let carros = ['Palio','Uno','Corolla','Ferrari'];
console.log(carros);
console.log(carros[0]);

let carros_outra_forma = [
    'Palio #2',
    'Uno #2',
    'Corolla #2',
    'Ferrari #2',
    function(){
        console.log("Função dentro de um array - testando 123");
    }
];

console.log(carros_outra_forma);
carros_outra_forma[4]();


let ingredientes = [
    ['uva','pera','maça'],
    ['arroz','feijao']
];

console.log(ingredientes);
console.log(ingredientes[1]);
console.log(ingredientes[0][2]);

//objetos

console.log("---------------Aula de objetos -----------------------------");

let carro = {
    nome:'Fiat',
    modelo:'Uno',
    peso:'800kg',
    ligado:false,
    ligar:function(){
        this.ligado = true;
        console.log("Ligando o "+this.modelo);
        console.log("VRUM VRUM - carro ligou!");
    },
    acelerar:function(){
        if(this.ligado == true){
            console.log("riiiiiiiiiiiiiiiiihshshshshshihihihi  - carro acelerando");
        }else{
            console.log(this.nome+" "+this.modelo+" não esta ligado!");
        }
        
    }

};

//console.log(carro['nome']);
//console.log(carro.modelo);
carro.ligar();
carro.acelerar();

//array com objeto dentro
console.log("---------------Aula de objetos com array -----------------------------");

let carros_2 = [
    {nome:'Fiat',modelo:'Palio'},
    {nome:'Fiat',modelo:'Modelo'},
    {nome:'Toyota',modelo:'Carolla'},
    {nome:'Ferrari',modelo:'Spider'}

];

console.log(carros_2[2]);
console.log(carros_2[2].modelo);


