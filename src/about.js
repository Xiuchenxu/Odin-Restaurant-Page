function loadAbout() {
  const content = document.querySelector("#content");

  const headline = document.createElement("div");
  headline.textContent = "About";
  headline.classList.add('headline'); 

  const description = document.createElement("div");
  description.textContent = "Address: 250 Lower Street, N10 6G";
  description.classList.add('description'); 

  content.appendChild(headline);
  content.appendChild(description);
}

export default loadAbout;