$(document).ready(function() {
	//get ryu into ready state on mouse-enter
  $('.ryu').mouseenter(function() {
  	$('.ryu-still').hide();
  	$('.ryu-ready').show();
  })
  .mouseleave(function() {
  	//get ryu back to still on mouse-leave
    $('.ryu-ready').hide();
	$('.ryu-still').show();
  })


  	.mousedown(function() {
  // play hadouken sound
  $('.ryu-ready').hide();
  $('.ryu-throwing').show();
  $('.hadouken').show();
  // animate hadouken to the right of the screen
})
  .mouseup(function() {
  $('.ryu-throwing').hide();
  $('.ryu-ready').show();
});
});