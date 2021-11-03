$(document).ready(function() {
    AOS.init();
    var os = platform.os.family.toString();
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
                $("#navImg").attr("width", "170px");
                $(".navbar").css("background-color", "none!important");
                $(".navbar").css("box-shadow", "none");
            }
        });
    }
    if ($(window).width() > 768){
        $(".slides").append('<li class="slide"> La Tua Contabilizzazione dei consumi</li>');
        $(".slides").append('<li class="slide"> La Migliore Assistenza Tecnica</li>');
        $(".slides").append('<li class="slide"> Il Monitoraggio costante dei tuoi consumi</li>');
        $(".slides").append('<li class="slide"> La Tua Contabilizzazione dei consumi</li>');
        $(".slides").append('<li class="slide"> La Migliore Assistenza Tecnica</li>');
        $(".slides").append('<li class="slide"> Il Monitoraggio costante dei tuoi consumi</li>');
    }else{
        $(".slides").append('<li class="slide"> Contabilizzazione</li>');
        $(".slides").append('<li class="slide"> Assistenza</li>');
        $(".slides").append('<li class="slide"> Monitoraggio</li>');
        $(".slides").append('<li class="slide"> Contabilizzazione</li>');
        $(".slides").append('<li class="slide"> Assistenza</li>');
        $(".slides").append('<li class="slide"> Monitoraggio</li>');
    }
    $('#lottie-go-down').on('click', function() {
        $('html, body').animate({ scrollTop: $('#ss').offset().top - 300 }, 0);
        return false;
    });
    //Media queries
    var mq = window.matchMedia("(max-width: 768px)");
    if (mq.matches) {
        // window width is at less than 570px
        $("#desktop").hide();
        $("#mobile").show();
    } else {
        // window width is greater than 570px
        $("#mobile").hide();
        $("#desktop").show();
    }
    // updateScroller();  

    particlesJS.load('hero', 'assets/json/particlesjs-config.json', function() {
        // console.log('callback - particles.js config loaded');
    });
    console.log(os);
    if (os.includes("OS X")){
        var vsOpts = {
            $slides: $('.slide'),
            $list: $('.slides'),
            duration: 12,
            lineHeight: 30
        }
    
        var vSlide = new TimelineMax({
            paused: false,
            repeat: -1
        })
    
        vsOpts.$slides.each(function(i) {
            vSlide.to(vsOpts.$list, vsOpts.duration / vsOpts.$slides.length, {
                ease: Expo.easeInOut, //Elastic.easeOut.config(1, 0.4)
                y: i * -1 * vsOpts.lineHeight
            })
        })
        vSlide.play()

    }else{
    var vsOpts = {
        $slides: $('.slide'),
        $list: $('.slides'),
        duration: 12,
        lineHeight: 51
    }

    var vSlide = new TimelineMax({
        paused: false,
        repeat: -1
    })

    vsOpts.$slides.each(function(i) {
        vSlide.to(vsOpts.$list, vsOpts.duration / vsOpts.$slides.length, {
            ease: Expo.easeInOut, //Elastic.easeOut.config(1, 0.4)
            y: i * -1 * vsOpts.lineHeight
        })
    })
    vSlide.play()
}


  
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
    //Go down anim      
    var animation2 = bodymovin.loadAnimation({
        container: document.getElementById('lottie-go-down'), // Required
        path: '/assets/json/lottie-go-down.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "Lottie Go Down", // Name for future reference. Optional.
    });
});



