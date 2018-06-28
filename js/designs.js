// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



// the following code is just to make the table without other function enable.

$('.makeGrid').click(function () {
  removeTable(); // reset the Grid
  let canvasHeight = $('#inputHeight').val(); // assign input height to canvasHeight variable.
  let canvasWidth = $('#inputWeight').val(); // asssign input width to canvasWidth variable.
  // Your code goes here!
  for (i = 0; i < canvasHeight; i++) {
    $('#pixelCanvas').append('<tr></tr>'); // add table row to the table.
    for (j = 0; j < canvasWidth; j++) {
      $('#pixelCanvas').append('<td></td>'); // add table data cell to the table.

    }
  }
});



function removeTable() { // function for removing existing table.
  $('#pixelCanvas').empty(); // removes the table. 
}

// Color picker for painting
$('table').on('click', "td", function () { // color picker function.
  let paintColor = $('#colorPicker').val(); // assigns inputted color to the paintColor variable.
  $(this).css("background-color", paintColor);
});


$('table').on('dblclick', "td", function () { // erase function which sets the background color to no-color by double clicking on it.
  $(this).css("background-color", "");
});

function resetColor() {
  $('td').css({"background-color": ""});
}

function printImage() {
  let canvas = document.getElementById('canvas');
  let image = canvas.toDataURL();
  console.log(image)
}