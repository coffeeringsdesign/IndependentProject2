$(document).ready(function() {
  $("#nameForm")submit(function(event) {
    event.preventDefault();
    var theirName = $("input#visitornameInput").val();
    $(".showthemtheirName").text(theirName);
  });



});
