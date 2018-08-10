$(document).ready(function() {
  $("#nameForm").submit(function(event) {
    event.preventDefault();
    var theirName = $("input#visitornameInput").val();
    $(".showthemtheirName").text(theirName);
  });

  $("#questionsForm").submit(function(event) {
    event.preventDefault();
    $(".questions").hide();

    var choicefrontBack = $("#frontVsbackend").val();
      if (choicefrontBack === "front") {
      $("#visualVsdata").show();
    } else (choicefrontBack === "back") {
      $("#behindorSitesdata").show();
    }
    var choiceVisData =
    $("#visualVsdata").val();
      if (choiceVisData === "visual") {
      $("#sites").show();
    } else (choiceVisData === "data") {
      $("#language").show();
    }
    var choiceScenesData =
    $("#behindorSitesdata").val()
      if (choiceScenesData === "datasites") {
      $("#ruby").show();
    } else (choiceScenesData === "behindscenes") {
      $("#whattoBuild").show();
    }
    var choicetoBuild =
    $("#whattoBuild")val();
      if (choicetoBuild === "sharepoint") {
      $("#csharp").show();
    } else (choicetoBuild === "stack") {
      $("#csharp").show();
    }
    var likeProblems =
    $("#problemsolving")val();
      if (likeProblems === "nayproblems") {
      $("#css").show();
    } else (likeProblems === "yayproblems") {
      $("#ruby").show();
    }
    var whichLanguage =
    $("#language").val();
      if (whichLanguage === "object") {
      $("#ruby").show();
    } else (whichLanguage === "traditional") {
      $("#css").show();
    }
    var whichSites =
    $("#sites").val();
      if (whichSites === "atlassian") {
      $("#csharp").show();
    } else (whichSites === "hulu") {
      $("#ruby").show();
    }
  });
});
