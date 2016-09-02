$(function(){

  //shopping cart function incrementing the cart when user adds an item to the cart

  var numItems = 0;
  $('.product-wrap button').on('click', function(event){

    event.preventDefault();
    numItems++;

    // console.log(numItems);
    $('.counter').text(numItems).show();

  });

});
