$(document).ready(function () {
    updateScroller();  
    window.focus();
    window.addEventListener("resize", onResize);
    document.addEventListener("scroll", onScroll); 
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
      var animation = bodymovin.loadAnimation({
        container: document.getElementById('lottie-animation'), // Required
        path: '/assets/json/lottie-who-are-we-2.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "Lottie Who Are We", // Name for future reference. Optional.
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


function updateScroller() {
  
  var resized = scroller.resizeRequest > 0;
    
  if (resized) {    
    var height = scroller.target.clientHeight;
    console.log(height);
    body.style.height = height + "px";
    scroller.resizeRequest = 0;
  }
      
  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }
  
  TweenLite.set(scroller.target, { 
    y: -scroller.y 
  });
  
  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}
// // CURSOR
// var cursor = $(".cursor"),
// follower = $(".cursor-follower");

// var posX = 0,
//     posY = 0;

// var mouseX = 0,
//     mouseY = 0;

// TweenMax.to({}, 0.006, {
//   repeat: -1,
//   onRepeat: function() {
//     posX += (mouseX - posX) / 9;
//     posY += (mouseY - posY) / 9;

//     TweenMax.set(follower, {
//         css: {
//         left: posX - 12,
//         top: posY - 12
//         }
//     });

//     TweenMax.set(cursor, {
//         css: {
//         left: mouseX,
//         top: mouseY
//         }
//     });
//   }
// });

// $(document).on("mousemove", function(e) {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
// });
// // yellow circle
// $("a").on("mouseenter", function() {
//     cursor.addClass("active");
//     follower.addClass("active");
// });
// $("a").on("mouseleave", function() {
//     cursor.removeClass("active");
//     follower.removeClass("active");
// });