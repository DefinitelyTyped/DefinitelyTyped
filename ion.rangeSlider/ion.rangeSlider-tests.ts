/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="ion.rangeSlider.d.ts"/>

var sliderInputElement = $('<input />');
sliderInputElement.ionRangeSlider({
    decorate_both: true,
    disable: false,
    drag_interval: false,
    force_edges: false,
    from: 30,
    from_fixed: false,
    from_max: 50,
    from_min: 20,
    from_shadow: false,
    grid: true,
    grid_margin: true,
    grid_num: 4,
    grid_snap: false,
    hide_from_to: false,
    hide_min_max: false,
    keyboard: true,
    keyboard_step: 1,
    max: 100,
    max_interval: 5,
    max_postfix: "+",
    min: 10,
    min_interval: 5,
    onChange: function (obj) {
        console.log(obj);
    },
    onFinish: function (obj) {
        console.log(obj);
    },
    onStart: function (obj) {
        console.log(obj);
    },
    onUpdate: function (obj) {
        console.log(obj);
    },
    postfix: ".00",
    prefix: "$",
    prettify: function(num) {
        return String(num);
    },
    prettify_enabled: true,
    prettify_separator: ",",
    step: 10,
    to: 80,
    to_fixed: false,
    to_max: 100,
    to_min: 60,
    to_shadowed: false,
    type: "double", 
    values: ["a", "b", "c"],
    values_separator: ","
});
sliderInputElement.update({
    min: 20,
    max: 90,
    from: 40,
    to: 70,
    step: 5
});
sliderInputElement.reset();
sliderInputElement.destroy();
