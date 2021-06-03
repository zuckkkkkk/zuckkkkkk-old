$(document).ready(function () {
  $('#lottie-go-down').on('click', function() {
    console.log(this.hash);  
    $('html, body').animate({scrollTop: $('#lottie-go-down').offset().top + 100}, 0);
    return false;
});
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
        duration: 6,
        lineHeight: 50
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
    });
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