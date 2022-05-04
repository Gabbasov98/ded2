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



$(document).ready(function() {
    catalogGallery()
    calcPrice()

    $(".calc__item input").change(function() {
        calcPrice()

    })

    function calcPrice() {
        let wall = +$("input[name='wall']:checked").val() || 0
        let base = +$("input[name='base']:checked").val() || 0
        let roof = +$("input[name='roof']:checked").val() || 0
        let window = +$("input[name='window']:checked").val() || 0

        let all = wall + base + roof + window
            // console.log(wall, base, roof, window);

        $(".calc__all-price-desc").html(`${all.toLocaleString('ru-RU')} ₽`)
    }

    $(".calc__item-more").click(function() {

        if ($(this).hasClass("calc__item-more--active")) {
            $(".calc__item-more").removeClass("calc__item-more--active")
        } else {
            $(".calc__item-more").removeClass("calc__item-more--active")
            $(this).addClass("calc__item-more--active")
        }
    })

    $("[data-calc-detail]").click(function() {
        let id = $(this).attr("data-calc-detail")



        if ($(`#${id}`).hasClass("calc-detail--active")) {
            $(".calc-detail").removeClass("calc-detail--active")
        } else {
            $(".calc-detail").removeClass("calc-detail--active")
            $(`#${id}`).addClass("calc-detail--active")
        }
    })

    $(".calc-detail__close").click(function() {
        $(".calc-detail").removeClass("calc-detail--active")
        $(".calc__item-more").removeClass("calc__item-more--active")
    })
})

function openCalcInfo(title, desc) {

    $(".calc-modal__title").html(title)
    $(".calc-modal__desc").html(desc)
    $(".calc-modal").addClass("calc-modal--active")
    $("body").append(`<div class="modal-backdrop"></div>`)
    $("body").addClass("fixed-body")
    $(".calc-modal__close").click(function() {
        closeModal2()
    })

    $(".modal-backdrop").click(function() {
        closeModal2()
    })

}

function closeModal2() {
    $(".calc-modal").removeClass("calc-modal--active")
    $(".modal-backdrop").remove()
    $("body").removeClass("fixed-body")
}