$(document).ready(function() {

    var scroll_start = 0;
    var startchange = $('.title');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function() {
            scroll_start = $(document).scrollTop();
            if (scroll_start > offset.top) {
                $(".navbar").css("background-color", "#282828");
                $(".navbar").css("box-shadow", "rgb(0 0 0 / 15%) 0px 3px 3px 0px");
                $("#navImg").attr("src", "assets/img/Hand.png");
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
    if ($('#timeline1') != null) {
        $("#timeline-1").timeline();
    }
    $('#lottie-go-down').on('click', function() {
        console.log(this.hash);
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
    // window.focus();
    // window.addEventListener("resize", onResize);
    // document.addEventListener("scroll", onScroll); 
    particlesJS.load('hero', 'assets/json/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });
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

    //START ANIM - LOTTIE
    //Maybe legacy
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('lottie-animation'), // Required
        path: '/assets/json/lottie-who-are-we-2.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "Lottie Who Are We", // Name for future reference. Optional.
    });


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

    var botui = new BotUI('manuali-bot');
    botui.message.add({
        content: 'Ciao! Seleziona qui sotto la marca dei tuoi dispositivi.'
    }).then(function() { // wait till its shown
        botui.action.button({
            action: [{ // Caleffi
                    text: 'Caleffi',
                    value: '1'
                },
                { // Controlli
                    text: 'Controlli',
                    value: '2'
                },
                { // Controlli 2
                    text: 'Controlli 2',
                    value: '3'
                },
                { // Evohome
                    text: 'Evohome',
                    value: '4'
                },
                { // Honeywell
                    text: 'Honeywell',
                    value: '5'
                },
                { // Save Energy
                    text: 'Save Energy',
                    value: '6'
                },
                { // Siemens
                    text: 'Siemens',
                    value: '7'
                },
                { // Sontex
                    text: 'Sontex',
                    value: '8'
                },
                { // Sontex
                    text: 'Sontex 2',
                    value: '9'
                },
                { // Sontex
                    text: 'Sontex 3',
                    value: '10'
                },
            ]
        }).then(function(res) { // will be called when a button is clicked.
            botui.message.add({ // show next message 'Hai selezionato: ' + res.text + . Scarica il pdf [cliccando qui](http://127.0.0.1:5500/assets/Manuali/1.pdf)
                content: 'Hai selezionato ' + res.text
            });
            var link = "/assets/Manuali/" + res.value + ".pdf";
            botui.message.add({
                type: 'html', // this is 'text' by default
                content: '<a href= "' + link + '" > Clicca qui per scaricare il pdf </a>'
            });
        });
    });


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

var animationServiceFire = bodymovin.loadAnimation({
    container: document.getElementById('fire-service'), // Required
    path: '/assets/json/services-page-anim/fire.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Lottie family", // Name for future reference. Optional.
});
var animationServiceWater = bodymovin.loadAnimation({
    container: document.getElementById('water-service'), // Required
    path: '/assets/json/services-page-anim/water.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Lottie family", // Name for future reference. Optional.
});
var animationServiceScrewdriver = bodymovin.loadAnimation({
    container: document.getElementById('screwdriver-service'), // Required
    path: '/assets/json/services-page-anim/screwdriver.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Lottie family", // Name for future reference. Optional.
});
var animationServiceWrench = bodymovin.loadAnimation({
    container: document.getElementById('wrench-service'), // Required
    path: '/assets/json/services-page-anim/wrench.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Lottie family", // Name for future reference. Optional.
});

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
/*
TIMELINE
*/
$.fn.timeline = function() {
    var selectors = {
        id: $(this),
        item: $(this).find(".timeline-item"),
        activeClass: "timeline-item--active",
        img: ".timeline__img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css(
        "background-image",
        "url(" +
        selectors.item
        .first()
        .find(selectors.img)
        .attr("src") +
        ")"
    );
    var itemLength = selectors.item.length;
    $(window).scroll(function() {
        var max, min;
        var pos = $(this).scrollTop() + window.screen.height / 3;
        selectors.item.each(function(i) {
            min = $(this).offset().top;
            max = $(this).height() + $(this).offset().top;
            var that = $(this);
            console.log(min + " - " + max + " - " + " - " + pos);
            if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                selectors.item.removeClass(selectors.activeClass);
                selectors.id.css(
                    "background-image",
                    "url(" +
                    selectors.item
                    .last()
                    .find(selectors.img)
                    .attr("src") +
                    ")"
                );
                selectors.item.last().addClass(selectors.activeClass);
            } else if (pos <= max - 40 && pos >= min) {
                selectors.id.css(
                    "background-image",
                    "url(" +
                    $(this)
                    .find(selectors.img)
                    .attr("src") +
                    ")"
                );
                selectors.item.removeClass(selectors.activeClass);
                $(this).addClass(selectors.activeClass);

            }
        });
    });
};

/*--------------------
Vars
--------------------*/
const $menu = document.querySelector('.menu')
const $items = document.querySelectorAll('.menu--item')
const $images = document.querySelectorAll('.menu--item img')
let menuWidth = $menu.clientWidth
let itemWidth = $items[0].clientWidth
let wrapWidth = $items.length * itemWidth

let scrollSpeed = 0
let oldScrollY = 0
let scrollY = 0
let y = 0


/*--------------------
Lerp
--------------------*/
const lerp = (v0, v1, t) => {
    return v0 * (1 - t) + v1 * t
}


/*--------------------
Dispose
--------------------*/
const dispose = (scroll) => {
    gsap.set($items, {
        x: (i) => {
            return i * itemWidth + scroll
        },
        modifiers: {
            x: (x, target) => {
                const s = gsap.utils.wrap(-itemWidth, wrapWidth - itemWidth, parseInt(x))
                return `${s}px`
            }
        }
    })
}
dispose(0)


/*--------------------
Wheel
--------------------*/
// const handleMouseWheel = (e) => {
//   scrollY -= e.deltaY * 0.9
// }


/*--------------------
Touch
--------------------*/
let touchStart = 0
let touchX = 0
let isDragging = false
const handleTouchStart = (e) => {
    touchStart = e.clientX || e.touches[0].clientX
    isDragging = true
    $menu.classList.add('is-dragging')
}
const handleTouchMove = (e) => {
    if (!isDragging) return
    touchX = e.clientX || e.touches[0].clientX
    scrollY += (touchX - touchStart) * 2.5
    touchStart = touchX
}
const handleTouchEnd = () => {
    isDragging = false
    $menu.classList.remove('is-dragging')
}


/*--------------------
Listeners
--------------------*/
// $menu.addEventListener('mousewheel', handleMouseWheel)

$menu.addEventListener('touchstart', handleTouchStart)
$menu.addEventListener('touchmove', handleTouchMove)
$menu.addEventListener('touchend', handleTouchEnd)

$menu.addEventListener('mousedown', handleTouchStart)
$menu.addEventListener('mousemove', handleTouchMove)
$menu.addEventListener('mouseleave', handleTouchEnd)
$menu.addEventListener('mouseup', handleTouchEnd)

$menu.addEventListener('selectstart', () => { return false })


/*--------------------
Resize
--------------------*/
window.addEventListener('resize', () => {
    menuWidth = $menu.clientWidth
    itemWidth = $items[0].clientWidth
    wrapWidth = $items.length * itemWidth
})


/*--------------------
Render
--------------------*/
const render = () => {
    requestAnimationFrame(render)
    y = lerp(y, scrollY, .1)
    dispose(y)

    scrollSpeed = y - oldScrollY
    oldScrollY = y

    gsap.to($items, {
        skewX: -scrollSpeed * .2,
        rotate: scrollSpeed * .01,
        scale: 1 - Math.min(100, Math.abs(scrollSpeed)) * 0.003
    })
}
render()

/*Carousel Old New*/
$("#slider").on("input change", (e) => {
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    $('.foreground-img').css('width', `${sliderPos}% `)
        // Update the position of the slider button
    $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
});