function openPopup(val) {
    switch (val) {
        case 1:
            Swal.fire({
                title: 'Contabilizzazione energetica dei consumi',
                text: "Tra i criteri scelti da e-bs per garantire un efficiente servizio di lettura vi sono la qualità e la chiarezza dell’elaborato fornito, l’intuitività, l’esaustività dei dati e delle informazioni contenute. La frequenza delle letture, la validazione e il controllo del dato e l’assistenza all’hardware sono fattori determinanti per la valutazione dell’efficienza dei servizi di contabilizzazione forniti.",
                confirmButtonColor: '#ff6c2b',
                confirmButtonText: 'Chiamaci!'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open("tel:+3905119932364");
                }
            })
            break;
        case 2:
            Swal.fire({
                title: 'Contabilizzazione idrica dei consumi',
                text: 'La suddivisione puntuale dei consumi di acqua fredda e calda sanitaria sono finalmente possibili attraverso l’installazione dei contatori divisionali leggibili da remoto. e-bs ha sviluppato un format, chiaro e intuitivo, di suddivisione delle spese di acqua fredda e calda per le utenze raggruppate. Offre la possibilità di liberarsi velocemente dal vincolo della lettura diretta in loco eliminando i consumi stimati o mancanti, garantendo un servizio certificato e preciso, in applicazione alle norme vigenti.',
                confirmButtonColor: '#ff6c2b',
                confirmButtonText: 'Chiamaci!'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open("tel:+3905119932364");
                }
            })
            break;
        case 3:
            Swal.fire({
                title: 'Installazione apparecchi di misurazione',
                text: 'e-bs è in grado di fornire e installare impianti di contabilizzazione e monitoraggio dei consumi ENERGETICI e IDRICI per qualsiasi tipologia di utenza. Avvalendosi di contratti di fornitura con le più importanti multinazionali di produzione di apparecchiature e disponendo di tecnici qualificati, è in grado di affrontare qualsiasi richiesta. Ad oggi e-bs, forte della sua esperienza e dell’impegno quotidiano nello studio e nella ricerca di nuove tecnologie, è in grado di proporre l’installazione di nuovi sistemi evoluti capaci di trasmettere dati e consumi in tempo reale, fruibili su tutte le piattaforme (smartphone, tablet ecc…). Il noleggio è la soluzione a basso impatto economico che permette di adeguarsi alle normative vigenti dilazionando il costo delle apparecchiature nel tempo, comprendendo anche il servizio di lettura e rendicontazione.',
                confirmButtonColor: '#ff6c2b',
                confirmButtonText: 'Chiamaci!'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open("tel:+3905119932364");
                }
            })
            break;
        case 4:
            Swal.fire({
                title: 'Noleggio apparecchi di misurazione',
                text: 'e-bs è in grado di fornire e installare impianti di contabilizzazione e monitoraggio dei consumi ENERGETICI e IDRICI per qualsiasi tipologia di utenza. Avvalendosi di contratti di fornitura con le più importanti multinazionali di produzione di apparecchiature e disponendo di tecnici qualificati, è in grado di affrontare qualsiasi richiesta. Ad oggi e-bs, forte della sua esperienza e dell’impegno quotidiano nello studio e nella ricerca di nuove tecnologie, è in grado di proporre l’installazione di nuovi sistemi evoluti capaci di trasmettere dati e consumi in tempo reale, fruibili su tutte le piattaforme (smartphone, tablet ecc…). Il noleggio è la soluzione a basso impatto economico che permette di adeguarsi alle normative vigenti dilazionando il costo delle apparecchiature nel tempo, comprendendo anche il servizio di lettura e rendicontazione. ',
                confirmButtonColor: '#ff6c2b',
                confirmButtonText: 'Chiamaci!'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open("tel:+3905119932364");
                }
            })
            break;
        case 5:
            Swal.fire({
                title: 'Assistenza tecnica',
                text: 'e-bs è in grado di offrire un servizio di assistenza tecnica e fornitura ricambi delle primarie case di produzione di apparecchiature di contabilizzazione di energia e acqua. Siamo centro assistenza ufficiale ISTA per l’Emilia-Romagna e partner SINAPSI e offriamo ai nostri clienti un servizio veloce e competente. Attraverso un front office dedicato, riusciamo a dare risposta ai quesiti della clientela e a garantire un servizio di contabilizzazione energia e acqua trasparente, intuitivo e innovativo.',
                confirmButtonColor: '#ff6c2b',
                confirmButtonText: 'Chiamaci!'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open("tel:+3905119932364");
                }
            })
            break;
    }

}
//END ANIM

var html = document.documentElement;
var body = document.body;

var scroller = {
    target: document.querySelector("body"),
    ease: 0.1, // <= scroll speed
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0,
};

var requestId = null;

TweenLite.set(scroller.target, {
    rotation: 0.01,
    force3D: true
});