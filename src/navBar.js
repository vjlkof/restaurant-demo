export default function navBar() {
  const navElement = document.createElement("nav");
  const navOptions = document.createElement("ul");
  const home = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");

  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";
  home.id = "home";
  menu.id = "menu";
  contact.id = "contact";
  navOptions.appendChild(home);
  navOptions.appendChild(menu);
  navOptions.appendChild(contact);

  navElement.appendChild(navOptions);

  return navElement;
}
