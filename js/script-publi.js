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

// Java do filtro

function trocaFoto (smallImg)
{
        var fullImg = document.getElementById("pet_box");
        fullImg.src = smallImg.src;
}