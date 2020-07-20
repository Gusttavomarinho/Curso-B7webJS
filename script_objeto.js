let pessoa = {
    nome: 'Gustavo',
    sobrenome:'Marinho',
    idade: 24,
    social:{ 
        facebook:'gusttavomarinho',
        instagram:'gusttavomarinho'
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }

};

//desconstruindo objetos
//let {nome , sobrenome , idade} = pessoa;
//let {facebook , instagram , github = "github.com/404-error"} = pessoa.social;
//let {nome , social:{ instagram }} = pessoa;
//desconstruindo objetos e mudando o nome da variavel
let {nome:PessoaNome , sobrenome:PessoaSobreNome , idade:PessoaIdade} = pessoa;

console.log(PessoaNome,PessoaSobreNome,PessoaIdade=0);

//function normal

/*function somar(x,y){
    return x + y
}

let somar = function(x,y){
    return x + y ;
}
*/

//arrow function

/*
let somar = (x,y) => {
    return x + y;
}
*/

let somar = (x,y) => x+y;

/*let letrasNoNome = (nome) => {
    return nome.length;
};*/

//let letrasNoNome = (nome) => nome.length;

let letrasNoNome = nome => nome.length;

console.log( letrasNoNome('Gustavo') );

//operador spread

let numeros = [1,2,3,4];
let outros = [...numeros,5,6,7,8];

console.log(outros);

let info = {
    nome:'Gustavo',
    sobrenome:'Marinho',
    idade:24
};

let novaInfo = {
    ...info,
    cidade:'Parnamirim',
    estado:'Rio Grande do Norte',
    pais:'Brasil'
};

console.log(novaInfo);

function adicionarInfo(info){
    let novasInfo = {
        ...info,
        status:0,
        token:'gkdfkgopdfkopgkd',
        data_cadastro:'13-07-2020'
    }
    return novasInfo;
};

console.log(adicionarInfo({nome:'Gustavo',sobrenome:'Marinho'}));


//operador Rest

function adicionar(...numeros) {
    console.log(numeros);
}

adicionar(5,6,7,8,9,10);

//operador rest + spread
function adicionar_rest(nomes, ...novosNomes){
    let novoConjunto = [
        ...nomes, //aqui e o spread
        ...novosNomes // aqui tb
    ];
    return novoConjunto;
};

let nomes_rest = ["Gustavo","Bonieky"];

let outros_rest = adicionar_rest(nomes_rest, "Antonio","Maria","José");

console.log(outros_rest);


//includes

let lista = ['ovo','cafe','arroz','feijao','macarrao'];

console.log(lista.includes('ovo') );

//object key values entries

let lista_o = ['ovo','cafe','arroz','feijao','macarrao','pipoca'];

console.log( Object.keys(lista_o) );
console.log( Object.values(lista_o) );
console.log( Object.entries(lista_o) );
console.log('---------------------------');
console.log('---------------------------');
console.log('---------------------------');

let pessoa_o = {
    nome:'Bonieky',
    sobrenome:'Marinho',
    idade:24
};

console.log( Object.keys(pessoa_o) );
console.log( Object.values(pessoa_o) );
console.log( Object.entries(pessoa_o) );

//string padStart e padEnd

let telefone = '55';

console.log( telefone.padEnd(9,'*') );
console.log( telefone.padStart(9,'#') );


let cartao = '1234123412341234'

let lastDigits = cartao.slice(-4);

let cartaoMascarado = lastDigits.padStart(16,'*');

console.log(`Este é o seu cartao ? ${cartaoMascarado}`);

console.log('---------------------------');
console.log('---------------------------');
console.log('---------------------------');

//Promise

function fazer(){
    
    let promise = new Promise( (resolve,reject) => {

        setTimeout( () => {

            resolve('OK');

        } , 3000);

    } );

    return promise;

}

fazer().then( (resposta) => {
    console.log(`Resposta: ${resposta}`);
});

console.log('-***-----------------------');
console.log('--------------------***----');
console.log('-----------***-------------');



//Ajax requisições

const url = 'https://alunos.b7web.com.br/api/ping';
const params = {
    method:'GET',
    head:JSON.stringify({
        nome:'Gustavo',
        idade:24
    })
};

fetch(url,params)
    .then( (r) => r.json() )
    .then( (json) => {
        console.log(json);
    });


