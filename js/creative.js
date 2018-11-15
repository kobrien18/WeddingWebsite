 $('body').css({'overflow':'hidden'});
  $(document).bind('scroll',function () { 
       window.scrollTo(0,0); 
  });
  
  (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  if ( $(window).width() > 991) {
  sr.reveal('.sr-header', {
	duration: 1250,
	delay: 1000,
	scale: 1.0,
    distance: '0px'
  });
  }
  sr.reveal('.sr-title', {
	duration: 1250,
	delay: 250,
	distance: '100px',
	reset: true
  }, 200);
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-image', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-photos', {
	duration: 1000,
	rotate: { x: 0, y: 90, z: 0 },
	scale: 1.0,
    distance: '0px'
  }, 100);
  sr.reveal('.sr-portraits', {
	duration: 1000,
	rotate: { x: 0, y: 90, z: 0 },
	scale: 1.0,
    distance: '0px'
  }, 300);
  sr.reveal('.sr-gallery', {
	duration: 1000,
	rotate: { x: 0, y: 90, z: 0 },
	scale: 1.0,
    distance: '0px'
  }, 100);
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);


  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });


})(jQuery); // End of use strict

// Get the input field
var input = document.getElementById("password");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keydown", function(event) {
  // Cancel the default action, if needed
  // event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    isValid();
  }
});

// Password-protect
function isValid(){
  var password = document.getElementById('password').value;
  if (sha256(password) == "76cacb5d22cf422d1c1ca68a3963fd52a1e2b7e7c3b3ea8e5055a8d88d1bd4f5") {
	document.getElementById('page-splash').remove();
	$(document).unbind('scroll'); 
    $('body').css({'overflow':'visible'});
  }
  else
	{alert('Wrong Password')}
}