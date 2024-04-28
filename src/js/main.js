// Hamburger Menu :

const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});

// Tapsi Services :
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targetTabContent = document.querySelector(
      `#${tab.dataset.tabTarget}`
    );

    //Remove Previous Activated Classes
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    //Add New Active Classes
    tab.classList.add("active");
    targetTabContent.classList.add("active");
  });
});

// Accordion
const accordion = document.querySelectorAll(".accordion");
accordion.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.parentElement);
    item.classList.toggle("accordion--extended");
  });
});
