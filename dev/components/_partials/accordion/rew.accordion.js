(function ($) {
    $.fn.rewAccordion = function () {
        let make = function () {
            const accordionLinks = $(this).find('.accordion_heading');
            const accordionContent = $(this).find('.accordion__panel');

            $.map(accordionLinks, function (val, i) {
                $(accordionLinks[i]).on('click', function (e) {
                    e.preventDefault();

                    const j = $(accordionLinks).index(this);

                    if ($(this).hasClass('active')) {

                        $(this).removeClass('active');
                        $(accordionContent[j]).slideUp();

                    } else {

                        $(accordionLinks).removeClass('active');
                        $(accordionContent).slideUp();

                        $(this).addClass('active');
                        $(accordionContent[j]).slideDown();
                    }
                });
            });
        };
        return this.each(make);
    };
})(jQuery);