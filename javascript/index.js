import { iso } from "./isotope/isotope";

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