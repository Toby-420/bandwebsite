function toggleSideMenu() {
    var sideMenu = document.getElementById("sideMenu");
    
    if (sideMenu.style.right === "-250px" || sideMenu.style.right === "") {
        sideMenu.style.right = "0";
    } else {
        sideMenu.style.right = "-250px";
    }
}
