var meter = document.getElementById("meter");
let val = 0;

function foo() {
  $(".container").css("visibility", "hidden");
  for (i = 0; i < 1; i++) {
    val = val + 0.1;
    meter.setAttribute("value", val);
  }
  if (val >= 70) {
    $(".loading").css("display", "none");
    $(".container").css("visibility", "visible");

  } else {
    if (val > 20 && val < 29) {
      $('#status__text').html("Loading Colors...");
    } else if (val > 30 && val < 39) {
      $('#status__text').html("Loading Assets...");
    } else if (val > 40 && val < 49) {
      $('#status__text').html("Loading Tools...");
    } else if (val > 50 && val < 59) {
      $('#status__text').html("Almost Done...");
    } else if (val > 60) {
      $('#status__text').html("Let's get Started...");
    }
    setTimeout(foo, 2);
  }
}
foo();

$('#submitBtn').click(function () {
  makeGrid();
});
// alert fucntion for existing table
$('#inputWidth').on("keydown", function (e) {
  let key = e.keyCode;
  if (key === 13) {
    makeGrid();
  }
});
//  table creating function

function makeGrid() {

  removeTable(); // reset the Grid
  let canvasHeight = $('#inputHeight').val(); // assign input height to canvasHeight variable.
  let canvasWidth = $('#inputWidth').val(); // asssign input width to canvasWidth variable.
  if ((canvasHeight != "") && (canvasWidth != "")) {
    $('.input__div').css("display", "none");
    $('.tools').css("display", "initial");
    for (i = 0; i < canvasHeight; i++) {
      $('#canvas').append('<tr></tr>'); // add table row to the table.
      for (j = 0; j < canvasWidth; j++) {
        $('tr:last').append('<td></td>'); // add table data cell to the table.

      }
    }
  } else {
    alert("Please Choose Grid Size by providing the correct number!!!");
  }
}


function removeTable() { // function for removing existing table.
  $('#canvas').empty(); // removes the table. 
}

// tool select effect function 
let tool;
let mouseState = false;
// brush select effect
$('.paint__brush').on("click", function () {
  tool = "brush";
  $('.fa-paint-brush').css("border", "1px solid rgb(170, 170, 170)");
  $('.fa-paint-brush').css("box-shadow", "5px 5px 10px grey");
  $('.fa-eraser').css("border", "none");
  $('.fa-eraser').css("box-shadow", "none");
});
// eraser select effect
$('.eraser').on("click", function () {
  tool = "eraser";
  $('.fa-eraser').css("border", "1px solid rgb(170, 170, 170)");
  $('.fa-eraser').css("box-shadow", "5px 5px 10px grey");
  $('.fa-paint-brush').css("border", "none");
  $('.fa-paint-brush').css("box-shadow", "none");
});


// these two event listener is setting the mouse state
$(document).on("mousedown", function () {
  mouseState = true;
})
$(document).on("mouseup", function () {
  mouseState = false;
})

//  paint on click function 

$('table').on("click", "td", function () {
  let paintColor = $('#colorPicker').val();
  if (tool === "brush") {
    $(this).css("background-color", paintColor);
  } else if (tool === "eraser") {
    $(this).css("background-color", "");
  }
})

// mouse left click and drag to paint function and eraser fucntion 

$('table').on('mousemove', 'td', function () { // color picker function.
  let paintColor = $('#colorPicker').val();
  if ((mouseState == true) && (tool === "brush")) {
    $(this).css("background-color", paintColor);
  } else if ((tool === "eraser") && (mouseState === true)) {
    $(this).css("background-color", "");
  }
});

//  delete table function 

$('.close').on("click", function () {
  hasTable = false;
  $('#canvas').empty();
  $('.input__div').css("display", "");
  $('.tools').css("display", "none");
});

// color reset function

$('.reset').on("click", function () {
  $('td').css("background-color", "");
})

// event listener for enter key to trigger the submit button