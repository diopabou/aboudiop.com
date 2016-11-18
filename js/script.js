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



});
