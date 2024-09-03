function slick() {
    $(".banner-slider").slick({
        slidestoShow: 1,
        slidestoScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        cssEase: 'linear',
        prevArrow: "<button type='button' class='slick-prev slick-arrows'><i class='fa-solid fa-circle-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrows'><i class='fa-solid fa-circle-arrow-right'></i></button>",
    });

    $(".ex-student").slick({
        slidestoShow: 2,
        slidestoScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        cssEase: 'linear',
        prevArrow: "<button type='button' class='prev'><i class='fa-solid fa-circle-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='next'><i class='fa-solid fa-circle-arrow-right'></i></button>",
    });


};

function toTop() {
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth",
        })
}


