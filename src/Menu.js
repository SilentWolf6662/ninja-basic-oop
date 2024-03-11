/* jshint esversion: 6 */
export default class Menu {
  createMenu(CC, data) {
    const menuContainer = document.createElement("nav");
    menuContainer.id = "menuContainer";
    document.body.appendChild(menuContainer);

    const menuItemContainer = document.createElement("ul");
    menuItemContainer.id = "menuItemContainer";
    menuContainer.appendChild(menuItemContainer);

    data.forEach((element, index) => {
      const menuItem = document.createElement("li");
      menuItem.setAttribute("data-index", `${index}`);
      menuItem.className = "menuItem";
      menuItem.textContent = element.name;
      menuItemContainer.appendChild(menuItem);
      menuItem.addEventListener("click", (e) => CC.getData(e, element));
    });
  }
}
