import logoImg from "./assets/soul-kitchen-logo.png";

export default function aboutPage() {
  const logo = document.createElement("img");
  logo.src = logoImg;
  logo.width = 200;
  document.querySelector(".logo").appendChild(logo);

  const aboutDivContainer = document.createElement("div");
  aboutDivContainer.classList.add("aboutDivContainer");
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("aboutDiv");

  const aboutIntroText = document.createElement("h1");
  aboutIntroText.classList.add("aboutIntroText");
  aboutIntroText.textContent = "About Us";

  const aboutMainText = document.createElement("p");
  aboutMainText.classList.add("aboutMainText");
  aboutMainText.innerHTML =
    "Welcome to <b>SoulKitchen</b>, where every meal tells a story of Africa’s rich and diverse culinary heritage.<br><br> At SoulKitchen, we believe food is more than just sustenance; it’s a celebration of culture, community, and the warmth of home. Drawing inspiration from traditional recipes passed down through generations, we craft each dish with care, authenticity, and a touch of modern flair.<br><br> Our mission is simple: to bring the heart and soul of African cuisine to your table, one flavorful bite at a time. From the smoky jollof rice of West Africa to the comforting stews and spiced grills found across the continent, we honor the vibrant tastes and traditions that make African food so special.<br><br> Step into SoulKitchen and experience the magic of Africa—where every meal is a journey, and every moment is filled with soul.<br><br><b>SoulKitchen: Where Flavor Meets Culture.</b>";

  aboutDiv.appendChild(aboutIntroText);
  aboutDiv.appendChild(aboutMainText);
  aboutDivContainer.appendChild(aboutDiv);

  const contentDiv = document.querySelector("#content");
  contentDiv.appendChild(aboutDivContainer);

  //footer
  const footer = document.createElement("div");
  footer.classList.add("footer");
  const footerText = document.createElement("a");
  footerText.classList.add("footerText");
  footerText.textContent = "Designed and Developed by ifeeee___";
  footerText.href = "https://github.com/Nuga25";

  footer.appendChild(footerText);
  contentDiv.appendChild(footer);
}
