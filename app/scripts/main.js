$(document).ready(function() {

  $(window).on('load resize',function () {
    var ww = $(window).width();
    console.log(ww);    
  })

  $('#flip-btn').on('click', function() {
    var btn = $(this);
    btn.addClass('hidden');
    $('#flip').addClass('flipper');
    $(document).bind('click',function(event) {
      if ($(event.target).closest('#flip').length == 0 ) {
        $('#flip').removeClass('flipper');
        btn.removeClass('hidden');
      }
    });
    return false
  });
    
  $('#toggle-nav').on('click', function () {
    $(this).toggleClass('on');
    return false
  })

  $(window).on('load resize', function() {
    var trianglesHeight = $('#triangles').height();
    $('#main-content').css({
      'margin-top' : -trianglesHeight
    });
  })

});