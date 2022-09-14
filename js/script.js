$(document).ready(function () {

    const md2 = 991.98;

// Меню бургер

    if($(window).width() < md2)
    {
        $('.cabinet__icon').on('click', function () {
            $('.menu-left').addClass('_active');
            $('body').addClass('_lock _trans');
        });

        $('.menu-left__btn_close').on('click', function () {
            $('.menu-left').removeClass('_active');
            $('body').removeClass('_lock _trans');
        });

        $('.icon-menu').on('click', function () {
            $('.icon-menu').toggleClass('_active');
            $('body').toggleClass('_lock');
            $('.menu-hidden').toggleClass('_active');
        });
    } else {
        $('.header__menu').on('click', function () {
            $('.icon-menu').toggleClass('_active');
            $('.menu-hidden').toggleClass('_active');
        });
    }

// Часы

    if ($('#clock').length > 0) {
        const minsHand = document.querySelector('#clock-kiev .minutes');
        const hourHand = document.querySelector('#clock-kiev .hours');

        function setDate() {
            const now = new Date();
            var seconds = now.getSeconds();
            var mins = now.getMinutes();
            const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
            minsHand.style.transform = `rotate(${minsDegrees}deg)`;
            var hour = now.getHours();
            const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
            hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        }

        setInterval(setDate, 1000);
        setDate();
    }


// Слайдеры

    if ($('#topSlider').length > 0) {
        new Swiper('#topSlider', {
            pagination: {
                el: '.swiper-pagination'
            },
            loop: true,
            preloadImages: false,
            lazy: {
                loadOnTransitionStart: false,
                loadPrevNext: true
            }
        });
    }

    if ($('#masterClass').length > 0) {
        new Swiper('#masterClass', {
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                dragSize: '15px'
            },
            followFinger: false,
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 18,
            slidesPerColumnFill: 'row',
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                767.98: {
                    slidesPerView: 2
                },
                991.98: {
                    slidesPerView: 4
                }
            }
        });
    }

    if ($('#masterClassSchool').length > 0) {
        new Swiper('#masterClassSchool', {
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                dragSize: '15px'
            },
            followFinger: false,
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 18,
            slidesPerColumnFill: 'row',
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                767.98: {
                    slidesPerView: 2
                },
                991.98: {
                    slidesPerView: 4
                }
            }
        });
    }

    if ($('#onlineLectures').length > 0) {
        new Swiper('#onlineLectures', {
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                dragSize: '15px'
            },
            followFinger: false,
            slidesPerView: 2,
            spaceBetween: 18,
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                767.98: {
                    slidesPerView: 2
                }
            }
        });
    }




    //================================================================
    if ($('#sliderArchive').length > 0) {
        var swiperArchive = new Swiper('#sliderArchive', {
            scrollbar: {
                el: '.scrollbar-archive',
                draggable: true,
                dragSize: '12px'
            },
            followFinger: false,
            slidesPerView: 6,
            spaceBetween: 15,
            slidesPerColumnFill: 'row'
        });
        $('#filterArchive1 .filter-slider__item').on('click', function(){

            var filter = $(this).html().toUpperCase();
            $('#filterArchive1 .filter-slider__item').removeClass('active');
            $(this).addClass('active');
            $('#sliderArchive .swiper-slide').not('[data-filter="'+filter+'"]').addClass('non-swiper-slide').removeClass('swiper-slide');
            $('[data-filter="'+filter+'"]').removeClass('non-swiper-slide').addClass('swiper-slide');

            swiperArchive.destroy();
            swiperArchive = new Swiper('#sliderArchive', {
                scrollbar: {
                    el: '.scrollbar-archive',
                    draggable: true,
                    dragSize: '12px'
                },
                followFinger: false,
                slidesPerView: 6,
                spaceBetween: 15,
                slidesPerColumnFill: 'row'
            });
        })

        $('#filterArchive2 .filter-slider__item').on('click', function(){

            var filter = $(this).html().toUpperCase();
            $('#filterArchive2 .filter-slider__item').removeClass('active');
            $(this).addClass('active');
            $('#sliderArchive .swiper-slide').not('[data-filter="'+filter+'"]').addClass('non-swiper-slide').removeClass('swiper-slide');
            $('[data-filter="'+filter+'"]').removeClass('non-swiper-slide').addClass('swiper-slide');

            swiperArchive.destroy();
            swiperArchive = new Swiper('#sliderArchive', {
                scrollbar: {
                    el: '.scrollbar-archive',
                    draggable: true,
                    dragSize: '12px'
                },
                followFinger: false,
                slidesPerView: 6,
                spaceBetween: 15,
                slidesPerColumnFill: 'row'
            });
        })
    }


    if ($('#sliderProject').length > 0) {
        var swiperProject = new Swiper('#sliderProject', {
            scrollbar: {
                el: '.scrollbar-project',
                draggable: true,
                dragSize: '12px'
            },
            followFinger: false,
            slidesPerView: 6,
            spaceBetween: 15,
            slidesPerColumnFill: 'row'
        });
        $('#filterProject .filter-slider__item').on('click', function(){

            var filter = $(this).html().toUpperCase();
            $('#filterProject .filter-slider__item').removeClass('active');
            $(this).addClass('active');
            $('#sliderProject .swiper-slide').not('[data-filter="'+filter+'"]').addClass('non-swiper-slide').removeClass('swiper-slide');
            $('[data-filter="'+filter+'"]').removeClass('non-swiper-slide').addClass('swiper-slide');

            swiperProject.destroy();
            swiperProject = new Swiper('#sliderProject', {
                scrollbar: {
                    el: '.scrollbar-project',
                    draggable: true,
                    dragSize: '12px'
                },
                followFinger: false,
                slidesPerView: 6,
                spaceBetween: 15,
                slidesPerColumnFill: 'row'
            });
        })
    }

    if ($('#sliderAchievements').length > 0) {
        var swiperAchievements = new Swiper('#sliderAchievements', {
            scrollbar: {
                el: '.scrollbar-achievements',
                draggable: true,
                dragSize: '12px'
            },
            followFinger: false,
            slidesPerView: 6,
            spaceBetween: 15,
            slidesPerColumnFill: 'row'
        });
        $('#filterAchievements .filter-slider__item').on('click', function(){

            var filter = $(this).html().toUpperCase();
            $('#filterAchievements .filter-slider__item').removeClass('active');
            $(this).addClass('active');
            $('#sliderAchievements .swiper-slide').not('[data-filter="'+filter+'"]').addClass('non-swiper-slide').removeClass('swiper-slide');
            $('[data-filter="'+filter+'"]').removeClass('non-swiper-slide').addClass('swiper-slide');

            swiperAchievements.destroy();
            swiperAchievements = new Swiper('#sliderAchievements', {
                scrollbar: {
                    el: '.scrollbar-achievements',
                    draggable: true,
                    dragSize: '12px'
                },
                followFinger: false,
                slidesPerView: 6,
                spaceBetween: 15,
                slidesPerColumnFill: 'row'
            });
        })
    }


    //================================================================

    if ($('#verticalSlider').length > 0) {
        new Swiper('#verticalSlider', {
            direction: 'vertical',
            autoHeight: true,
            slidesPerView: 'auto',
            spaceBetween: 15,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                dragSize: '15px'
            },
            followFinger: false

        });


        // $('#verticalSlider').container.on('transitionend webkitTransitionEnd', function () {
        //     $('#verticalSlider').update(true)
        // });
    }


    $('.filter__menu').on('click', function () {
        $('.filter__body').toggleClass('_active');
        $('.filter__btn').toggleClass('_active');
    });


