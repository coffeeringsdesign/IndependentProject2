$(document).ready(function() {
  $("#nameForm").submit(function(event) {
    event.preventDefault();
    var theirName = $("input#visitornameInput").val();
    $(".showthemtheirName").text(theirName);
    $("#frontVsbackend").show();
  });

  $("#questionsForm").submit(function(event) {
    $(".questions").hide();
    event.preventDefault();

    var whichSites =
    $("#sites").val();
      if (whichSites === "atlassian") {
      $("#csharp").show();
    } else { (whichSites === "hulu")
      $("#ruby").show();
    }

    var whichSites =
    $("#sites").val();
      if (whichSites === "atlassian") {
      $("#csharp").show();
    } else { (whichSites === "hulu")
      $("#ruby").show();
    }

    var choicefrontBack = $("#frontVsbackend").val();
      if (choicefrontBack === "front") {
      $("#question2").show();
    } else { (choicefrontBack === "back")
      $("#question3").show();
    }

    var whichLanguage =
    $("#language").val();
      if (whichLanguage === "object") {
      $("#ruby").show();
    } else { (whichLanguage === "traditional")
      $("#css").show();
    }

    var likeProblems =
    $("#problemsolving").val();
      if (likeProblems === "nayproblems") {
      $("#css").show();
    } else { (likeProblems === "yayproblems")
      $("#ruby").show();
    }

    var choicetoBuild =
    $("#whattoBuild").val();
      if (choicetoBuild === "sharepoint") {
      $("#csharp").show();
    } else { (choicetoBuild === "stack")
      $("#csharp").show();
    }

    var choiceScenesData =
    $("#behindorSitesdata").val()
      if (choiceScenesData === "datasites") {
      $("#ruby").show();
    } else { (choiceScenesData === "behindscenes")
      $("#question4").show();
    }


    var choiceVisData =
    $("#visualVsdata").val();
      if (choiceVisData === "visual") {
      $("#question7").show();
    } else { (choiceVisData === "data")
      $("#question6").show();
    }
  event.preventDefault();
  });

});
