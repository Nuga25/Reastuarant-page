import logoImg from "./assets/soul-kitchen-logo.png";
import jollofImg from "./assets/bg-img-desktop.jpeg";

function createMenuItem(name, description, image, mainContainer) {
  const foodImage = document.createElement("img");
  foodImage.src = image;
  foodImage.width = 300;

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
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
  introText.textContent =
    "Welccome to Our Menu. Pick from our carefully curated list of food";
  document.querySelector("#content").appendChild(introText);

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menuDiv");
  const mainMenuDiv = document.createElement("div");
  mainMenuDiv.classList.add("mainMenuDiv");
  mainMenuDiv.appendChild(menuDiv);
  document.querySelector("#content").appendChild(mainMenuDiv);

  createMenuItem(
    "Jollof Rice",
    "Its wayyyy better that Ghana's",
    jollofImg,
    menuDiv
  );

  createMenuItem(
    "Jollof Rice",
    "Its wayyyy better that Ghana's",
    jollofImg,
    menuDiv
  );

  createMenuItem(
    "Jollof Rice",
    "Its wayyyy better that Ghana's",
    jollofImg,
    menuDiv
  );

  createMenuItem(
    "Jollof Rice",
    "Its wayyyy better that Ghana's",
    jollofImg,
    menuDiv
  );

  createMenuItem(
    "Jollof Rice",
    "Its wayyyy better that Ghana's",
    jollofImg,
    menuDiv
  );

  createMenuItem(
    "Jollof Rice",
    "Its wayyyy better that Ghana's",
    jollofImg,
    menuDiv
  );
}
