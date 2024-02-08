const modeButton = document.querySelector(".dark-light");
const htmlElem = document.querySelector("html");
const onClickFunction = () => {
  let currentTheme = htmlElem.getAttribute("data-bs-theme");
  let myTheme = currentTheme === "light" ? "dark" : "light";
  htmlElem.setAttribute("data-bs-theme", myTheme);
};

modeButton.addEventListener("click", onClickFunction);
