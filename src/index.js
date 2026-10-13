import "./style.css";
console.log ('hello');
alert("Hello! I am an alert box!!");

import loadHomepage from "./homepage.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

const content = document.querySelector("#content");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Clear the current content
    content.replaceChildren();

    // Load the page for the clicked button
    if (button.id === "home") {
      loadHomepage();
    } else if (button.id === "menu") {
      loadMenu();
    } else if (button.id === "about") {
      loadAbout();
    }
  });
});

// Show the homepage when the site first loads
loadHomepage();