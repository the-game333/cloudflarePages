const helloButton = document.getElementById("helloButton");
const message = document.getElementById("message");

helloButton.addEventListener("click", () => {
  message.textContent = "Hello! Your JavaScript is working.";
});
