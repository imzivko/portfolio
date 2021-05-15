"use-strict";

const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const projectsContent = document.querySelector("#projects-content");

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    modal: window.mobileCheck() ? true : false,
    width: window.mobileCheck() ? "90%" : "30%",
    height: window.mobileCheck() ? "90%" : "30%",
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

projects.addEventListener("click", () => {
  const contactBox = new WinBox({
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

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Me",
    modal: window.mobileCheck() ? true : false,
    width: window.mobileCheck() ? "90%" : "30%",
    height: window.mobileCheck() ? "90%" : "40%",
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
