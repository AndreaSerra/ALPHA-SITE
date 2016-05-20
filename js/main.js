
$(".navlink").hide();
//$(".x").hide();
//$(".x2").hide();
//$(".menuOpen").hide();


  $(".boxRight").click( function () {

    if ($(".linea").is(":visible")) {
      $(".menuOpen").slideToggle(700);
      $(".navlink").delay(500).fadeToggle(300);
      $(".x").delay(500).fadeToggle(300);
      $(".x2").delay(500).fadeToggle(300);
      $(".linea").toggle();
    }
    else {
      $(".menuOpen").slideToggle(700);
      $(".navlink").fadeToggle(300);
      $(".x").toggle();
      $(".x2").toggle();
      $(".linea").delay(500).fadeToggle(300);
    }

  });



$(".closeMenu").click( function () {
  if ($(".x").is(":visible")){
    $(".menuOpen").slideToggle(700);
    $(".navlink").fadeToggle(300);
    $(".x").toggle();
    $(".x2").toggle();
    $(".linea").delay(500).fadeToggle(300);
  }

});
