// Store the current mouse positon on left and top
var mousseLeft = 0;
var mousseTop = 0;

// Store the painting div positon on left and top
var objectPosition = $("#main").position();
var objectLeftPosition = objectPosition.left;
var objectTopPosition = objectPosition.top;

// Store the current color in the color input chosen by the user
var bgColor = $("#color").val();

// Store the current size based on the range input chosen by the user
var size = $("#range").val();

// Default tool is a square
var tool = "carré";

// Check if the user hold the mouse down when make continuous lines
var downChecker = false;

// Each time the user move on the page its mouse position is calculated
$( document ).on( "mousemove", function( event ) {
  mousseLeft = event.pageX;
  mousseTop = event.pageY;
});

// When the user changes the color in the input, the bgColor vairable is reassigned
$("#color").change(function(){
  bgColor = $(this).val();
});

$("#range").change(function(){
  size = $(this).val();
});

$(".tool").click(function(){
  tool = $(this).text().toLowerCase();
});

// Function to add a div with a background color and an absolute position to the painting div
function setPixel(target) {
  // Absolute position of the div to add base on the mouse and painting div position on left and top
  var left = mousseLeft - objectLeftPosition;
  var top = mousseTop - objectTopPosition;

  // Check if the user is inside the painting div
  if(left >= 0 && top >= 0) {
    // Create the div element and set the css
    var div = $("<div class='pixel'></div>");
    div = div.css({
      "width": size,
      "height": size,
      "background-color": bgColor,
      "top": top,
      "left": left
    });

    if(tool === "rond") {
      div = div.css("border-radius", "100%");
    }
    else if (tool === "gomme") {
      div = div.css("background-color", $("#main").css("background-color"));
    }

    $(target).append(div);
  }
}

// Add one div element
$("#main").click(function() {
  setPixel($(this));
});

// Add multiple div elements while the mouse is down on the painting element
$("#main").on( "mousedown", function() {
  downChecker = true;
  $(this).on( "mousemove", function() {
    if(downChecker === true) {
      setPixel($(this));
    }
  });
});

// When the user stop the mousedown the downchecker is set to false and the above function does not work anymore
$("#main").on( "mouseup", function(){
  downChecker = false;
});
