$(document).ready(function() {
  $("#nameForm").submit(function(event) {
    event.preventDefault();
    var theirName = $("input#visitornameInput").val();
    $("#showthemtheirName").text(theirName);
    $("#question1").hide().delay(1000).fadeIn(2000);
    $("#nameQuestion").fadeIn(2000);
    console.log(theirName);
  });

  $("#question1").submit(function(event) {
    event.preventDefault();
    var frontOrBackend = $("input[name='frontOrBackend']:checked").val();
    if (frontOrBackend === "1") {
    $("#question2").fadeIn(2000);
  } else if (frontOrBackend === "2") {
    $("#question3").fadeIn(2000);
  }
  });

  $("#question2").submit(function(event) {
    event.preventDefault();
    var visualOrData = $("input[name='visualOrData']:checked").val();
    if (visualOrData === "1") {
    $("#question4").fadeIn(2000);
  } else if (visualOrData === "2") {
    $("#question5").fadeIn(2000);
  }
  });

  $("#question3").submit(function(event) {
    event.preventDefault();
    var likeProblems = $("input[name='problemsolving']:checked").val();
    if (likeProblems === "1") {
    $("#css").fadeIn(2000);
  } else if (likeProblems === "2") {
    $("#ruby").fadeIn(2000);
  }
  });

  $("#question4").submit(function(event) {
    event.preventDefault();
    var whichLanguage = $("input[name='language']:checked").val();
    if (whichLanguage === "1") {
    $("#ruby").fadeIn(2000);
  } else if (whichLanguage === "2") {
    $("#css").fadeIn(2000);
  }
  });

  $("#question5").submit(function(event) {
    event.preventDefault();
    var whichSites = $("input[name='sites']:checked").val();
    if (whichSites === "1") {
    $("#cSharp").fadeIn(2000);
  } else if (whichSites === "2") {
    $("#ruby").fadeIn(2000);
  }
  });
});
