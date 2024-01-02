/ add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscrollY = function() {
    var top = window.onscrollY;
    if(top >=100) {
        header.classList.add('navbar');
    }
    else {
        header.classList.remove('navbar');
    }
}

