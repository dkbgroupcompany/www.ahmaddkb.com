/ add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onclick = function() {
    var top = window.onclick;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

