function loadMenu() {
  const content = document.querySelector("#content");

  const headline = document.createElement("div");
  headline.textContent = "Menu";
  headline.classList.add('headline'); 

  const menuList = document.createElement("ul");
  menuList.classList.add("menu-list");

    const menuItems = [
    "Tamago Rolls",
    "Cucumber Rolls",
    "Vegan Dragon Rolls",
    "California Rolls",
    "Spicy Tuna Rolls",
    "Salmon Avocado Rolls",
    "Crispy Tempura Rolls",
    "Edamame",
    "Miso Soup"
  ];

    menuItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    menuList.appendChild(listItem);
  });

  content.appendChild(headline);
  content.appendChild(menuList);
}

export default loadMenu;