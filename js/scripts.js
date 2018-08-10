$(document).ready(function() {
  $("#nameForm").submit(function(event) {

    var theirName = $("input#visitornameInput").val();
    $(".showthemtheirName").text(theirName);


    if ( -----------------) {
      $("#javascript").show();
    } else if (------------) {
      $("#ruby").show();
    } else if (------------) {
      $("cSharp").show();
    } else {
      prompt("please try again");
    });
  
  });

event.preventDefault();
});
