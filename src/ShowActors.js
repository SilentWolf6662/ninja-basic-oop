/* jshint esversion: 6 */

import CardData from "./CardData";
import ChangeContents from "./ChangeContent";
import Menu from "./Menu";

export default class ShowActors {
  showActors(data) {
    const CC = new ChangeContents();

    //**START menu */

    const menu = new Menu();
    menu.createMenu(CC, data.content);

    //**END menu */

    const cardContainer = document.createElement("section");
    cardContainer.id = "cardContainer";
    document.body.appendChild(cardContainer);

    const card = document.createElement("div");
    card.id = "card";
    cardContainer.appendChild(card);

    const childCardArray = ["headline", "imagecon", "content", "info"];

    childCardArray.forEach((elementId) => {
      const cardChild = document.createElement("div");
      cardChild.id = elementId;
      card.appendChild(cardChild);
    });

    const showImg = document.createElement("img"); //default card image
    showImg.id = "showImg";
    showImg.src = "../assets/images/ninja.png";
    document.querySelector("#imagecon").appendChild(showImg);

    const infochild = document.createElement("div");
    infochild.id = "infochild";
    document.querySelector("#info").appendChild(infochild);

    const strength = document.createElement("div");
    strength.id = "strength";
    infochild.appendChild(strength);

    const lives = document.createElement("div");
    lives.id = "lives";
    infochild.appendChild(lives);

    const cardData = new CardData();
    card.addEventListener("click", () => cardData.getCardData(CC, data.content));

    const footer = document.createElement("footer");
    footer.id = "footer";
    document.body.appendChild(footer);
  }
} //END class
