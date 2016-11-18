$(function(){
  $('.header').hover(function(){
    $('.header__title').css('transform', 'translate(0,0)');
    $('.header__title').css('transition', 'transform 0.3s ease');

  },
  function(){
    $('.header__title').css('transform', 'translate(-250px,0)');
    $('.header__title').css('transition', 'transform 0.3s ease');

  }
);

var menu = document.querySelector('#menu');
      var main = document.querySelector('main');
      var drawer = document.querySelector('.nav');

      menu.addEventListener('click', function(e) {
        drawer.classList.toggle('open');
        e.stopPropagation();
      });
      main.addEventListener('click', function() {
        drawer.classList.remove('open');
      });


});
