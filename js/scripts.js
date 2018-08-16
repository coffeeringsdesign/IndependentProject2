$(document).ready(function() {
  $("#nameForm").submit(function(event) {
    event.preventDefault();
    var theirName = $("input#visitornameInput").val();
    $(".showthemtheirName").text(theirName);
    $("#question1").show();
  });

  $("#questionsForm").click(function(event) {
    event.preventDefault();
    var choicefrontBack = $("#frontOrBackend").val();
      if (choicefrontBack === "1") {
      $('#question2').show();
    } else if (choicefrontBack === "2") {
      $('#question3').show();
    }
    var choiceVisData = $("#visualOrData").val();
      if (choiceVisData === "1") {
      $('#question4').show();
    } else if (choiceVisData === "2") {
      $('#question5').show();
    }
    var whichSites = $("#sites").val();
      if (whichSites === "1") {
      $("#cSharp").show();
    } else if (whichSites === "2") {
      $("#ruby").show();
    }
    var whichLanguage = $("#language").val();
      if (whichLanguage === "1") {
      $("#ruby").show();
    } else if (whichLanguage === "2") {
      $("#css").show();
    }
    var likeProblems = $("#problemsolving").val();
      if (likeProblems === "1") {
      $("#css").show();
    } else if (likeProblems === "2") {
      $("#ruby").show();
      }
console.log(choicefrontBack);
  event.preventDefault();
  });
});
