        function toggleSideMenu() {
            var sideMenu = document.getElementById("sideMenu");
            var isOpen = sideMenu.getAttribute("aria-expanded") === "true";
            sideMenu.setAttribute("aria-expanded", !isOpen);
            sideMenu.classList.toggle("show");
        }