function toggleSideMenu() {
  var sideMenu = document.getElementById("sideMenu");
  var sideMenuItems = sideMenu.getElementsByTagName("li");

  if (sideMenu.classList.contains("open")) {
    for (var i = 0; i < sideMenuItems.length; i++) {
      sideMenuItems[i].style.transitionDelay = "";
    }
    sideMenu.classList.remove("open");

    // Delay setting display: none; until after the closing animation
    setTimeout(function() {
      sideMenu.style.display = "none";
    }, 300); // Adjust the delay time (in milliseconds) to match your animation duration
  } else {
    // Set display: block; before adding the open class
    sideMenu.style.display = "grid";

    // Delay adding the open class until after the display property is set
    setTimeout(function() {
      sideMenu.classList.add("open");
      for (var i = 0; i < sideMenuItems.length; i++) {
        sideMenuItems[i].style.transitionDelay = (i * 20) + "ms";
      }
    }, 0); // Delay of 0 milliseconds to ensure the display property is set first
  }
}
