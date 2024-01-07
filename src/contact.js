export default function contact() {
  const main = document.createElement("main");
  const h1 = document.createElement("h1");
  const section = document.createElement("section");
  const contactText = document.createElement("h3");
  const contactWay = document.createElement("ul");
  const emailContact = document.createElement("li");
  const phoneContact = document.createElement("li");
  const instagramContact = document.createElement("li");
  const twitterContact = document.createElement("li");

  main.id = "main";

  h1.textContent = "Contact";
  h1.className = "title";
  main.appendChild(h1);

  section.className = "contact";
  contactText.textContent = "Please contact us via ";

  emailContact.textContent = "vjlkfo@gmail.com";
  phoneContact.textContent = "4798-9978";
  instagramContact.textContent = "@vrestaurant";
  twitterContact.textContent = "@v_restaurant";
  contactWay.appendChild(emailContact);
  contactWay.appendChild(phoneContact);
  contactWay.appendChild(instagramContact);
  contactWay.appendChild(twitterContact);

  section.appendChild(contactText);
  section.appendChild(contactWay);

  main.appendChild(section);

  return main;
}
