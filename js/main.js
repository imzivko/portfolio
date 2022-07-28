"use strict";

const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const projectsContent = document.querySelector("#projects-content");

// display current age dynamically
(function() {
	setInterval(function() {
    const currentDate = new Date;
    const nanoYear = 365.25 * 24 * 3600000;
    const age = ((currentDate - Date.parse('1994-06-25')) / nanoYear).toFixed(10);
    const ageContainer = document.querySelector(".age");
    ageContainer.textContent = age;
  }, 100);
})()


// About WinBox Window
about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    modal: window.mobileCheck() ? true : false,
    width: window.mobileCheck() ? "90%" : "30%",
    height: window.mobileCheck() ? "90%" : "70%",
    x: window.mobileCheck() ? "center" : "4%",
    y: window.mobileCheck() ? "center" : "4%",
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

// Projects WinBox Window
projects.addEventListener("click", () => {
  const projectsBox = new WinBox({
    title: "My Projects",
    modal: window.mobileCheck() ? true : false,
    width: window.mobileCheck() ? "90%" : "30%",
    height: window.mobileCheck() ? "90%" : "80%",
    x: window.mobileCheck() ? "center" : "8%",
    y: window.mobileCheck() ? "center" : "8%",
    mount: projectsContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

// Contact WinBox Window
contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Me",
    modal: window.mobileCheck() ? true : false,
    width: window.mobileCheck() ? "90%" : "30%",
    height: window.mobileCheck() ? "60%" : "40%",
    x: window.mobileCheck() ? "center" : "12%",
    y: window.mobileCheck() ? "center" : "12%",
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
