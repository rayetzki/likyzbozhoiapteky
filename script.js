// Toggle Menu

const icon = document.querySelector('#nav-icon1');
const menu = document.querySelector('.navigation__mobile--slide');

icon.addEventListener('click', () => {
  icon.classList.toggle('open');
  
  if (icon.classList.contains('open')) {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});

$(function() {
  AOS.init();
});

$(window).on('load', function() {
  AOS.refresh();
});

// Smooth Scroll

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      let hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});