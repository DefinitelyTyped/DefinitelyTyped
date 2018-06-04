import $ = require('jquery');

$(() => {
    // examples from http://seiyria.github.io/bootstrap-slider/

    $('#ex1').slider({
        formatter(value) {
            return 'Current value: ' + value;
        }
    });

    $('#ex2').slider({});

    const RGBChange = () => {
        $('#RGB').css('background', `rgb(${r.getValue()},${g.getValue()},${b.getValue()})`);
    };

    const r = $('#R').slider()
        .on('slide', RGBChange)
        .data('slider');
    const g = $('#G').slider()
        .on('slide', RGBChange)
        .data('slider');
    const b = $('#B').slider()
        .on('slide', RGBChange)
        .data('slider');

    $('#ex4').slider({
        reversed: true
    });

    $('#ex5').slider();

    $('#destroyEx5Slider').click(() => {
        $('#ex5').slider('destroy');
    });

    $('#ex6').slider();
    $('#ex6').on('slide', (slideEvt) => {
        $('#ex6SliderVal').text(<number> slideEvt.value);
    });

    $('#ex7').slider();

    $('#ex7-enabled').click(function(this: HTMLInputElement) {
        if (this.checked) {
            // With JQuery
            $('#ex7').slider('enable');
        } else {
            // With JQuery
            $('#ex7').slider('disable');
        }
    });

    $('#ex8').slider({
        tooltip: 'always'
    });

    $('#ex9').slider({
        precision: 2,
        value: 8.115 // Slider will instantiate showing 8.12 due to specified precision
    });

    $('#ex11').slider({ step: 20000, min: 0, max: 200000 });

    $('#ex12a').slider({ id: 'slider12a', min: 0, max: 10, value: 5 });
    $('#ex12b').slider({ id: 'slider12b', min: 0, max: 10, range: true, value: [3, 7] });
    $('#ex12c').slider({ id: 'slider12c', min: 0, max: 10, range: true, value: [3, 7] });

    $('#ex13').slider({
        ticks: [0, 100, 200, 300, 400],
        ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
        ticks_snap_bounds: 30
    });

    $('#ex14').slider({
        ticks: [0, 100, 200, 300, 400],
        ticks_positions: [0, 30, 60, 70, 90, 100],
        ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
        ticks_snap_bounds: 30
    });

    $('#ex15').slider({
        min: 1000,
        max: 10000000,
        scale: 'logarithmic',
        step: 10
    });

    $('#ex16a').slider({ min: 0, max: 10, value: 0, focus: true });
    $('#ex16b').slider({ min: 0, max: 10, value: [0, 10], focus: true });

    $("#ex17a").slider({
        min: 0,
        max: 10,
        value: 0,
        tooltip_position: 'bottom'
    });
    $("#ex17b").slider({
        min: 0,
        max: 10,
        value: 0,
        orientation: 'vertical',
        tooltip_position: 'left'
    });

    $("#ex18a").slider({
        min: 0,
        max: 10,
        value: 5,
        labelledby: 'ex18-label-1'
    });
    $("#ex18b").slider({
        min: 0,
        max: 10,
        value: [3, 6],
        labelledby: ['ex18-label-2a', 'ex18-label-2b']
    });

    $('#ex22').slider({
        id: 'slider22',
        min: 0,
        max: 20,
        step: 1,
        value: 14,
        rangeHighlights: [{ start: 2, end: 5, class: "category1" },
                          { start: 7, end: 8, class: "category2" },
                          { start: 17, end: 19 },
                          { start: 17, end: 24 },
                          { start: -3, end: 19 }]});

    $("#ex23").slider({
        ticks: [0, 1, 2, 3, 4],
        ticks_positions: [0, 30, 60, 70, 90, 100],
        ticks_snap_bounds: 200,
        formatter(value) {
            return 'Current value: ' + value;
        },
        ticks_tooltip: true,
        step: 0.01
    });

    // examples from https://github.com/seiyria/bootstrap-slider/blob/master/README.md

    {
        // Instantiate a slider
        const mySlider = $('input.slider').slider();

        // Call a method on the slider
        const value = mySlider.slider('getValue');

        // For non-getter methods, you can chain together commands
        mySlider
            .slider('setValue', 5)
            .slider('setValue', 7);
    }

    {    // Instantiate a slider
        const mySlider = $('input.slider').bootstrapSlider();

        // Call a method on the slider
        const value = mySlider.bootstrapSlider('getValue');

        // For non-getter methods, you can chain together commands
        mySlider
            .bootstrapSlider('setValue', 5)
            .bootstrapSlider('setValue', 7);
    }

    {
        // Instantiate a slider
        const mySlider = $('input.slider').bootstrapSlider();

        // Call a method on the slider
        const value = mySlider.bootstrapSlider('getValue');

        // For non-getter methods, you can chain together commands
        mySlider
            .bootstrapSlider('setValue', 5)
            .bootstrapSlider('setValue', 7);
    }

    {    // Instantiate a slider
        const mySlider = new Slider('input.slider', {
            // initial options object
        });

        // Call a method on the slider
        const value = mySlider.getValue();

        // For non-getter methods, you can chain together commands
        mySlider
            .setValue(5)
            .setValue(7);
    }
});
