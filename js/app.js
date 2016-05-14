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
}); //document ready end

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}