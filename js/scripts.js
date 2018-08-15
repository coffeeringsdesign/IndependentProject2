$(document).ready(function() {
  $("#nameForm").submit(function(event) {
    event.preventDefault();
    var theirName = $("input#visitornameInput").val();
    $(".showthemtheirName").text(theirName);
    $("#question1").show();
  });

  $("#questionsForm").click(function(event) {
    $(".questions").hide();
    event.preventDefault();

  var choicefrontBack = $("#frontOrBackend").val();
    $("#question2").hide();
    $("#question3").hide();
    if (choicefrontBack === "1") {
    $("#question2").show();
  } else if (choicefrontBack === "2") {
    $("#question3").show();
  }
  // else if (choicefrontBack != "1" || choicefrontBack != "2") {
  //   $(".form-group").hide();
  // }

  var choiceVisData = $("#visualOrData").val();
    if (choiceVisData === "1") {
    $("#question4").show();
    event.preventDefault();
  } else if (choiceVisData === "2") {
    $("#question5").show();
    event.preventDefault();
  } else {
    alert("please try again");
  }

  var whichSites = $("#sites").val();
    if (whichSites === "1") {
    $("#cSharp").show();
  } else if (whichSites === "2") {
    $("#ruby").show();
  } else {
    alert("please try again");
    event.preventDefault();
  }

  var whichLanguage = $("#language").val();
    if (whichLanguage === "1") {
    $("#ruby").show();
  } else if (whichLanguage === "2") {
    $("#css").show();
  } else {
    alert("please try again");
    event.preventDefault();
  }

  var likeProblems = $("#problemsolving").val();
    if (likeProblems === "1") {
    $("#css").show();
  } else if (likeProblems === "2") {
    $("#ruby").show();
    }else {
      alert("please try again");
      event.preventDefault();
    }

  event.preventDefault();
  });
});
