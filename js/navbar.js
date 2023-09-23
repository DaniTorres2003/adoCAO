const navbar = document.getElementById('header_nav');

let showNavbar = false;

const toggleNavbar = () => {
    showNavbar = !showNavbar;
    
    if(showNavbar) {
        navbar.style.marginLeft = '-0vw';
        navbar.style.animationName = 'showNavbar';
    } else {
        navbar.style.marginLeft = '-100vw';
        navbar.style.animationName = 'closeNavbar';
    }
}

const closeNavbar = () => {
    if(showNavbar){
        toggleNavbar();
    }
}

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 900 && showNavbar) {
        toggleNavbar();
    }
})
