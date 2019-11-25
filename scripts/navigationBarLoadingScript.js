/*This scripts loads up the navigation bar*/
$(document).ready(function() {
  console.log("Loading navigation bar...");

  $('.navigationBar').load("core/NavigationBar.html", null, function(responsetxt, statusTxt, xhr) {
    console.log("Loading navigation bar slider...");

    /*This makes the slider slide along the elements*/
    $('li').on('click', function() {
      console.log("Click!");
      console.log("clicked in li element with id: " + $(this).attr("id"));
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    })

    var nb = $(".navigationBar");
    var contentDiv = $("#contentDiv");

    var indoorPlants = nb.find("#indoor_plants");
    var outdoorPlants = nb.find("#outdoor_plants");
    var decorations = nb.find("#decorations");
    var tools = nb.find("#tools");
    console.log(indoorPlants + " " + outdoorPlants + " " + decorations + " " + tools);

    indoorPlants.on("click", function() {
      console.log("Loading indoor_plants.html into contentDiv");
      contentDiv.load("indoor_plants.html");
    })

    outdoorPlants.on("click", function() {
      console.log("Loading outdoor_plants.html into contentDiv");
      contentDiv.load("outdoor_plants.html");
    })

    decorations.on("click", function() {
      console.log("Loading decorations.html into contentDiv");
      contentDiv.load("decorations.html");
    })

    tools.on("click", function() {
      console.log("Loading tools.html into contentDiv");
      contentDiv.load("tools.html");
    })
  });
})
