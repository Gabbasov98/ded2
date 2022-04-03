$(document).ready(function() {

    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7          -    ' });

    let cardSlidersArray = []

    function cardSliders() {
        $(".project-card").each(function(index, el) {
            $(el).attr("data-slider-id", `${index}`)
            cardSlidersArray[index] = new Swiper(`.project-card[data-slider-id="${index}"] .swiper-container`, {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                navigation: {
                    nextEl: `.project-card[data-slider-id="${index}"] .swiper-button-next`,
                    prevEl: `.project-card[data-slider-id="${index}"] .swiper-button-prev`,
                },
                pagination: {
                    el: `.project-card[data-slider-id="${index}"] .swiper-pagination`,
                    type: 'bullets',
                    clickable: true,
                },
                on: {
                    init: function() {
                        var slider = this;
                        $(`.project-card[data-slider-id="${index}"] .swiper-container`).mouseenter(function() {
                            slider.autoplay.start();
                        }).mouseleave(function() {
                            slider.autoplay.stop();
                        });
                    }
                }
            })
        })
    }

    let serviceSlidersArray = []

    function serviceSliders() {
        $(".service__item-right").each(function(index, el) {
            $(el).attr("data-slider-id", `${index}`)
            serviceSlidersArray[index] = new Swiper(`.service__item-right[data-slider-id="${index}"] .swiper-container`, {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                navigation: {
                    nextEl: `.service__item-right[data-slider-id="${index}"] .swiper-button-next`,
                    prevEl: `.service__item-right[data-slider-id="${index}"] .swiper-button-prev`,
                }
            })
        })
    }

    cardSliders()
    serviceSliders()

    $(".tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(this).parents(".tab-parent").find(".tab").removeClass("tab--active")
        $(this).parents(".tab-parent").find(`.tab[data-tab-path="${path}"]`).addClass("tab--active")
        $(this).parents(".tab-parent").find(".tab__content").removeClass("tab__content--active")
        $(this).parents(".tab-parent").find(`.tab__content[data-tab-path="${path}"]`).addClass("tab__content--active")
    })

    $(".project-card__top").hover(onIn, onOut);

    let cardInterval

    function onIn() {
        let length = +$(this).find(".project-card__img").length
        let path = +$(this).find(".project-card__img--active").attr("data-tab-path")
        cardInterval = setInterval(() => {
            $(this).find(".project-card__img").removeClass("project-card__img--active")
            $(this).find(`.project-card__img[data-tab-path="${path+1}"`).addClass("project-card__img--active")
            $(this).find(".project-card__pag-item").removeClass("project-card__pag-item--active")
            $(this).find(`.project-card__pag-item[data-tab-path="${path+1}"`).addClass("project-card__pag-item--active")
            console.log(path)
            if (path < length) {
                path++
            }
            if (path === length) {
                path = 0
            }
        }, 3000);
    }

    function onOut() {
        clearInterval(cardInterval)
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $(".scroll-up").addClass("scroll-up--active")
        } else {
            $(".scroll-up").removeClass("scroll-up--active")
        }
    })

    $(".scroll-up").click(function() {
        $(window).scrollTop(0);
    })



    document.querySelectorAll(".custom-select").forEach(el => {
        el.onclick = function() {
            el.classList.toggle("custom-select--active")
        }

        document.addEventListener('click', (e) => {
            const withinBoundaries = e.composedPath().includes(el);
            if (!withinBoundaries) {
                el.classList.remove("custom-select--active")
            }
        });
    })

    function unselectOption(dropdown) {
        for (let elem of dropdown.getElementsByTagName('div')) {
            elem.classList.remove("custom-select__dropdown-item--selected")
        }
    }

    document.querySelectorAll(".custom-select__dropdown-item").forEach(el => {
        el.onclick = function() {
            unselectOption(el.closest(".custom-select__dropdown"))
            el.classList.add("custom-select__dropdown-item--selected")
            for (let elem of el.closest(".custom-select").getElementsByTagName('input')) {
                elem.setAttribute("value", el.innerHTML)
            }
        }
    })

    $(".filter__btn").click(function() {
        $(this).addClass("filter__btn--active")
        $(".filter__wrap").addClass("filter__wrap--active")
    })

    $(document).mouseup(function(e) {
        var div = $('.filter__wrap');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(".filter__wrap").hasClass("filter__wrap--active")) {
                $(".filter__btn").removeClass("filter__btn--active")
                $(".filter__wrap").removeClass("filter__wrap--active")
            }
        }
    });

    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            'download',
            // 'thumbs',
            'close'
        ]
    });

    let val = $(".form-group input").val()
    let val2 = $(".form-group textarea").val()
    if (val) {
        $(this).addClass("input-active")
    } else {
        $(this).removeClass("input-active")
    }
    if (val2) {
        $(this).addClass("input-active")
    } else {
        $(this).removeClass("input-active")
    }
    $(".form-group input").change(function() {
        let val = $(this).val()
        console.log(val)
        if (val) {
            $(this).addClass("input-active")
        } else {
            $(this).removeClass("input-active")
        }
    })

    $(".form-group textarea").change(function() {
        let val = $(this).val()
        console.log(val)
        if (val) {
            $(this).addClass("input-active")
        } else {
            $(this).removeClass("input-active")
        }
    })


    $('[data-modal-target]').click(function() {
        let id = $(this).attr("data-modal-target")
        console.log(id)
        $("body").append(`<div class="modal-backdrop"></div>`)
        $(`#${id}`).addClass("modal--active")
        $("body").addClass("fixed-body")

        $(".modal-backdrop").click(function() {
            closeModal()
        })
        $(".modal__close").click(function() {
            closeModal()
        })
    });




    $("[data-bg-style]").each(function(index, el) {
        let bg = $(el).attr("data-bg-style")
        console.log(bg, el)
        $(el).css('background-image', bg);
    })
    $("[data-src]").each(function(index, el) {
        let img = $(el).attr("data-src")

        $(el).attr("src", img)
        console.log(el)
    })
})


function closeModal() {
    $("body").removeClass("fixed-body")
    $(".modal-backdrop").remove()
    $(".modal").removeClass("modal--active")
}