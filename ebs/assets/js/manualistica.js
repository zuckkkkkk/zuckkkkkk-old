$(document).ready(function() {
    //START ANIM - LOTTIE
    //Ham Anim
    let iconMenu = document.querySelector('#lottie-ham');
    let animationMenu = bodymovin.loadAnimation({
        container: iconMenu,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "/assets/json/hamburger.json",
        initialSegment: [20, 60]
    });

    var directionMenu = 1;
    iconMenu.addEventListener('click', (e) => {
        animationMenu.setDirection(directionMenu);
        animationMenu.play();
        directionMenu = -directionMenu;
    });
});

var globString = "#flipbook-" + 1;

function changeGlobString(val) {
    globString = "#flipbook-" + val;
}
$(document).keydown(function(e) {
    switch (e.keyCode) {
        case 37:
            $(globString).turn('previous');
            break;
        case 39:
            $(globString).turn('next');
            break;
    }

});


var scroll_start = 0;
var startchange = $('.title');
var offset = startchange.offset();
if (startchange.length) {
    $(document).scroll(function() {
        scroll_start = $(document).scrollTop();
        if (scroll_start > offset.top) {
            $(".navbar").css("background-color", "#282828");
            $(".navbar").css("box-shadow", "rgb(0 0 0 / 15%) 0px 3px 3px 0px");
            $("#navImg").attr("src", "assets/img/hand.png");
            $("#navImg").css("transform", "rotateZ(45deg)");
            $("#navImg").attr("width", "32px");
        } else {
            $("#navImg").attr("src", "assets/img/Hand_big.png");
            $("#navImg").css("transform", "rotateZ(0deg)");
            $("#navImg").attr("width", "128px");
            $(".navbar").css("background-color", "none!important");
            $(".navbar").css("box-shadow", "none");
        }
    });
}