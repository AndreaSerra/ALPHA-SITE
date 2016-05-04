
$("a").hide();
$(".x").hide();
$(".x2").hide();
$(".menuOpen").hide();

$(".boxRight").on("click", function (e) {
      e.preventDefault();
      $(".menuOpen").slideToggle(500);
      $("a").toggle();
      $(".linea").toggle();
      $(".x").toggle();
      $(".x2").toggle();
});
