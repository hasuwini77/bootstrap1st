const modeButton = document.querySelector("img.dark-light");
const htmlElem = document.querySelector("html");
const onClickFunction = () => {
  let currentTheme = htmlElem.getAttribute("data-bs-theme");
  let myTheme = currentTheme === "light" ? "dark" : "light";
  htmlElem.setAttribute("data-bs-theme", myTheme);
  if (currentTheme === "dark") {
    modeButton.src = "./sunrise-fill.svg";
    modeButton.alt = "dark cloud";
  } else {
    modeButton.src = "./cloud-moon-fill.svg";
    modeButton.alt = "light cloud";
  }
};

modeButton.addEventListener("click", onClickFunction);
