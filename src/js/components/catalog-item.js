function catalogGallery() {
    var swiper = new Swiper(".catalog-item .mySwiper", {
        spaceBetween: 9,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            },
        }
    });
    var swiper2 = new Swiper(".catalog-item .mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".catalog-item .swiper-button-next",
            prevEl: ".catalog-item .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

function decorSlider() {
    var swiper = new Swiper('.decor .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 18,
        navigation: {
            nextEl: '.decor .swiper-button-next',
            prevEl: '.decor .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        }
    })
}

$(document).ready(function() {
    catalogGallery()
    decorSlider()


    $(".calc__item input").change(function() {
        let wall = +$("input[name='wall']:checked").val() || 0
        let base = +$("input[name='base']:checked").val() || 0
        let roof = +$("input[name='roof']:checked").val() || 0
        let window = +$("input[name='window']:checked").val() || 0

        let all = wall + base + roof + window
        console.log(wall, base, roof, window);

        $(".calc__all-price-desc").html(`${all.toLocaleString('ru-RU')} ₽`)

    })
})