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

  });
})
