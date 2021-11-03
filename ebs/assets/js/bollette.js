$(document).ready(function() {
    Swal.fire({
        title: 'Scopri le nostre bollette!',
        html: "In questa sezione potrai scoprire nel dettaglio tutti i nostri elaborati: potrai zoomarli, ispezionarli e scoprire come si leggono. <br/> <br/> Passa il mouse sulle icone 🟠 per scoprire tutte le caratteristiche e i dati dei nostri elaborati.<br /> <br /> Trascina invece con il 🖱️ per analizzare al meglio gli elaborati.",
        showCloseButton: true
    })
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

function fireRiepilogo(){
    Swal.fire({
        title: 'Riepiloghi',
        html: "Un unico format di visualizzazione per tutti i servizi rendicontati nel tuo condominio! Consultali tutti🔍!",
        showCloseButton: true
    });
}