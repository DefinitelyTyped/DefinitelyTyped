/// <reference types="jquery"/>

var sliderInputElement = $('<input />');
sliderInputElement.ionRangeSlider({
    min: 10,
    max: 100,
    from: 30,
    to: 80,
    type: "single",
    step: 10,
    prefix: "$",
    postfix: ".00",
    maxPostfix: "+",
    hasGrid: true,
    hideMinMax: true,
    hideFromTo: true,
    prettify: true,
    disable: false,
    values: ["a", "b", "c"],
    onLoad: function (obj) {
        console.log(obj);
    },
    onChange: function (obj) {
        console.log(obj);
    },
    onFinish: function (obj) {
        console.log(obj);
    }
});
sliderInputElement.ionRangeSlider("update", {
    min: 20,
    max: 90,
    from: 40,
    to: 70,
    step: 5
});
sliderInputElement.ionRangeSlider("remove");
