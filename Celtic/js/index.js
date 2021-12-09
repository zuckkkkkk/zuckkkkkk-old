$(document).ready(function() {
      //Cambio lingua
    $("#itToEn").click(function() {
        window.location = "../en/index.html"
      });
      $("#EnToIt").click(function() {
        window.location = "../it/index.html"
      });
      //Check ora per Happy Hour
      const date = new Date();
      if (date.getHours() < 20 && date.getHours() > 10 ){
        $("#happyhour").show();
      }else{
        $("#happyhour").hide();
      }
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    $("#goBackbtn").show();
    console
  } else {
    $("#goBackbtn").hide();
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}