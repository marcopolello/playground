$( document ).ready(function() {

  // funzione next div
  $( "div.next" ).click(function() {

    var divActive = $("div.active");
    divActive.removeClass("active");

    if (divActive.hasClass('last')) {
      $('div.first').addClass('active');
    } else {
      divActive.next("div").addClass('active');
    }
  });

  // funzione prev div
  $( "div.prev" ).click(function() {

    var divActive = $("div.active");
    divActive.removeClass("active");

    if (divActive.hasClass('first')) {
      $('div.last').addClass('active');
    } else {
      divActive.prev("div").addClass('active');
    }
  });
});
