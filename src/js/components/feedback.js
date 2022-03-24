function videoFeedbackSlider() {
    var swiper = new Swiper('.video-feedback .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 18,
        navigation: {
            nextEl: '.video-feedback .swiper-button-next',
            prevEl: '.video-feedback .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.1,
            },
            450: {
                slidesPerView: 1.2,
            },
            600: {
                slidesPerView: 1.7,
            },
            800: {
                slidesPerView: 2.2,
            },
            992: {
                slidesPerView: 2,
            },
            1300: {
                slidesPerView: 3,
            },
        }
    })
}

let feedbackBig = true

function feedbackSliders() {
    let feedbackSlidersArray = []

    $(".feedback-info__slider").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        feedbackSlidersArray[index] = new Swiper(`.feedback-info__slider[data-slider-id="${index}"] .swiper-container`, {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            navigation: {
                nextEl: `.feedback-info__slider[data-slider-id="${index}"] .swiper-button-next`,
                prevEl: `.feedback-info__slider[data-slider-id="${index}"] .swiper-button-prev`,
            }
        })
    })

}

function feedbackSliders2() {
    let feedbackSlidersArray2 = []
    $(".feedback-info__slider2").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        feedbackSlidersArray2[index] = new Swiper(`.feedback-info__slider2[data-slider-id="${index}"] .swiper-container`, {
            slidesPerView: 3,
            spaceBetween: 28,
            loop: true,
            navigation: {
                nextEl: `.feedback-info__slider2[data-slider-id="${index}"] .swiper-button-next`,
                prevEl: `.feedback-info__slider2[data-slider-id="${index}"] .swiper-button-prev`,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 28,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
            }
        })
    })

}

$(document).ready(function() {
    videoFeedbackSlider()
    feedbackSliders()
    feedbackSliders2()

    $(".feedback-info__more").click(function() {
        $(this).parents(".feedback-info").toggleClass("feedback-info--active")
    })
})