var mousseLeft = 0;
var mousseTop = 0;
var objectPosition = $("#main").position();
var objectLeftPosition = objectPosition.left;
var objectTopPosition = objectPosition.top;

$( document ).on( "mousemove", function( event ) {
  mousseLeft = event.pageX;
  mousseTop = event.pageY;
});

$("#main").click(function() {
  var left = mousseLeft - objectLeftPosition;
  var top = mousseTop - objectTopPosition;

  if(left >= 0 && top >= 0) {

    var div = $("<div class='pixel'></div>");
    div = div.css({
      top: top,
      left: left
    });

    $(this).append(div);
  }
});
