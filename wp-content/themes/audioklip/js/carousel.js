$(document).ready(function() {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
});
