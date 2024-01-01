function toggleSideMenu() {
  var sideMenu = document.getElementById("sideMenu");
  var isOpen = sideMenu.classList.contains("open");

  // Define the HTML content you want to insert
  var htmlContent = `
    <ul>
      <li><a href="index">Home</a></li>
      <li><a href="members" target="_self">Meet the members</a></li>
      <li><a href="booking" target="_self">Book us / Events</a></li>
      <li><a href="jobs" target="_self">Get hired / Jobs</a></li>
      <li><a href="gallery" target="_self">Gallery</a></li>
      <li><a href="tabs" target="_self">Tabs</a></li>
      <li><a href="wishlist" target="_self">Wishlist</a></li>
      <li><a href="inclusivity" target="_self">Inclusivity</a></li>
      <li><a href="LICENSE" target="_self">License</a></li>
	  <hr>
	  <li><button id="theme-toggle" class="theme blue" onclick="toggleTheme()">Toggle Theme</button></li>
    </ul>
  `;

  if (isOpen) {
    // If the side menu is open, remove open class and animate the items out
    sideMenu.classList.remove("open");
      sideMenu.innerHTML = htmlContent;
  } else {
    // If the side menu is closed, set innerHTML first, then add the open class and animate the items in
    sideMenu.innerHTML = htmlContent;
      sideMenu.classList.add("open");
  }
}
