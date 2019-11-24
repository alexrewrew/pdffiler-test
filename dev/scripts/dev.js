(function($){
    "use strict";

    $(document).ready(function () {

        var clickCount = 0;

        var validator = $("#formPayment").validate({
            errorElement: 'div',

            rules: {
                firstName: {
                    required: true,
                    minlength: 2,
                },
                lastName: {
                    required: true,
                    minlength: 2,
                },
                cardNumber: {
                    required: true,
                    minlength: 16,

                },
                expDateMonth: {
                    required: true,
                },
                expDateYear: {
                    required: true,
                },
                cvv: {
                    required: true,
                    minlength: 3,
                },
                zipCode: {
                    required: true,
                    number: true
                }
            },
            invalidHandler: function(event, validator) {
                clickCount = 2;
                console.log(clickCount);
            },
            showErrors: function (errorMap, errorList) {
                if (errorList.length) {
                    var s = errorList.shift();
                    var n = [];
                    n.push(s);
                    this.errorList = n;
                }
                this.defaultShowErrors();
            },
            onkeyup: false,
            onfocusout: function (element) {
                this.element( element );
                clickCount = 1;
            }
        });

        jQuery.extend(jQuery.validator.messages, {
            required: "<b>Required field.</b> Can’t be empty",
            minlength: jQuery.validator.format("Enter at least <b>{0} characters.</b>"),
        });


        $(document).mouseup(function (e){
            var tooltip = $(".input-group__tooltip, .input-group__icon");
            if (!tooltip.is(e.target) && tooltip.has(e.target).length === 0) {
                $('.input-group__tooltip').removeClass('visible');
            }

            var formElements = $("input, select, .btn");

            if (!formElements.is(e.target) && formElements.has(e.target).length === 0) {
                clickCount++;
                if (clickCount >= 2) {
                    validator.resetForm();
                    clickCount = 0;
                }
            }
        });

        $('.input-group__icon').click(function () {
            $(this).siblings('.input-group__tooltip').toggleClass('visible');
        });

        $('#cardNumber').mask('0000 0000 0000 0000', {'translation': {0: {pattern: /[0-9*]/}}});
        $('#cvv').mask('9999');
        $('#zipCode').mask('99999');

    });
})(jQuery);




