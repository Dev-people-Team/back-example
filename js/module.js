(function($){
$(document).ready(function(){
// !! code start !!

$('.side ul li .ha').hover(
  function(){
  $(this).find('.darkarea').stop().animate({
    'opacity':'1',
    'filter':'grayscale(100%)'
  },500,'easeOutQuint');
  $(this).find('.darkarea .txtbox').stop().animate({
    'bottom':'0px'
  },500,'easeOutQuint');
  $(this).find('.img').stop().animate({
    'filter':'grayscale(50%)'
    ,'background-size':'130% 130%'
  },500,'easeOutQuint');

},function(){
  $(this).find('.darkarea').stop().animate({
    'opacity':'',
    'filter':'grayscale(0%)'
  },500,'easeOutQuint');
  $(this).find('.darkarea .txtbox').stop().animate({
    'bottom':'-400px'
  },500,'easeOutQuint');
  $(this).find('.img').stop().animate({
    'filter':'grayscale(0%)'
  },500,'easeOutQuint');
})
//하..
$('.rrr').hover(
  function(){
    $('.rr').find('.darkarea').stop().animate({
      'opacity':'1',
      'filter':'grayscale(100%)'
    },500,'easeOutQuint');
    $('.rr').find('.darkarea .txtbox').stop().animate({
      'bottom':'0px'
    },500,'easeOutQuint');
    $('.rr').find('.img').stop().animate({
      'filter':'grayscale(50%)'
    },500,'easeOutQuint');
  },function(){
    $('.rr').find('.darkarea').stop().animate({
      'opacity':'',
      'filter':'grayscale(0%)'
    },500,'easeOutQuint');
    $('.rr').find('.darkarea .txtbox').stop().animate({
      'bottom':'-400px'
    },500,'easeOutQuint');
    $('.rr').find('.img').stop().animate({
      'filter':'grayscale(0%)'
    },500,'easeOutQuint');
  }
)

$('.rrr2').hover(
  function(){
    $('.rr2').find('.darkarea').stop().animate({
      'opacity':'1',
      'filter':'grayscale(100%)'
    },500,'easeOutQuint');
    $('.rr2').find('.darkarea .txtbox').stop().animate({
      'bottom':'0px'
    },500,'easeOutQuint');
    $('.rr2').find('.img').stop().animate({
      'filter':'grayscale(50%)'
    },500,'easeOutQuint');
  },function(){
    $('.rr2').find('.darkarea').stop().animate({
      'opacity':'',
      'filter':'grayscale(0%)'
    },500,'easeOutQuint');
    $('.rr2').find('.darkarea .txtbox').stop().animate({
      'bottom':'-400px'
    },500,'easeOutQuint');
    $('.rr2').find('.img').stop().animate({
      'filter':'grayscale(0%)'
    },500,'easeOutQuint');
  }
)

// document
});//ready
})(jQuery);
