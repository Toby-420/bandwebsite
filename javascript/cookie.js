// Technically not cookie but who gives a shit
let cookiesAccepted = false;
let themePreference = localStorage.getItem("themePreference");
let currentTheme = themePreference || "styles/light.css";

if (themePreference != null) {
	cookiesAccepted = true;
}

document.addEventListener("DOMContentLoaded", function () {
  applyTheme(currentTheme);
  if (!themePreference) {
    document.getElementById("cookie-consent").style.display = "block";
  }
});

function toggleTheme() {
  currentTheme = currentTheme === "styles/light.css" ? "styles/dark.css" : "styles/light.css";
  applyTheme(currentTheme);
  console.log(cookiesAccepted);
  if (cookiesAccepted) {
    updateThemePreference(currentTheme);
  }
}

function acceptCookie() {
  document.getElementById("cookie-consent").style.display = "none";
  cookiesAccepted = true;
  updateThemePreference(currentTheme);
}

function rejectCookie() {
  document.getElementById("cookie-consent").style.display = "none";
  localStorage.removeItem("themePreference");
  themePreference = null; // Reset themePreference variable
  cookiesAccepted = false;
}

function updateThemePreference(theme) {
  localStorage.setItem("themePreference", theme);
  themePreference = theme; // Update themePreference variable
}

function applyTheme(theme) {
  document.getElementById("css_standard").setAttribute("href", theme);
  
  const hiringSVGContainer = document.getElementById("hiringSVG");
  const jobsSVGContainer = document.getElementById("jobsSVG");
  
  if (currentTheme === "styles/light.css") {
	  hiringSVGContainer.innerHTML = `<img class="svg preview littleimg space" src="images/icons/light-calendar.svg" alt="Calendar Icon (For booking)">`;
	  jobsSVGContainer.innerHTML = `<img class="svg preview littleimg space" src="images/icons/light-hired.svg" alt="Hired Icon (For jobs)">`;
  } else {
	  hiringSVGContainer.innerHTML = `<img class="svg preview littleimg space" src="images/icons/dark-calendar.svg" alt="Calendar Icon (For booking)">`;
	  jobsSVGContainer.innerHTML = `<img class="svg preview littleimg space" src="images/icons/dark-hired.svg" alt="Hired Icon (For jobs)">`;
  }
}