//    profile
    $('body').on('click', '#changePhoto', function () {
        $('#photoUpload').click();
    });

    $('.profile-interest__list').on('click', '.profile-interest__list-item', function () {
        $(this).toggleClass('_select');
    });

    var slider = document.getElementById('rangeSlider');
    if (slider) {
        noUiSlider.create(slider, {
            start: [10, 15],
            connect: [false, true, false],
            padding: [0, 0],
            step: 1,
            margin: 5,
            pips: {
                mode: 'values',
                values: [1, 10, 15, 20],
                stepped: true
            },
            range: {
                'min': 1,
                'max': 20
            }
        });
    }


    $('#profileDate').datepicker({
        dateFormat: 'dd-mm-yy',
        prevText: "",
        nextText: "",
        currentText: "",
        firstDay: 0,
        changeMonth: true,
        changeYear: true,
        yearRange: '1950:2021',
        beforeShow: function(input, inst) {
            setTimeout(function () {
                var offsets = $(".profile-date__body").offset();
                var top = offsets.top;
                var left = offsets.left;
                var right = ($(window).width() - (left + $(".profile-date__body").outerWidth()));

                inst.dpDiv.css({
                    top: top,
                    right: right
                });
            });
        }
    });


    $('.icon-calendar').click(function() {
        $(this)
            .closest('.profile-date__group')
            .find('.name-group__input-calendar').focus();
    });



});

//------------
datePicker();

const monthsNow = new Date().getMonth();

function datePicker() {
    $(document).ready(function () {
        $("#calendar").datepicker({
            dateFormat: "MM d, yy",
            beforeShowDay: dateRange,
            onSelect: DRonSelect,
            numberOfMonths: 12,
            firstDay: 0,
            defaultDate: `-${monthsNow}m`,
        });
    });
}

function dateRange(date) {
    var date1 = $.datepicker.parseDate("MM d, yy", $("#checkinDate").text());
    var date2 = $.datepicker.parseDate("MM d, yy", $("#checkoutDate").text());
    var isHighlight = date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2));
    $(document).ready(function () {
        // $("td.dp-highlight").text("Y");

    });
    return [true, isHighlight ? "dp-highlight" : ""];
}

function DRonSelect(dateText, inst) {
    var date1 = $.datepicker.parseDate("MM d, yy", $("#checkinDate").text());
    var date2 = $.datepicker.parseDate("MM d, yy", $("#checkoutDate").text());
    if (!date1 || date2) {
        $("#checkinDate").text(dateText);
        $("#checkoutDate").text("");
        $("#calendar").datepicker();
    }
    else {
        if ($.datepicker.parseDate("MM d, yy", $("#checkinDate").text()) >=
            $.datepicker.parseDate("MM d, yy", dateText)) {
            $("#checkinDate").text(dateText);
            $("#checkoutDate").text("");
            $("#calendar").datepicker();
        }
        else {
            $("#checkoutDate").text(dateText);
            $("#calendar").datepicker();
        }
    }
}