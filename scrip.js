/*const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
});*/

function changeButtonText(element) {
  if (element.innerHTML ==='LOGIN') {
  element.innerHTML = 'LOGOUT';
  } else {
  element.innerHTML = 'LOGIN';
  }
}