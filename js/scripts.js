$(document).ready(function() {
  $("#nameForm").submit(function(event) {

    var theirName = $("input#visitornameInput").val();
    $(".showthemtheirName").text(theirName);




event.preventDefault();
});
