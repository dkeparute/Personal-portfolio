// Progress-bar
const skills = document.querySelector(".skills");
const skillsProgress = document.querySelectorAll(".skill-progress");

window.addEventListener("scroll", () => {
    skillsEffect();
});

function checkScroll(element) {
    // chechinkg when progress bar should be active
    let rect = element.getBoundingClientRect();
    // console.log(reaction.top + element.offsetHeight);
    if (window.innerHeight >= rect.top + element.offsetHeight) {
        return true;
    } else {
        return false;
    }
}

function skillsEffect() {
    //    adding animation
    if (!checkScroll(skills)) {
        return console.log("the code below won't be executed");
    }
    skillsProgress.forEach((skill) => (skill.style.width = skill.dataset.progress));
}
// ======================================================================================
// Hamburger menu
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");
// closing menu
function closeMenu() {
    navbar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
  }
  // open menu
  hamburger_menu.addEventListener("click", () => {
    if (!navbar.classList.contains("open")) {
      navbar.classList.add("open");
      document.body.classList.add("stop-scrolling");
    } else {
      closeMenu();
    }
  });
  // links active
  links.forEach((link) => link.addEventListener("click", () => closeMenu()));