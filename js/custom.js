$(document).ready(function () {
    // Scroll
    niceScroll();
    new WOW().init();
    // SideNav
    nmSidenav();
    // Rope
    nmRope();

});


// Scroll
function niceScroll() {
    $(function () {
        $("body").niceScroll({cursorcolor:"#D38920"});
    });
}

// Scroll Animate
function animeScroll() {
    new WOW().init();
}
// SideNav
function nmSidenav() {
    $('#nmSidenavIcon').hover(function () {
        $(this).children().toggleClass('sidenav-hover');
        $('#nmSidenavIcon div:nth-child(2)').toggleClass('nm-sidenav-div-2');
        $('#nmSidenavIcon div:nth-child(3)').toggleClass('nm-sidenav-div-3');
    });

    $('#nmSidenavIconTTT').on('click', function () {
        $('#nmSidenav').addClass('nmSidenav-open');
        $(this).addClass('sidenav-open');
    });

    $('#nmSidenavClose').on('click', function () {
        $('#nmSidenav').addClass('nmSidenav-close');
    });
}

// Rope
function nmRope() {
    for (var i = 0; i < 5; i++) {
        $dot = document.createElement('div');
        $dot2 = document.createElement('div');
        $dot3 = document.createElement('div');

        $('#nmRope').append($dot);
        $('#nmRope2').append($dot2);
        $('#nmRope3').append($dot3);
    }
}