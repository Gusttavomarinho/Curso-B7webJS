let numero1 = document.getElementById('numero1') as HTMLInputElement
let numero2 = document.getElementById('numero2') as  HTMLInputElement;
let botao = document.getElementById('calcular') as HTMLButtonElement;
let res = document.getElementById('resultado') as HTMLElement;

function calcular(n1,n2) {
    return n1 + n2;
}

botao.addEventListener('click',function (){
    alert('clicou....')
    res.innerHTML = calcular(numero1.value,numero2.value);
})
