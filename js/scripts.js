$(document).ready(function() {
  $("#nameForm").submit(function(event) {
    event.preventDefault();
    var theirName = $("input#visitornameInput").val();
    $(".showthemtheirName").text(theirName);
  });

  $("#questionsForm").submit(function(event) {
    event.preventDefault();
    var thisisIt = $("#gender").val();
    $(".questions").hide();
      if (thisisIt === "a") {
      $("#visualVsdata").show();
    };
  });
});




    // $(".questions").hide();
    //       if (choseBack)  {
    //       $("#behindorSitesdata").show();
    //     } else if (choseFront) {
    //       $("#language").show();
    //
    //
    //     } else if (choseFront) {
    //       $("#language").show();
    //     } else if (choseFront) {
    //       $("#language").show();
    //     } else if (choseFront) {
    //       $("#language").show();
    //     } else if (choseFront) {
    //       $("#language").show();
    //     } else if (choseFront) {
    //       $("#language").show();








    //
    // if ( -----------------) {
    //   $("#css").show();
    // } else if (------------) {
    //   $("#ruby").show();
    // } else if (------------) {
    //   $("cSharp").show();
    // } else {
    //   prompt("please try again");
    // });
