
$("a").hide();
$(".x").hide();
$(".x2").hide();
$(".menuOpen").hide();


  $(".boxRight").click( function () {

    if ($(".linea").is(":visible")) {
      $(".menuOpen").slideToggle(700);
      $("a").fadeToggle(700);
      $(".x").delay(200).fadeToggle(500);
      $(".x2").delay(200).fadeToggle(500);
      $(".linea").toggle();
    }
    else {
      $(".menuOpen").slideToggle(700);
      $("a").fadeToggle(700);
      $(".x").toggle();
      $(".x2").toggle();
      $(".linea").delay(200).fadeToggle(500);
    }

  });



$(".closeMenu").click( function () {
  if ($(".x").is(":visible")){
    $(".menuOpen").slideToggle(700);
    $("a").fadeToggle();
    $(".x").toggle();
    $(".x2").toggle();
    $(".linea").delay(200).fadeToggle(500);
  }

});
