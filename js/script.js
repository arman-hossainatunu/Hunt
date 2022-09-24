$(function () {
  $('.banner-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: false,
    prevArrow: ".b-left",
    nextArrow: ".b-right",
  });

  $('.service-main').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    pauseOnHover: false,
    infinite: true,
    prevArrow: ".top",
    nextArrow: ".button",
    responsive: [{
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },
    ]

  });

  $('.person-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    centerMode: true,
    centerPadding: '0px',
    pauseOnHover: false,
    pauseOnFocus: false,
    asNavFor: '.comment-wrapper',
    arrows: true,
    prevArrow: ".feedback-top-btn",
    nextArrow: ".feedback-btm-btn",
    responsive: [{
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          vertical: true,
        }
      },

    ]
  });
  $('.comment-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    fade: false,
    arrows: false,
    asNavFor: '.person-wrapper',
  });
  $('.brand-wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [{
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
    ]
  });
  $('.counter').counterUp({
    delay: 10,
    time: 1000,
    responsive: [{
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
    ]
  });
  $('.show').on('click', function () {
    $('.saidbar').css('left', '0px')
  })
  $('.cross').on('click', function () {
    $('.saidbar').css('left', '-100%')
  })
})


$(".btt").on('click', function () {
  $("HTML, BODY").animate({
    scrollTop: 0
  }, 1000);
});

$(window).on('scroll',function(){
  var scroll= $(this).scrollTop()
  if (scroll > 50){
    $('.btt').fadeIn(500)
  } 
  
  else {
    $('.btt').fadeOut(500)
  }
  if (scroll > 50){
    $('.navbar').addClass('sticky-menu')
  }
  else {
    $('.navbar').removeClass('sticky-menu')
  }
})

