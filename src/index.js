//entry point for the app
import "./styles.css";
import pageLoad from "./pageLoad.js";
import menuPage from "./menu.js";
import aboutPage from "./about.js";

console.log("yayyy this works");

pageLoad();

const homeBtn = document.querySelector("#homeBtn");
homeBtn.addEventListener("click", () => {
  const divContent = document.querySelector("#content");
  divContent.textContent = "";
  document.querySelector(".logo").textContent = "";

  pageLoad();
});

const menuBtn = document.querySelector("#menuBtn");
menuBtn.addEventListener("click", () => {
  const divContent = document.querySelector("#content");
  divContent.textContent = "";
  document.querySelector(".logo").textContent = "";

  menuPage();
});

const aboutBtn = document.querySelector("#aboutBtn");
aboutBtn.addEventListener("click", () => {
  const divContent = document.querySelector("#content");
  divContent.textContent = "";
  document.querySelector(".logo").textContent = "";

  aboutPage();
});
