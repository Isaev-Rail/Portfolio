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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgJCh3aW5kb3cpLm9uKCdsb2FkIHJlc2l6ZScsZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICBjb25zb2xlLmxvZyh3dyk7ICAgIFxyXG4gIH0pXHJcblxyXG4gICQoJyNmbGlwLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGJ0biA9ICQodGhpcyk7XHJcbiAgICBidG4uYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJCgnI2ZsaXAnKS5hZGRDbGFzcygnZmxpcHBlcicpO1xyXG4gICAgJChkb2N1bWVudCkuYmluZCgnY2xpY2snLGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnI2ZsaXAnKS5sZW5ndGggPT0gMCApIHtcclxuICAgICAgICAkKCcjZmxpcCcpLnJlbW92ZUNsYXNzKCdmbGlwcGVyJyk7XHJcbiAgICAgICAgYnRuLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9KTtcclxuICAgIFxyXG4gICQoJyN0b2dnbGUtbmF2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb24nKTtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH0pXHJcblxyXG4gICQod2luZG93KS5vbignbG9hZCByZXNpemUnLCBmdW5jdGlvbigpIHtcclxuICAgIHZhciB0cmlhbmdsZXNIZWlnaHQgPSAkKCcjdHJpYW5nbGVzJykuaGVpZ2h0KCk7XHJcbiAgICAkKCcjbWFpbi1jb250ZW50JykuY3NzKHtcclxuICAgICAgJ21hcmdpbi10b3AnIDogLXRyaWFuZ2xlc0hlaWdodFxyXG4gICAgfSk7XHJcbiAgfSlcclxuXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
