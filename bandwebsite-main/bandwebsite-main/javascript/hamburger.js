function toggleSideMenu() {
    var sideMenu = document.getElementById("sideMenu");
    var sideMenuItems = sideMenu.getElementsByTagName("li");

    if (sideMenu.classList.contains("open")) {
        sideMenu.classList.remove("open");
        for (var i = 0; i < sideMenuItems.length; i++) {
            sideMenuItems[i].style.transition = "";
            sideMenuItems[i].style.opacity = 0;
            sideMenuItems[i].style.transform = "translateX(100%)";
        }
    } else {
        sideMenu.classList.add("open");
        for (var i = 0; i < sideMenuItems.length; i++) {
            sideMenuItems[i].style.transition = "opacity 0.3s ease, transform 0.3s ease";
            sideMenuItems[i].style.opacity = 1;
            sideMenuItems[i].style.transform = "translateX(0)";
        }
    }
}