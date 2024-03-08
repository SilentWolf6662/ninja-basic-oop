/* jshint esversion: 6 */

import ChangeContents from "./ChangeContent";
import wireframe from "./../assets/json/Wireframe.json";

export default class ShowActors {
    constructor(data) {
        const CC = new ChangeContents();

        /* START menu */
        const menuWireframeData = wireframe.html[0];

        const menuContainer = document.createElement(menuWireframeData.parent.type);
        menuContainer.id = menuWireframeData.parent.id;
        document.body.appendChild(menuContainer);

        const menuItemContainer = document.createElement(menuWireframeData.child[0].type);
        menuItemContainer.id = menuWireframeData.child[0].id;
        menuContainer.appendChild(menuItemContainer);

        data.forEach((element, index) => {
            const menuItemWireframeData = menuWireframeData.innerChild[index];

            const menuItem = document.createElement(menuItemWireframeData.type);
            menuItem.className = menuItemWireframeData.class;
            menuItem.textContent = element.name;
            menuItem.dataset.index = index;
            menuItemContainer.appendChild(menuItem);

            menuItem.addEventListener("click", (event) => {
                CC.getData(event, element);
            });
        });
        /* END menu */

        /* START card container */
        const cardWireframeData = wireframe.html[1];

        const cardContainer = document.createElement(cardWireframeData.parent.type);
        cardContainer.id = cardWireframeData.parent.id;
        document.body.appendChild(cardContainer);

        const card = document.createElement(cardWireframeData.child[0].type);
        card.id = cardWireframeData.child[0].id;
        cardContainer.appendChild(card);

        const childCardArray = wireframe.html[1].innerChild;

        childCardArray.forEach((element) => {
            const childCard = document.createElement(element.type);
            childCard.id = element.id;
            card.appendChild(childCard);
            if (element.id === "headline")
                childCard.textContent = 'Ninja';
            if (element.id === "content")
                childCard.textContent = 'Ninjas are cool, do not mess with them';

        });

        /* START card data */
        const cardDataWireframeData = wireframe.html[4];

        const showImg = document.createElement(cardDataWireframeData.parent.type);
        showImg.id = cardDataWireframeData.parent.id;
        showImg.src = `../assets/images/ninja.png`;
        document.querySelector("#imageCon").appendChild(showImg);
        /* END card data */
        /* END card container */

        /* START footer */
        const footerWireframeData = wireframe.html[2];

        const footer = document.createElement(footerWireframeData.parent.type);
        footer.id = footerWireframeData.parent.id;
        document.body.appendChild(footer);
        /* END footer */

        /* START modal */
        const modalWireframeData = wireframe.html[3];

        const infoChild = document.createElement(modalWireframeData.parent.type);
        infoChild.id = modalWireframeData.parent.id;
        document.querySelector("#info").appendChild(infoChild);

        const strength = document.createElement(modalWireframeData.child[0].type);
        strength.id = modalWireframeData.child[0].id;
        document.querySelector("#infoChild").appendChild(strength);

        const lives = document.createElement(modalWireframeData.child[1].type);
        lives.id = modalWireframeData.child[1].id;
        document.querySelector("#infoChild").appendChild(lives);

        card.addEventListener("click", (event) => {

        });
        //console.log(data);
    }
}