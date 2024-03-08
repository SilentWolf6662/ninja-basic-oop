/* jshint esversion: 6 */

import "../css/style.scss";

import ShowActors from "./ShowActors";
import dataObject from "./../assets/json/data.json";

// **  IIFE: Immediately Invoked Function Expression  */

(() => {
	//console.log("starting the cool->app");

	new ShowActors(dataObject.content);
})();
