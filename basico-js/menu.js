//fazer o menu abrir ou fechar

function menuToggle(){
    let menuArea = document.getElementById("menu-area");

    if(menuArea.classList.contains('menu-opened') == true) {
        menuArea.classList.remove('menu-opened');
    }else{
        menuArea.classList.add('menu-opened');
    }
};


function menuToggle_simples(){
    let menuArea = document.getElementById("menu-area");

    if(menuArea.style.width == '200px') {
        menuArea.style.width = '0px';
    }else{
        menuArea.style.width = '200px';
    }

}

function menuToggle_outro(){
    let menuArea = document.getElementById("menu-area");
    menuArea.classList.toggle('menu-opened');
}

