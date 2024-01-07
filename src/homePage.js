import homePicture from "./restaurant.jpg";

export default function homePage() {
  const main = document.createElement("main");
  const h1 = document.createElement("h1");
  const section = document.createElement("section");
  const textAboutRest = document.createElement("p");
  const imageDiv = document.createElement("div");
  const image = new Image();

  main.id = "main";

  h1.textContent = "My Super restaurant";
  h1.className = "title";
  main.appendChild(h1);

  section.className = "home";
  textAboutRest.textContent = `Our restaurant is an exquisite haven that captivates visitors with its
  inherent beauty and culinary excellence. The ambiance is a harmonious
  blend of inviting warmth and tasteful decor, creating an atmosphere
  that resonates with both elegance and comfort. The culinary offerings
  are a symphony of flavors, each dish meticulously crafted to delight
  the senses. From the artfully presented plates to the delectable
  aromas wafting through the air, every aspect of your restaurant speaks
  to a commitment to excellence. It is a haven where guests can indulge
  in not just a meal, but a sensorial experience that leaves a lasting
  impression of culinary delight and aesthetic pleasure.`;
  section.appendChild(textAboutRest);

  imageDiv.className = "image-container";
  image.src = homePicture;
  image.alt = "Restaurant image";
  imageDiv.appendChild(image);
  section.appendChild(imageDiv);
  main.appendChild(section);

  return main;
}
