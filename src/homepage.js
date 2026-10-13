function loadHomepage() {
  const content = document.querySelector("#content");

  const headline = document.createElement("div");
  headline.textContent = "Welcome to SassiSushi!";
  headline.classList.add('headline'); 

  const description = document.createElement("div");
  description.textContent = "Fresh sushi made with love.";
  description.classList.add('description'); 

  content.appendChild(headline);
  content.appendChild(description);
}

export default loadHomepage;