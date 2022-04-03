function header() {

    $(".header__search-btn").click(function() {
        console.log(true)
        $(".header__search").addClass("header__search--active")
    })

    $(".header__search input").keyup(function() {
        if ($(this).val()) {
            $(".header__search-hidden").addClass("header__search-hidden--active")
        } else {
            $(".header__search-hidden").removeClass("header__search-hidden--active")
        }
    })


    $(document).mouseup(function(e) {
        var div = $('.header__search-hidden');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if (div.hasClass("header__search-hidden--active")) {
                div.removeClass("header__search-hidden--active")
            }
        }
    });

    $(document).mouseup(function(e) {
        var div = $('.header__search-show');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(".header__search").hasClass("header__search--active")) {
                console.log(true)
                $(".header__search").removeClass("header__search--active")
            }
        }
    });

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header__mob-menu").toggleClass("header__mob-menu--active")
        $("body").toggleClass("fixed-body")
    })

    $(".nav__item").hover(onIn, onOut);
    $(".nav__item-show").click(function() {
        if ((window.innerWidth < 992)) {
            $(this).siblings(".nav__item-hidden").slideToggle()
        }

    })

    $(window).scroll(function() {
        if (window.innerWidth > 992) {
            if ($(this).scrollTop() > 20) {
                $(".header--sticky").removeClass("header--index")
            } else {
                $(".header--sticky").addClass("header--index")
            }
        }

    })

    if ($(this).scrollTop() > 20) {
        $(".header--sticky").removeClass("header--index")
    } else {
        $(".header--sticky").addClass("header--index")
    }

    $(".header__search-clear").click(function() {
        $(this).siblings("input").val("")
    })

    function onIn() {
        if (window.innerWidth > 992) {
            let el = $(this)
            setTimeout(function() {
                if (el.is(':hover')) {
                    console.log(el)
                    el.addClass("nav__item--active")
                }
            }, 200);
        }
    }

    function onOut() {
        if (window.innerWidth > 992) {
            $(this).removeClass("nav__item--active")
        }
    }

};