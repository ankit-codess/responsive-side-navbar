let menu, value, navbar, contents;
menu = document.querySelector('.menu');
navbar = document.querySelector('.navbar');
contents = document.querySelector('.contents');
value = false;

menu.addEventListener('click', function() {
    value = !value;

    if (value) {
        // when value is true
        menu.classList.add('cross');
        navbar.style.width = '15rem';
        contents.style.marginRight = '15rem';
    } else {
        // when value is false
        menu.classList.remove('cross');
        navbar.style.width = '0';
        contents.style.marginRight = '0';
    }
});