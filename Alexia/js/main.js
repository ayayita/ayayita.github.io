$(document).ready(function(){
  $('.m-responsive li:has(ul)').click(function(e){
    e.preventDefault();

    if ($(this).hasClass('activado')){
      $(this).removeClass('activado');
      $(this).children('ul').slideUp();
    } else{
      $('menu li ul').slideUp();
      $('menu li').removeClass('activado');
      $(this).addClass('activado');
      $(this).children('ul').slideDown();
    }
  });
  $('.boton-menu').click(function(){
    $('.menu-responsive .m-responsive').slideToggle();
  });
  $('.m-responsive li ul li a').click(function(){
    window.location.href = $(this).attr("href");
  })
});
