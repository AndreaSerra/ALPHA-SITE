
$("a").hide();

$(".box").on("click", function (e) {
      e.preventDefault();
      $(".menu").toggleClass("menuOpen");
      $("a").toggle();
});




//    $( ".perimeter" ).hide();
//    $( ".menu" ).hide();


//    $( ".box" ).click(function() {
//    $( ".menu" ).slideToggle( "slow", function() {
//    $( ".perimeter" ).show();
//$( ".cross" ).show();
//    });

//    $( ".box" ).click(function() {
//    $( ".menu" ).slideToggle( "slow", function() {
//    $( ".perimeter" ).hide();
//    });


//$('.hamburger').on('click', function(e) {
  // Prevent link from jumping to the top of the page
  //e.preventDefault();
  // If menu is already showing, slide it up. Otherwise, slide it down.
//  $('.menu').toggleClass('slide-down');
//});
