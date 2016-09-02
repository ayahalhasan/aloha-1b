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

  // A function to check for an email address in the format

  $('form.sign-up-form').on('submit', function(event){
    event.preventDefault();
     var userEmail = $('input[type="email"]').val();

    if (userEmail) {
      alert('Thank you for subscribing!');
    } else {
      alert('Please provide a valid email address!');
    }
  });

  //shopping cart function

  //var numItems = 0;

  // $('.product-wrap button').on('click', function (e) {
  //     e.preventDefault();
  //
  //     numItems++;
  //     $('.counter').text(numItems);
  //     $('.counter').show();
  //
  //
  // });


  // smooth scrolling function, taking into account the fixed header

  //$target.offset().top - height of header

  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var $target = $(this.hash);

	    $('html, body').stop().animate(
        {
	        'scrollTop': $target.offset().top - ($('header').height())
        },
        900, 'swing');
	});




});
