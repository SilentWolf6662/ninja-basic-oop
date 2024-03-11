/* jshint esversion: 6 */

import "../css/style.scss";

import ShowActors from "./ShowActors";
import dataObject from "./../assets/json/data.json";

// **  IIFE: Immediately Invoked Function Expression  */

(() => {
  let showActors = new ShowActors();
  showActors.showActors(dataObject);
})();
