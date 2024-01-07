export default function menu() {
  const main = document.createElement("main");
  const h1 = document.createElement("h1");

  const menu = {
    drinks: ["Argentina wine", "Coca", "Fanta", "Water"],
    foods: ["Asado", "Hamburger", "Chorizo", "Mila on the dish", ""],
    desserts: [
      "Strawerry",
      "Flan",
      "Bread pudin",
      "Ice Cream",
      "Banana with Dulce de leche",
    ],
  };

  main.id = "main";

  h1.textContent = "Menu";
  h1.className = "title";
  main.appendChild(h1);

  for (let menuSection in menu) {
    const section = document.createElement("section");
    const sectionTitle = document.createElement("h3");
    section.className = "menu-section";
    sectionTitle.textContent = menuSection.toUpperCase();
    section.appendChild(sectionTitle);
    const menuSectionList = document.createElement("ul");
    for (let i = 0; i < menu[menuSection].length; i++) {
      const menuItem = document.createElement("li");
      menuItem.textContent = menu[menuSection][i];
      menuSectionList.appendChild(menuItem);
    }
    section.appendChild(menuSectionList);
    main.appendChild(section);
  }

  return main;
}
