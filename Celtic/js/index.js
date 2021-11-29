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