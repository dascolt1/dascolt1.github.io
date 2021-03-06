//adds opacity transition on navbar when user scrolls down past certain point
window.addEventListener('scroll', function (e) {
    let top = this.scrollY;
    let nav = document.querySelector('.navbar');
    let getInTouch = document.querySelector('.hook');
    let breakPoint = 70;
    let contactFade = 1650

    if(top > breakPoint){
        nav.style.transition = 'opacity 800ms'; 
        nav.style.opacity = '.7';
    }

    if(top < breakPoint) {
        nav.style.transition = 'opacity 300ms';
        nav.style.opacity = '1';
    }

    //dynamic transition
    if(top > contactFade){
        getInTouch.classList.add('fadeInLeft');
    }

    if(top < contactFade) {
        getInTouch.classList.remove('fadeInLeft');
    }
});

//closes navbar when nav item is clicked
$(document).ready(function () {
    $(document).click(function (event) {
        var click = $(event.target);
        var _open = $(".navbar-collapse").hasClass("show");
        if (_open === true && !click.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});

