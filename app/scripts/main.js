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
