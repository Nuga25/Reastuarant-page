import landingImage from "./assets/landingImg.png";
import logoImg from "./assets/soul-kitchen-logo.png";

export default function pageLoad() {
  const Content = document.querySelector("#content");
  const divContent = document.createElement("div");
  divContent.classList.add("pageLoadDiv");

  const logo = document.createElement("img");
  logo.classList.add("logoImg");
  logo.src = logoImg;
  logo.width = 200;
  document.querySelector(".logo").appendChild(logo);

  const box1 = document.createElement("div");
  box1.classList.add("pageLoadDivBox1");
  const boldText = document.createElement("h1");
  boldText.classList.add("boldText");
  boldText.textContent =
    "Discover the art of fine dining, where passion meets the plate.";
  box1.appendChild(boldText);

  const lilIntroText = document.createElement("p");
  lilIntroText.classList.add("lilIntroText");
  lilIntroText.textContent =
    "Experience the essence of culinary adventure at SoulKitchen, where each bite takes you on a journey of flavor discovery. Join us for a dining experience that will delight your senses and keep you coming back for more. Bringing bold, authentic flavors to your plate, crafted with love and inspired by the heart of African cuisine.";
  box1.appendChild(lilIntroText);

  const menuButton = document.createElement("button");
  menuButton.classList.add("checkMenuBtn");
  menuButton.textContent = "Our Menu";
  box1.appendChild(menuButton);

  const box2 = document.createElement("div");
  box2.classList.add("pageLoadDivBox2");
  const image = document.createElement("img");
  image.src = landingImage;
  image.classList.add("landingImg");
  box2.appendChild(image);

  divContent.appendChild(box1);
  divContent.appendChild(box2);
  Content.appendChild(divContent);

  //footer
  const footer = document.createElement("div");
  footer.classList.add("footer");
  const footerText = document.createElement("a");
  footerText.classList.add("footerText");
  footerText.textContent = "Designed and Developed by ifeeee___";
  footerText.href = "https://github.com/Nuga25";

  footer.appendChild(footerText);
  Content.appendChild(footer);
}
