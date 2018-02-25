$('.lessons__block a, .video a, .intro__course__block').on('click', function(event) {
  event.preventDefault();
  let link = $(this).attr('href');
  $('.pop-up-video iframe').attr('src', link);
  $('.pop-up-video').fadeIn();
  $('body').css('overflow', 'hidden');
  $('iframe')[0].src += '&autoplay=1';
});

$('.pop-up-close').on('click', function() {
  $('.pop-up').fadeOut();
  $('body').css('overflow', 'visible');
  $('iframe').each(function(index) {
    $(this).attr('src', '');
    return false;
  });
});

$('.log-in').on('click', function() {
  $('.pop-up-login').fadeIn();
});

