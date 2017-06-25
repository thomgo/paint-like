var mousseLeft = 0;
var mousseTop = 0;
var objectPosition = $("#main").position();
var objectLeftPosition = objectPosition.left;
var objectTopPosition = objectPosition.top;
var bgColor = $("#color").val();

$( document ).on( "mousemove", function( event ) {
  mousseLeft = event.pageX;
  mousseTop = event.pageY;
});

$("#color").change(function(){
  bgColor = $(this).val();
});

$("#main").click(function() {
  var left = mousseLeft - objectLeftPosition;
  var top = mousseTop - objectTopPosition;

  if(left >= 0 && top >= 0) {

    var div = $("<div class='pixel'></div>");
    div = div.css({
      backgroundColor: bgColor,
      top: top,
      left: left
    });

    $(this).append(div);
  }
});

var downChecker = false;

$("#main").on( "mousedown", function() {
  downChecker = true;
  $(this).on( "mousemove", function() {
    if(downChecker === true) {
      var left = mousseLeft - objectLeftPosition;
      var top = mousseTop - objectTopPosition;

      if(left >= 0 && top >= 0) {

        var div = $("<div class='pixel'></div>");
        div = div.css({
          backgroundColor: bgColor,
          top: top,
          left: left
        });

        $(this).append(div);
      }
    }
  });
});

$("#main").on( "mouseup", function(){
  downChecker = false;
});
