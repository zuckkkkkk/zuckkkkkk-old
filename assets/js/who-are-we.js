$(document).ready(function() {
    AOS.init();
    var scroll_start = 0;
    var startchange = $('.title');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function() {
            scroll_start = $(document).scrollTop();
            if (scroll_start > offset.top) {
                $(".navbar").css("background-color", "#282828");
                $(".navbar").css("box-shadow", "rgb(0 0 0 / 15%) 0px 3px 3px 0px");
            } else {
                $(".navbar").css("background-color", "none!important");
                $(".navbar").css("box-shadow", "none");
            }
        });
    }
    if ($('#timeline1') != null) {
        $("#timeline-1").timeline();
    }
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
render();
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