var audio = new Audio('https://dl2.lim1.dosyaupload.com/btcZ?download_token=b66f4ef98c0eac188fde2ff5f60c298c32d0ee075b8f2d545252509e2e14ffcc');
audio.volume = 0.3;
audio.autoplay = true;

$('.trigger').click(function() {
  if (audio.paused == false) {
      audio.pause();
      $('.fa-play').show();
      $('.fa-pause').hide();
      $('.music-card').removeClass('playing');
  } else {
      audio.play();
      $('.fa-pause').show();
      $('.fa-play').hide();
      $('.music-card').addClass('playing');
  }
});