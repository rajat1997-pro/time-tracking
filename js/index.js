data=[{title:"Work",timeframes:{daily:{current:5,previous:7},weekly:{current:32,previous:36},monthly:{current:103,previous:128}}},{title:"Play",timeframes:{daily:{current:1,previous:2},weekly:{current:10,previous:8},monthly:{current:23,previous:29}}},{title:"Study",timeframes:{daily:{current:0,previous:1},weekly:{current:4,previous:7},monthly:{current:13,previous:19}}},{title:"Exercise",timeframes:{daily:{current:1,previous:1},weekly:{current:4,previous:5},monthly:{current:11,previous:18}}},{title:"Social",timeframes:{daily:{current:1,previous:3},weekly:{current:5,previous:10},monthly:{current:21,previous:23}}},{title:"Self Care",timeframes:{daily:{current:0,previous:1},weekly:{current:2,previous:2},monthly:{current:7,previous:11}}}];
function buttonColor(buttonText){
  $("button").css("color","hsl(236, 100%, 87%)");

  var classString = "."+buttonText;
  $(classString).css("color","#fff");
}
function textChanger(buttonText){
  var timePeriod = "";
  if (buttonText === "daily"){
    timePeriod = "Yesterday";
  }
  else if (buttonText === "weekly") {
    timePeriod = "Last Week";
  }
  else {
    timePeriod = "Last Month";
  }
  $(".work-current").text(data[0].timeframes[buttonText].current+"hrs");
  $(".work-previous").text(timePeriod+" - "+data[0].timeframes[buttonText].previous+"hrs");

  $(".play-current").text(data[1].timeframes[buttonText].current+"hrs");
  $(".play-previous").text(timePeriod+" - "+data[1].timeframes[buttonText].previous+"hrs");

  $(".study-current").text(data[2].timeframes[buttonText].current+"hrs");
  $(".study-previous").text(timePeriod+" - "+data[2].timeframes[buttonText].previous+"hrs");

  $(".exercise-current").text(data[3].timeframes[buttonText].current+"hrs");
  $(".exercise-previous").text(timePeriod+" - "+data[3].timeframes[buttonText].previous+"hrs");

  $(".social-current").text(data[4].timeframes[buttonText].current+"hrs");
  $(".social-previous").text(timePeriod+" - "+data[4].timeframes[buttonText].previous+"hrs");

  $(".self-care-current").text(data[5].timeframes[buttonText].current+"hrs");
  $(".self-care-previous").text(timePeriod+" - "+data[5].timeframes[buttonText].previous+"hrs");
}

  $("button").on("click",function (e){
    var buttonText = e.target.textContent.toLowerCase();
    buttonColor(buttonText);
    textChanger(buttonText);
  });
