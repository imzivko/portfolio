"use strict";

// current age IIFE
(function() {
	setInterval(function() {
    const currentDate = new Date;
    const nanoYear = 365.25 * 24 * 3600000;
    const age = ((currentDate - Date.parse('1994-06-25')) / nanoYear).toFixed(10);
    const ageContainer = document.querySelector(".age");
    ageContainer.textContent = age;
  }, 100);
})()