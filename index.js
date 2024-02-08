const modeButton = document.querySelector("img.dark-light");
const htmlElem = document.querySelector("html");

// Retrieve the saved theme from local storage, or default to 'light'
const savedTheme = localStorage.getItem("theme") || "light";
htmlElem.setAttribute("data-bs-theme", savedTheme);

// Function to update theme and store in local storage
const updateTheme = (newTheme) => {
  htmlElem.setAttribute("data-bs-theme", newTheme);
  localStorage.setItem("theme", newTheme);
};

const onClickFunction = () => {
  let currentTheme = htmlElem.getAttribute("data-bs-theme");
  let myTheme = currentTheme === "light" ? "dark" : "light";

  // Update the theme and store it in local storage
  updateTheme(myTheme);

  if (currentTheme === "dark") {
    modeButton.src = "./sunrise-fill.svg";
    modeButton.alt = "dark cloud";
  } else {
    modeButton.src = "./cloud-moon-fill.svg";
    modeButton.alt = "light cloud";
  }
};

modeButton.addEventListener("click", onClickFunction);
