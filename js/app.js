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
  playHadouken();
  $('.ryu-ready').hide();
  $('.ryu-throwing').show();
  $('.hadouken').finish().show()
  .animate(
    {'left': '1020px'},
    500,
    function() {
      $(this).hide();
      $(this).css('left', '520px');
    }
  );
})
  .mouseup(function() {
  $('.ryu-throwing').hide();
  $('.ryu-ready').show();
});
  $('.hadouken').show().animate(
  {'left': '1020px'},
  500,
  function() {
    $(this).hide();
    $(this).css('left', '520px');
  }
);

/*NOT WORKING- ryu still gets hidden, but only on mouseleave, and cool ryu is not appearing at all. Look slike I need to put this block somewhere else, like maybe before mouseleave script? */
$(document).keydown(function(e) {
    if (e.keyCode == 88) {
      
      $('.ryu-still').hide();
      $('.ryu-cool').show();
    }   
  })
	.keyup(function(e) {
    if (e.keyCode == 88) { 
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });


}); //document ready end

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}