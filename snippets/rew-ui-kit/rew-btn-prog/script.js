(function ($) {
    $.fn.rewProg = function () {
        let make = function () {

            $(this).mousemove(function (e) {

                if (!$(this).hasClass('clicked')) {

                    let posX = $(this).offset().left;
                    let x = e.pageX - posX;
                    const rewBack = $(this).find('.btn-prog__back');

                    rewBack.css('width', x + 'px');
                }

            }).mouseleave(function () {

                const rewBack = $(this).find('.btn-prog__back');
                rewBack.css('width', '0');

            }).click(function (e) {

                e.preventDefault();

                var goTo = $(this).attr("href");
                $(this).addClass('clicked');


                setTimeout(function () {
                    window.location = goTo;
                }, 500);

            });
        }
        return this.each(make);
    };
})(jQuery);

$('.btn-prog').rewProg();