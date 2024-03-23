
$('.service-slider').slick({
    // dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 4,
    autoplay:true,
    autoplaySpeed: 2500,
    arrows:true,
    prevArrow:('.left-angle-btn'),
    nextArrow:('.right-angle-btn'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
          
  
  // $('.service-slider').slick({
  //   centerMode: true,
  //   centerPadding: '60px',
  //   slidesToShow: 5,
  //   autoplay:false,
  //   autoplaySpeed: 2500,
  //   arrows:true,
  //   prevArrow:('.left-angle-btn'),
  //   nextArrow:('.right-angle-btn'),
    
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 3
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // });
    
  
$('.comment-slider').slick({
  centerMode:true,
  centerPadding: '0px',
  slidesToShow: 3,
  arrows:true,
  prevArrow:('.comment-left-angle-btn'),
  nextArrow:('.comment-right-angle-btn'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.news-slider').slick({
  centerMode:true,
  centerPadding: '0px',
  slidesToShow: 3,
  arrows:true,
  prevArrow:('.news-left-angle-btn'),
  nextArrow:('.news-right-angle-btn'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.support-slider').slick({
  dots: true,
  centerMode:true,
  centerPadding: '0px',
  slidesToShow: 1,
  arrows:true,
  prevArrow:('.support-left-angle-btn'),
  nextArrow:('.support-right-angle-btn'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});