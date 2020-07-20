//Ajax Async/Await




//Ajax requisições


function requisitar(){

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

        console.log("Alguma coisa");

};

async function requisitar2(){

    const url = 'https://alunos.b7web.com.br/api/ping';

    const r = await fetch(url);
    const json = await r.json();

    console.log(json);
    console.log("Alguma coisa");

}

requisitar2();
console.log('Texto Qualquer');