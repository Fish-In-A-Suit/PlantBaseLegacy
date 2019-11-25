$(document).ready(function() {
  console.log("Loading content...");

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
})
