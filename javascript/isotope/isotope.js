/*You can use Isotope with vanilla JS: new Isotope( elem, options ). The Isotope() constructor accepts two arguments: the container element and an options object.*/

const filterButtons = document.querySelectorAll(".filter-btn");
// active button moves
filterButtons.forEach(btn => btn.addEventListener("click", () => {
    filterButtons.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;
    // console.log(filterValue);
    iso.arrange({
        filter:filterValue
    })
})
);

let iso = new Isotope('.grid', {
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    transitionDuration: "0.6s"
});
