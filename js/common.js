(function($){
$(document).ready(function(){
// !! code start !!
// var check = tu;
// navi
var navCon = {
  logo:function(){
    var now = $(window).scrollTop();
    // console.log(now);
    if(now > 179){
      $('nav').stop().animate({
        'min-width':'1020px'
      },500,'easeOutQuint');

      $('nav form').stop().animate({
        'top':'11px'
      },500,'easeOutQuint');
      $('nav ul').stop().animate({
        'margin-left':'0'
      },500,'easeOutQuint');
      // console.log('logoli가 있어야대.');
    }else{
      $('nav form').stop().animate({
        'top':'60px'
      },500,'easeOutQuint');
      $('nav ul').stop().animate({
        'margin-left':'-110px'
      },500,'easeOutQuint');
      $('nav').stop().animate({
        'min-width':'660px'
      },500,'easeOutQuint');
      // console.log('logoli가 읎어야ㅕ대');
    }
  },
  readylogo:function(){
    var now = $(window).scrollTop();
    // console.log(now);
    if(now > 179){
      $('nav').css({
        'min-width':'1020px'
      });

      $('nav form').css({
        'top':'11px'
      });
      $('nav ul').css({
        'margin-left':'0'
      });
      // console.log('logoli가 있어야대.');
    }else{
      $('nav form').css({
        'top':'60px'
      });
      $('nav ul').css({
        'margin-left':'-110px'
      });
      $('nav').css({
        'min-width':'660px'
      });
      // console.log('logoli가 읎어야ㅕ대');
    }
  }
}
var navInterval = setInterval(function(){
  navCon.logo()
},500);

// $(window).scroll(navCon.logo);
// cartegorys
var $category = $('#category');
var category = {
  click:function(){
      $('#category li').removeClass('select');
      $(this).parent('li').addClass('select');
  }
}
$category.find('a').on('click',category.click);

// best4
var $liwrpP = $('.liwrp').parent('li');


$liwrpP.hover(function(){
  console.log('12');
  // $(this).find('.liwrp').css({
  //   'transform':'rotateY(89deg)'
  // })
  // $(this).find('.liwrp').animate({
  //
  // },500)
  $(this).find('.dark').fadeIn();
  $(this).find('.hover').fadeIn();
},function(){
  console.log('34');
  // $(this).find('.liwrp').css({
  //   'transform':'rotateY(0deg)'
  // })
  $(this).find('.liwrp').animate({
  },500)
  $(this).find('.dark').fadeOut();
  $(this).find('.hover').fadeOut();
});

// document
navCon.readylogo();
});//ready
})(jQuery);
