var mousseLeft = 0;
var mousseTop = 0;
var objectPosition = $("#main").position();
var objectLeftPosition = objectPosition.left;
var objectTopPosition = objectPosition.top;

$( document ).on( "mousemove", function( event ) {
  mousseLeft = event.pageX;
  mousseTop = event.pageY;
});
