'use strict';

(function () {
    var opacity;
    var opacityLeave;
    var heightMainWrapper;

    var widthWrapperButton;
    var orientationForm = 'left';
    var orientationFormDiff = orientationForm === 'right' ? 'left' : 'right';
    var orientationButton = 'left';
    var hasLabels = ($('#eaFloatButton .eaFloatButton__label').length > 0);


    var isOpenForm = false;
    var form = $('#eaForm');
    var eaFloatButton = $('#eaFloatButton');
    var eaFloatButtonIcons = $('.eaFloatButton__icons');
    var eaFloatButtonMiniQuick = document.getElementsByClassName("eaFloatButton__above");
    var widthForm = form.outerWidth();

    heightMainWrapper = eaFloatButtonMiniQuick.length * 70 + 170 + 'px';
    setWidthWrapper();
    setNameStyle();

    $('.controls__form input').on('click', function () {
        orientationForm = $(this).val();
        orientationFormDiff = orientationForm === 'right' ? 'left' : 'right';
        setNameStyle();
    });

    $('.controls__button input').on('click', function () {
        orientationButton = $(this).val();
        setNameStyle();
    });

    $('.controls__sign input').on('click', function () {
        setWidthWrapper();
    });

    $('.controls__sign input').on('click', function () {
        $('.eaFloatButton__label').toggle();
    });

    function setWidthWrapper() {
        widthWrapperButton = $('input[name="label"]:checked').val() === '0' ? '85px' : '230px';
    }

    function setNameStyle() {
        var left = 'l', right = 'r';
        var oF = orientationForm === 'left' ? left : right;
        var oB = orientationButton === 'left' ? left : right;
        for (var i = 0; i < 4; i++) {
            document.querySelectorAll('link')[i].disabled = true;
        }
        document.querySelectorAll('#css_' + oF + oB)[0].disabled = false;

        if (orientationForm == 'left') {
            $('.eaForm').css({
                right: 'auto',
                left: -widthForm + 'px'
            });
        } else {
            $('.eaForm').css({
                left: 'auto',
                right: -widthForm + 'px'
            });
        }
    }


    $('.eaFloatButton__main, .eaFloatButton__above').on("click", function (el) {
        el.preventDefault();
        if ($(this).hasClass('eaFloatButton__above') && $(this).data('src') !== undefined) {
            window.open($(this).data('src'), '_blank');
        } else {
            toggleForm(this);
            eaFloatButton.hide(200);
        }
    });

    $('.eaForm__close, #eaFormOverlay').on('click', function () {
        toggleForm('eaForm');
        eaFloatButton.show(200);
    });

    $('.eaForm__tabs .eaFloatButton__circle').on('click', function () {
        if ($(this).data('src') !== undefined) {
            window.open($(this).data('src'), '_blank');
        } else {
            switchTabs($(this).data('form'));
        }

    });

    function switchTabs(form) {
        $('.eaForm__container').hide();
        $('.eaForm__container--' + form).show();
    }

    eaFloatButton.on("mouseenter", function () {
        $(this).height(heightMainWrapper);
        if (hasLabels) {
            $(this).width(widthWrapperButton);
        }
        clearInterval(opacityLeave);
        showMiniQuick(eaFloatButtonMiniQuick.length);
    });

    eaFloatButton.on("mouseleave", function () {
        opacityLeave = setTimeout(function () {
            eaFloatButton.height('85px').width(widthWrapperButton);
            clearInterval(opacity);
            $('.eaFloatButton__above').each(function (index) {

                $(this).removeClass('eaFloatButton__above--opacity');

            });
        }, 500)

    });

    function toggleForm(self) {
        var animateParams = {};
        var resetSide = {};
        resetSide[orientationFormDiff] = 'auto';
        form.css(resetSide);
        $('#eaFormOverlay').toggle();

        if ($(self).data('form') !== undefined) {
            switchTabs($(self).data('form'));
        } else {
            switchTabs('email');
        }
        if (!isOpenForm) {
            animateParams[orientationForm] = 0;

            form.animate(animateParams, 400);
        } else {
            animateParams[orientationForm] = -widthForm + 'px';
            form.animate(animateParams, 400);
        }
        isOpenForm = !isOpenForm;
    }


    function showMiniQuick(i) {
        if (i >= 0) {
            opacity = setTimeout(function () {
                $(eaFloatButtonMiniQuick[i]).addClass("eaFloatButton__above--opacity");
                i--;
                showMiniQuick(i)
            }, 280)
        }
    }

    (function () {
        var i = 0;

        setInterval(function () {
            eaFloatButtonIcons.find('.eaFloatButton__icon').removeClass('eaFloatButton__icon--show');
            eaFloatButtonIcons.find('.eaFloatButton__icon').each(function (index) {
                if (index === i) {
                    $(this).addClass('eaFloatButton__icon--show');

                }
            });
            i++;

            if (i >= eaFloatButtonIcons.find('.eaFloatButton__icon').length) {
                i = 0;
            }
        }, 2000);
    })();

})();