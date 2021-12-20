/*You can use Isotope with vanilla JS: new Isotope( elem, options ). The Isotope() constructor accepts two arguments: the container element and an options object.*/

let elem = document.querySelector('.grid');

let iso = new Isotope('.grid', {
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    transitionDuration: "0.6s"
});

export {iso};