import homePage from "./homePage";
import contact from "./contact";
import menu from "./menu";
import footer from "./footer";
import navBar from "./navBar";
import "./style.css";

const content = document.getElementById("content");
document.body.insertBefore(navBar(), content);
// content.appendChild(homePage());
content.appendChild(homePage());
document.body.appendChild(footer(), content);

const homeNav = document.getElementById("home");
const menuNav = document.getElementById("menu");
const contactNav = document.getElementById("contact");

homeNav.addEventListener("click", () => {
  content.removeChild(document.getElementById("main"));
  content.appendChild(homePage());
});

menuNav.addEventListener("click", () => {
  content.removeChild(document.getElementById("main"));
  content.appendChild(menu());
});

contactNav.addEventListener("click", () => {
  content.removeChild(document.getElementById("main"));
  content.appendChild(contact());
});
