function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "/img/close_white_36dp.svg";
    }
}

// Foto galeria

function trocaFoto (smallImg)
{
        var fullImg = document.getElementById("pet_box");
        fullImg.src = smallImg.src;
}


// login

window.onload=function login(){

        var login = document.getElementById(login).value;
        var senha = document.getElementById(senha).value;

        if(login == "admin" && senha == "admin") {
            alert(sucesso)}



        }
    