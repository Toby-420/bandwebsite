// Technically not cookie but who gives a shit
let themePreference = localStorage.getItem("themePreference");
let currentTheme = themePreference || "https://deepsealemons.co.uk/styles/light.css";
  
const hiringSVGContainer = document.getElementById("hiringSVG");
const jobsSVGContainer = document.getElementById("jobsSVG");
const X_Logo = document.getElementById("X_Logo");

// Add an event listener for the 'load' event
window.addEventListener("load", function () {
	// Apply the theme based on the user's preference
	if (themePreference != null) {
		cookiesAccepted = true;
		applyTheme(currentTheme);
	} else {
		applyTheme("https://deepsealemons.co.uk/styles/light.css");
	}
});

function toggleTheme() {
  document.body.style.visibility = "hidden";
  currentTheme = currentTheme === "https://deepsealemons.co.uk/styles/light.css" ? "https://deepsealemons.co.uk/styles/dark.css" : "https://deepsealemons.co.uk/styles/light.css";
  applyTheme(currentTheme);
  updateThemePreference(currentTheme);
  document.body.style.visibility = "visible";
}

function updateThemePreference(theme) {
  localStorage.setItem("themePreference", theme);
  themePreference = theme; // Update themePreference variable
}

function applyTheme(theme) {
  document.getElementById("css_standard").setAttribute("href", theme);
  
  if (currentTheme === "https://deepsealemons.co.uk/styles/light.css") {
	  hiringSVGContainer.setAttribute("src", "images/icons/light-calendar.svg");
	  jobsSVGContainer.setAttribute("src", "images/icons/light-hired.svg");
	  X_Logo.setAttribute("src", "images/icons/x-black.png");
  } else {
	  hiringSVGContainer.setAttribute("src", "images/icons/dark-calendar.svg");
	  jobsSVGContainer.setAttribute("src", "images/icons/dark-hired.svg");
	  X_Logo.setAttribute("src", "images/icons/x-white.png");
  }
}