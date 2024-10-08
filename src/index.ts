import "./app.scss";

function main(): void {
  const button = document.querySelector("#testButton");
  button?.addEventListener("click", testSubmitHandler);
  document.addEventListener("DOMContentLoaded", testImageHandler);
}

function testSubmitHandler(e: Event): void {
  e.preventDefault();
  const outputElement = document.querySelector("#output");
  outputElement.textContent = "Scripts work!";
}

function testImageHandler(e: Event): void {
  e.preventDefault();
  const imageModule = require("../assets/test-image.jpg?as=webp");
  const imageSrc = imageModule.default || imageModule; // Access the default property if it exists

  const image = document.createElement("img");
  image.src = imageSrc;
  image.style.width = "200px";

  const imageWrapper = document.getElementById("imageTest");
  imageWrapper.appendChild(image);
}

main();
