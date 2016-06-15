$(document).ready(function() {

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
    


});