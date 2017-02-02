var rows = 3;
var columns = 3;
var $row = jQuery("<div />", {
  class: 'row'
});
var $square = $("<div />", {
  class: 'square'
});

jQuery(document).ready(function () {
  //add columns to the the temp row object
  for (var i = 0; i < columns; i++) {
      $row.append($square.clone());
    }
    //clone the temp row object with the columns to the wrapper
    for (var i = 0; i < rows; i++) {
      $("#wrapper").append($row.clone());
  }
});
