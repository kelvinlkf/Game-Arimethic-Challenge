$(document).ready(function(){
  $("#loadingImage").fadeIn(1500);
  $("#loadingImage").fadeOut(4000);
  setTimeout(function(){
    $(".content").fadeIn(2000);
  },5000);
});
