(function ($) {
    $.fn.rewTabs = function () {
        let make = function () {
            const tabLinks = $(this).find('.tabs li a');
            const tabContent = $(this).find('.tabs-content');

            $.map(tabLinks, function (val, i) {

                $(tabLinks[i]).click(function (e) {
                    e.preventDefault();

                    $(tabLinks).removeClass('active');
                    $(tabContent).removeClass('active');

                    let j = $(tabLinks).index(this);

                    $(this).addClass('active');
                    $(tabContent[j]).addClass('active');
                });
            });
        };
        return this.each(make);
    };
})(jQuery);