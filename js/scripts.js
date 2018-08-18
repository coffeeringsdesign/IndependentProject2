$(document).ready(function() {
  $("#nameForm").submit(function(event) {
    event.preventDefault();
    var theirName = $("input#visitornameInput").val();
    $("#showthemtheirName").text(theirName);
    $("#question1").hide().delay(2000).fadeIn(4000);
    $("#nameQuestion").fadeIn();;
    console.log(theirName);
  });

  $("#question1").submit(function(event) {
    event.preventDefault();
    var frontOrBackend = $("input[name='frontOrBackend']:checked").val();
    if (frontOrBackend === "1") {
    $("#question2").fadeIn();
  } else if (frontOrBackend === "2") {
    $("#question3").fadeIn();
  }
});

  $("#question2").submit(function(event) {
    event.preventDefault();
    var visualOrData = $("input[name='visualOrData']:checked").val();
    if (visualOrData === "1") {
    $("#question4").fadeIn();
  } else if (visualOrData === "2") {
    $("#question5").fadeIn();
  }
  });

  $("#question3").submit(function(event) {
    event.preventDefault();
    var likeProblems = $("input[name='problemsolving']:checked").val();
    if (likeProblems === "1") {
    $("#css").show();
  } else if (likeProblems === "2") {
    $("#ruby").show();
    }
    });

  $("#question4").submit(function(event) {
    event.preventDefault();
    var whichLanguage = $("input[name='language']:checked").val();
    if (whichLanguage === "1") {
    $("#ruby").show();
  } else if (whichLanguage === "2") {
    $("#css").show();
  }
});

  $("#question5").submit(function(event) {
    event.preventDefault();
    var whichSites = $("input[name='sites']:checked").val();
      if (whichSites === "1") {
      $("#cSharp").fadeIn();
    } else if (whichSites === "2") {
      $("#ruby").fadeIn();
    }
  });
});
