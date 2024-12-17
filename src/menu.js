import logoImg from "./assets/soul-kitchen-logo.png";
import jollofImg from "./assets/bg-img-desktop.jpeg";
import suyaImg from "./assets/suya.jpg";
import egusiImg from "./assets/egusi.jpg";
import fishImg from "./assets/fish.jpg";
import plantainImg from "./assets/plantain.jpg";
import puffpuffImg from "./assets/puffpuff.jpg";

function createMenuItem(name, description, image, mainContainer) {
  const foodImage = document.createElement("img");
  foodImage.classList.add("foodImage");
  foodImage.src = image;
  foodImage.width = 400;
  foodImage.height = 200;

  const foodName = document.createElement("h2");
  foodName.classList.add("foodName");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.classList.add("foodDescription");
  foodDescription.textContent = description;
  console.log(`the food name is ${name}`);

  const menuItem = document.createElement("div");
  menuItem.classList.add("menuItem");
  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);
  mainContainer.appendChild(menuItem);
}

export default function menuPage() {
  const logo = document.createElement("img");
  logo.src = logoImg;
  logo.width = 200;
  document.querySelector(".logo").appendChild(logo);

  const introText = document.createElement("h1");
  introText.classList.add("menuIntroText");
  introText.textContent = "Our Exquisuite Menu";
  document.querySelector("#content").appendChild(introText);

  const introText2 = document.createElement("p");
  introText2.classList.add("menuIntroText2");
  introText2.textContent =
    "At SoulKitchen, each dish is a masterpiece, crafted to deliver bold flavors and an unforgettable dining experience.";
  document.querySelector("#content").appendChild(introText2);

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menuDiv");
  const mainMenuDiv = document.createElement("div");
  mainMenuDiv.classList.add("mainMenuDiv");
  mainMenuDiv.appendChild(menuDiv);
  document.querySelector("#content").appendChild(mainMenuDiv);

  createMenuItem(
    "Smoky Jollof Supreme",
    "A rich and smoky West African classic, cooked with fragrant spices, tomatoes, and peppers. Served with your choice of grilled chicken or spicy prawns.",
    jollofImg,
    menuDiv
  );

  createMenuItem(
    "Spicy Suya Chops",
    "Tender beef chops marinated in a fiery suya spice blend, grilled to perfection, and served with a tangy pepper sauce.",
    suyaImg,
    menuDiv
  );

  createMenuItem(
    "Egusi Royale",
    "A hearty melon seed stew, simmered with spinach and a medley of exotic spices. Paired with pounded yam or fluffy rice.",
    egusiImg,
    menuDiv
  );

  createMenuItem(
    "Plantain Paradise",
    "Crispy, golden-fried plantains drizzled with a honey glaze and served with a creamy avocado dip.",
    plantainImg,
    menuDiv
  );

  createMenuItem(
    "SoulKitchen Signature Grilled Fish",
    "Fresh whole fish marinated in herbs and spices, char-grilled to bring out its natural flavors. Accompanied by spicy vegetable slaw and plantain.",
    fishImg,
    menuDiv
  );

  createMenuItem(
    "Tasty Puff-Puff",
    "Light and fluffy golden puff-puffs, delicately dusted with spiced cinnamon sugar and served with a side of velvety chocolate sauce or any dip of choice.",
    puffpuffImg,
    menuDiv
  );

  //footer
  const footer = document.createElement("div");
  footer.classList.add("footer");
  const footerText = document.createElement("a");
  footerText.classList.add("footerText");
  footerText.textContent = "Designed and Developed by ifeeee___";
  footerText.href = "https://github.com/Nuga25";

  footer.appendChild(footerText);
  document.querySelector("#content").appendChild(footer);
}
