$(document).ready(function() {
  $("#nameForm").submit(function(event) {
    event.preventDefault();
    var theirName = $("input#visitornameInput").val();
    $(".showthemtheirName").text(theirName);
    $("#frontVsbackend").show();
  });

  $("#questionsForm").submit(function(event) {
    $(".questions").hide();
    var choicefrontBack = $("#frontVsbackend").val();
      if (choicefrontBack === "front") {
      $("#visualVsdata").show();
    } else (choicefrontBack === "back")
      $("#behindorSitesdata").show();
    $(".questions").hide();
    var choiceVisData =
    $("#visualVsdata").val();
      if (choiceVisData === "visual") {
      $("#sites").show();
    } else (choiceVisData === "data")
      $("#language").show();
    $(".questions").hide();
    var choiceScenesData =
    $("#behindorSitesdata").val()
      if (choiceScenesData === "datasites") {
      $("#ruby").show();
    } else (choiceScenesData === "behindscenes")
      $("#whattoBuild").show();
    $(".questions").hide();
    var choicetoBuild =
    $("#whattoBuild").val();
      if (choicetoBuild === "sharepoint") {
      $("#csharp").show();
    } else (choicetoBuild === "stack")
      $("#csharp").show();
    $(".questions").hide();
    var likeProblems =
    $("#problemsolving").val();
      if (likeProblems === "nayproblems") {
      $("#css").show();
    } else (likeProblems === "yayproblems")
      $("#ruby").show();
    $(".questions").hide();
    var whichLanguage =
    $("#language").val();
      if (whichLanguage === "object") {
      $("#ruby").show();
    } else (whichLanguage === "traditional")
      $("#css").show();
    $(".questions").hide();
    var whichSites =
    $("#sites").val();
      if (whichSites === "atlassian") {
      $("#csharp").show();
    } else (whichSites === "hulu")
      $("#ruby").show();

  event.preventDefault();
  });

});
