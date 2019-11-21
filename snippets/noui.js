(function () {
    'use strict';
    $(document).ready(function () {

// ----- RANGE SLIDER -----

        var keypressSlider = document.getElementById('nouislider');
        var input0 = document.getElementById('nouislider-input0');
        var input1 = document.getElementById('nouislider-input1');
        var inputs = [input0, input1];

        noUiSlider.create(keypressSlider, {
            start: [12, 18416],
            connect: true,
            direction: 'ltr',
            range: {
                'min': [0],
                'max': 20000
            },
            format: wNumb({
                decimals: 0,
            })
        });

        keypressSlider.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = values[handle];
        });

        function setSliderHandle(i, value) {
            var r = [null, null];
            r[i] = value;
            keypressSlider.noUiSlider.set(r);
        }

        inputs.forEach(function (input, handle) {

            input.addEventListener('change', function () {
                setSliderHandle(handle, this.value);
            });

            input.addEventListener('keydown', function (e) {

                var values = keypressSlider.noUiSlider.get();
                var value = Number(values[handle]);

                // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
                var steps = keypressSlider.noUiSlider.steps();

                // [down, up]
                var step = steps[handle];

                var position;

                // 13 is enter,
                // 38 is key up,
                // 40 is key down.
                switch (e.which) {

                    case 13:
                        setSliderHandle(handle, this.value);
                        break;

                    case 38:

                        // Get step to go increase slider value (up)
                        position = step[1];

                        // false = no step is set
                        if (position === false) {
                            position = 1;
                        }

                        // null = edge of slider
                        if (position !== null) {
                            setSliderHandle(handle, value + position);
                        }

                        break;

                    case 40:

                        position = step[0];

                        if (position === false) {
                            position = 1;
                        }

                        if (position !== null) {
                            setSliderHandle(handle, value - position);
                        }

                        break;
                }
            });
        });

    });
})();