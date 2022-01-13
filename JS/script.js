$(document).ready(function (){    
$('.banner-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    nextArrow:false,
    prevArrow:false
  });

  $('.test-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

})
//  navbar fixing 
$(document).ready(function(){  

  $(window).scroll(function(){

    var scrolling = $(this).scrollTop();
    var sticky = $('.fixed'); 
        if(scrolling >= 200){
          sticky.addClass('nav-bg');
           }else{
             sticky.removeClass('nav-bg');
           }

     });

})