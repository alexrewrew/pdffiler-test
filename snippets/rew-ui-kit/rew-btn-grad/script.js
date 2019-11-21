(function ($) {
    $.fn.rewGrad = function () {
        let make = function () {

            $(this).mousemove(function (e) {

                if (!$(this).hasClass('clicked')) {

                    let posX = $(this).offset().left;
                    let posY = $(this).offset().top;

                    let x = e.pageX - posX;
                    let y = e.pageY - posY;

                    // const xc = $(this).width()/2
                    // const yc = $(this).height()/2
                    //
                    // const dx = x - xc
                    // const dy = y - yc

                    const rewBack = $(this).find('.btn-grad__back');

                    rewBack.css({'left': x + 'px', 'top': y + 'px'});

                    // $(this).css({
                    //     'transform' : 'rotateX(' + dy/-1 + 'deg) rotateY('+ dx/10 + 'deg) translateZ(-12px)'
                    // })

                }

            }).click(function (e) {

                e.preventDefault();

                var goTo = $(this).attr("href");
                $(this).addClass('clicked');


                setTimeout(function () {
                    window.location = goTo;
                }, 500);

            }).mouseleave(function() {
                $(this).css({'transform' : 'none'})
            });
        }
        return this.each(make);
    };
})(jQuery);


$('.btn-grad').rewGrad();