function mainSlider() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
        },
        speed: 2000,
        loop: true,
        // effect: "fade",
        navigation: {
            nextEl: '.main .swiper-button-next',
            prevEl: '.main .swiper-button-prev',
        },
    })
}

function whySlider() {
    var swiper = new Swiper('.why .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 17,
        navigation: {
            nextEl: '.why .swiper-button-next',
            prevEl: '.why .swiper-button-prev',
        },
        breakpoints: {
            320: {
                spaceBetween: 5,
                slidesPerView: 1,
            },
            380: {
                slidesPerView: "auto",
            },
            992: {
                slidesPerView: 1,
            },
        }
    })
}

function projectSlider() {
    var swiper = new Swiper('.project-slider1', {
        slidesPerView: 3,
        spaceBetween: 32,
        navigation: {
            nextEl: '.project-slider1-container .projects-info__slider-next ',
            prevEl: '.project-slider1-container .projects-info__slider-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.2,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 2.2,
                spaceBetween: 16,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 32,
                allowTouchMove: false,
            },
            1580: {
                slidesPerView: 3,
            },
        }
    })
}


function projectSlider2() {
    var swiper = new Swiper('.project-slider2', {
        slidesPerView: 3,
        spaceBetween: 32,
        navigation: {
            nextEl: '.project-slider2-container .projects-info__slider-next ',
            prevEl: '.project-slider2-container .projects-info__slider-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.2,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 2.2,
                spaceBetween: 16,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 32,
                allowTouchMove: false,
            },
            1580: {
                slidesPerView: 3,
            },
        }
    })
}

function projectSlider3() {
    var swiper = new Swiper('.project-slider3', {
        slidesPerView: 3,
        spaceBetween: 32,
        navigation: {
            nextEl: '.project-slider3-container .projects-info__slider-next ',
            prevEl: '.project-slider3-container .projects-info__slider-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.2,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 2.2,
                spaceBetween: 16,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 32,
            },
        }
    })
}

function teamSlider() {
    var swiper = new Swiper('.team .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 23,
        navigation: {
            nextEl: ' .team .swiper-button-next',
            prevEl: ' .team .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: "auto",
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 23,
            },
            1200: {
                slidesPerView: 3,
            },
        }
    })
}

function indexFeedbackSlider() {
    var swiper = new Swiper('.index-feedback .swiper-container', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        speed: 2000,
        pagination: {
            el: '.index-feedback .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

$(document).ready(function() {
    mainSlider()
    whySlider()
    projectSlider()
    projectSlider2()
    projectSlider3()
    teamSlider()
    indexFeedbackSlider()

    $(".qa__item-show").click(function() {
        $(this).toggleClass("qa__item-show--active")
        $(this).siblings(".qa__item-hidden").slideToggle()
    })

    $(".projects-info__tabs .tab").click(function() {
        projectSlider()
        projectSlider2()
    })
})