$(document).ready(function(){
  $(function (){

    //flickity slider
    $('.main-carousel').flickity({
    // options
      cellAlign: 'right',
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      autoPlay: true,
      imagesloaded: true
    });

    // A function to check for an email address
    $('form.sign-up-form').on('submit', function(event){
      event.preventDefault();
      var userEmail = $('input[type="email"]').val();

     if (userEmail) {
        alert('Thank you for subscribing!');
      } else {
        alert('Please provide a valid email address!');
      }
    });

    // Smooth scrolling function
    $('a[href*="#"]:not([href="#"])').click(function(e) {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 800);
          return false;
        }
      }
    });

  });

});
