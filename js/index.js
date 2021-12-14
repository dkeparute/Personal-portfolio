var elem = document.querySelector('.grid');
var iso = new Isotope( elem, {
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  transitionDuration: "0.6s" 
});

// element argument can be a selector string
//   for an individual element
var iso = new Isotope( '.grid', {
  // options
});