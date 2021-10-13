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
    particlesJS.load('hero', 'assets/json/particlesjs-config-services.json', function() {});
    var animation2 = bodymovin.loadAnimation({
        container: document.getElementById('lottie-go-down'), // Required
        path: '/assets/json/lottie-go-down.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "Lottie Go Down", // Name for future reference. Optional.
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
});

function writeText(val) {
    switch (val) {
        case 1:
            $(".card-title").text("Preventivazione");
            $(".card-text").text("Testo della preventivazione");
            break;
        case 2:
            $(".card-title").text("Realizzazione Impianti di Contabilizzazione");
            $(".card-text").text("Usufruisci delle detrazioni fiscali con la formula tradizionale della fornitura e posa in opera del tuo sistema di contabilizzazione. Affidati ad e-bs Enery Billing Service s.r.l. in ogni aspetto, dall'installazione fino al collaudo dell'impianto.");
            break;
        case 3:
            $(".card-title").text("Contabilizzazione Energetica dei consumi");
            $(".card-text").text("Un unico interlocutore per le tue spese di climatizzazione invernale, climatizzazione estiva e di acqua calda sanitaria. Un format innovativo e trasparente che ti permette di capire ");
            break;
        case 4:
            $(".card-title").text("Noleggio apparecchi di misurazione");
            $(".card-text").text("Usufruisci delle detrazioni fiscali con la formula tradizionale della fornitura e posa in opera del tuo sistema di contabilizzazione. Affidati ad e-bs Enery Billing Service s.r.l. in ogni aspetto, dall'installazione fino al collaudo dell'impianto.");
            break;

    }
}