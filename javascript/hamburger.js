function toggleSideMenu() {
	var sideMenu = document.getElementById("sideMenu");
	var sideMenuItems = sideMenu.getElementsByTagName("li");

	if (sideMenu.classList.contains("open")) {
		sideMenu.classList.remove("open");
	} else {
		sideMenu.classList.add("open");
	}
}