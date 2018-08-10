$(document).ready(function() {
  $("#nameForm").submit(function(event) {

    var theirName = $("input#visitornameInput").val();
    $(".showthemtheirName").text(theirName);


    var choseBack = $("#frontVsbackend").val;
    var choseFront = $("#frontVsbackend").val;
    var choseVisual = $("#visualVsdata").val;
    var choseData = $("#visualVsdata").val;
    var choseDatasites = $("#behindorSitesdata").val;
    var choseBehind = $("#behindorSitesdata").val;
    var choseShare = $("#whattoBuild").val;
    var choseStack = $("#whattoBuild").val;
    var choseYay = $("#problemsolving").val;
    var choseNay = $("#problemsolving").val;
    var choseObject = $("#language").val;
    var choseTraditional = $("#language").val;
    var choseAtlas = $("#sites").val;
    var choseHulu = $("#sites").val;


    $(".questions").hide();
          if (choseBack)  {
          $("#behindorSitesdata").show();
        } else if (choseFront) {
          $("#language").show();

          
        } else if (choseFront) {
          $("#language").show();
        } else if (choseFront) {
          $("#language").show();
        } else if (choseFront) {
          $("#language").show();
        } else if (choseFront) {
          $("#language").show();
        } else if (choseFront) {
          $("#language").show();








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
    event.preventDefault();
  });


});
