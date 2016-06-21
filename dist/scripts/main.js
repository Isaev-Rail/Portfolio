$(document).ready(function () {

  $(window).on('load resize', function () {
    var ww = $(window).width();
    console.log(ww);
  })

  $('#flip-btn').on('click', function () {
    var btn = $(this);
    btn.addClass('hidden');
    $('#flip').addClass('flipper');
    $(document).bind('click', function (event) {
      if ($(event.target).closest('#flip').length == 0) {
        $('#flip').removeClass('flipper');
        btn.removeClass('hidden');
      }
    });
    return false
  });

  $('#toggle-nav').on('click', function () {
    $(this).toggleClass('toggle-nav--on');
    $('#menu').toggleClass('menu--open');
    return false
  });

  $(window).on('load resize', function () {
    var trianglesHeight = $('#triangles').height(),
        footerHeight = $('#footer-overlay').height();
    $('#main-content').css({
      'margin-top' : -trianglesHeight
    });
    $('#footer-overlay').css({
      'margin-top' : -footerHeight
    });
  });
  $('#open-sidebar').on('click', function() {
    $('#sidebar').toggleClass("blog__sidebar--open");
    $(document).bind('click', function (event) {
      if ($(event.target).closest('#sidebar').length == 0 ) {
        $('#sidebar').removeClass('blog__sidebar--open')
      }
    });
    return false
  });

});

google.maps.event.addDomListener(window, 'load', init);

function init() {
  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(55.756034, 37.630244),
    scrollwheel: false 
  };

  var image = new google.maps.MarkerImage('./images/marker.png',
    new google.maps.Size(42, 56),
    new google.maps.Point(0, 0),
    new google.maps.Point(16, 35)
  );

  var mapElement = document.getElementById('map');
  var map = new google.maps.Map(mapElement, mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(55.756034, 37.630244),
    draggable: true,
    map: map,
    icon: image,
    title: 'Москва'
  });

}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICQod2luZG93KS5vbignbG9hZCByZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgIGNvbnNvbGUubG9nKHd3KTtcclxuICB9KVxyXG5cclxuICAkKCcjZmxpcC1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYnRuID0gJCh0aGlzKTtcclxuICAgIGJ0bi5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkKCcjZmxpcCcpLmFkZENsYXNzKCdmbGlwcGVyJyk7XHJcbiAgICAkKGRvY3VtZW50KS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBpZiAoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJyNmbGlwJykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAkKCcjZmxpcCcpLnJlbW92ZUNsYXNzKCdmbGlwcGVyJyk7XHJcbiAgICAgICAgYnRuLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9KTtcclxuXHJcbiAgJCgnI3RvZ2dsZS1uYXYnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCd0b2dnbGUtbmF2LS1vbicpO1xyXG4gICAgJCgnI21lbnUnKS50b2dnbGVDbGFzcygnbWVudS0tb3BlbicpO1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfSk7XHJcblxyXG4gICQod2luZG93KS5vbignbG9hZCByZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdHJpYW5nbGVzSGVpZ2h0ID0gJCgnI3RyaWFuZ2xlcycpLmhlaWdodCgpLFxyXG4gICAgICAgIGZvb3RlckhlaWdodCA9ICQoJyNmb290ZXItb3ZlcmxheScpLmhlaWdodCgpO1xyXG4gICAgJCgnI21haW4tY29udGVudCcpLmNzcyh7XHJcbiAgICAgICdtYXJnaW4tdG9wJyA6IC10cmlhbmdsZXNIZWlnaHRcclxuICAgIH0pO1xyXG4gICAgJCgnI2Zvb3Rlci1vdmVybGF5JykuY3NzKHtcclxuICAgICAgJ21hcmdpbi10b3AnIDogLWZvb3RlckhlaWdodFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgJCgnI29wZW4tc2lkZWJhcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnI3NpZGViYXInKS50b2dnbGVDbGFzcyhcImJsb2dfX3NpZGViYXItLW9wZW5cIik7XHJcbiAgICAkKGRvY3VtZW50KS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBpZiAoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJyNzaWRlYmFyJykubGVuZ3RoID09IDAgKSB7XHJcbiAgICAgICAgJCgnI3NpZGViYXInKS5yZW1vdmVDbGFzcygnYmxvZ19fc2lkZWJhci0tb3BlbicpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfSk7XHJcblxyXG59KTtcclxuXHJcbmdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBpbml0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgdmFyIG1hcE9wdGlvbnMgPSB7XHJcbiAgICB6b29tOiAxMyxcclxuICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1NS43NTYwMzQsIDM3LjYzMDI0NCksXHJcbiAgICBzY3JvbGx3aGVlbDogZmFsc2UgXHJcbiAgfTtcclxuXHJcbiAgdmFyIGltYWdlID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlckltYWdlKCcuL2ltYWdlcy9tYXJrZXIucG5nJyxcclxuICAgIG5ldyBnb29nbGUubWFwcy5TaXplKDQyLCA1NiksXHJcbiAgICBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMCwgMCksXHJcbiAgICBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMTYsIDM1KVxyXG4gICk7XHJcblxyXG4gIHZhciBtYXBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpO1xyXG4gIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKG1hcEVsZW1lbnQsIG1hcE9wdGlvbnMpO1xyXG4gIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDU1Ljc1NjAzNCwgMzcuNjMwMjQ0KSxcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgIG1hcDogbWFwLFxyXG4gICAgaWNvbjogaW1hZ2UsXHJcbiAgICB0aXRsZTogJ9Cc0L7RgdC60LLQsCdcclxuICB9KTtcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
