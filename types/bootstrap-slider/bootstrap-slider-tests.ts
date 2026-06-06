import $ = require("jquery");
import Slider = require("bootstrap-slider");

$(() => {
    // examples from http://seiyria.github.io/bootstrap-slider/

    $("#ex1").slider({
        formatter(value) {
            return "Current value: " + value;
        },
    });
    new Slider("#ex1", {
        formatter(value) {
            return "Current value: " + value;
        },
    });

    $("#ex2").slider({});
    new Slider("#ex2", {});

    const RGBChange = () => {
        $("#RGB").css("background", `rgb(${r.getValue()},${g.getValue()},${b.getValue()})`);
    };

    const r = $("#R").slider()
        .on("slide", RGBChange)
        .data("slider");
    const g = $("#G").slider()
        .on("slide", RGBChange)
        .data("slider");
    const b = $("#B").slider()
        .on("slide", RGBChange)
        .data("slider");

    $("#ex4").slider({
        reversed: true,
    });
    new Slider("#ex4", {
        reversed: true,
    });

    $("#ex5").slider();
    let slider = new Slider("#ex5");

    $("#destroyEx5Slider").click(() => {
        $("#ex5").slider("destroy");
        slider.destroy();
    });

    $("#ex6").slider();
    $("#ex6").on("slide", (slideEvt) => {
        $("#ex6SliderVal").text(<number> slideEvt.value);
    });
    slider = new Slider("#ex6");
    slider.on("slide", (sliderValue) => {
        document.getElementById("ex6SliderVal")!.textContent = sliderValue!.toString();
    });

    $("#ex7").slider();
    slider = new Slider("#ex7");

    $<HTMLInputElement>("#ex7-enabled").click(function() {
        if (this.checked) {
            // With JQuery
            $("#ex7").slider("enable");
            slider.enable();
        } else {
            // With JQuery
            $("#ex7").slider("disable");
            slider.disable();
        }
    });

    $("#ex8").slider({
        tooltip: "always",
    });
    slider = new Slider("#ex8", {
        tooltip: "always",
    });

    $("#ex9").slider({
        precision: 2,
        value: 8.115, // Slider will instantiate showing 8.12 due to specified precision
    });
    slider = new Slider("#ex9", {
        precision: 2,
        value: 8.115, // Slider will instantiate showing 8.12 due to specified precision
    });

    $("#ex11").slider({ step: 20000, min: 0, max: 200000 });
    slider = new Slider("#ex11", {
        step: 20000,
        min: 0,
        max: 200000,
    });

    $("#ex12a").slider({ id: "slider12a", min: 0, max: 10, value: 5 });
    $("#ex12b").slider({ id: "slider12b", min: 0, max: 10, range: true, value: [3, 7] });
    $("#ex12c").slider({ id: "slider12c", min: 0, max: 10, range: true, value: [3, 7] });
    let sliderA = new Slider("#ex12a", { id: "slider12a", min: 0, max: 10, value: 5 });
    let sliderB = new Slider("#ex12b", { id: "slider12b", min: 0, max: 10, range: true, value: [3, 7] });
    const sliderC = new Slider("#ex12c", { id: "slider12c", min: 0, max: 10, range: true, value: [3, 7] });

    $("#ex13").slider({
        ticks: [0, 100, 200, 300, 400],
        ticks_labels: ["$0", "$100", "$200", "$300", "$400"],
        ticks_snap_bounds: 30,
    });
    slider = new Slider("#ex13", {
        ticks: [0, 100, 200, 300, 400],
        ticks_labels: ["$0", "$100", "$200", "$300", "$400"],
        ticks_snap_bounds: 30,
    });

    $("#ex14").slider({
        ticks: [0, 100, 200, 300, 400],
        ticks_positions: [0, 30, 60, 70, 90, 100],
        ticks_labels: ["$0", "$100", "$200", "$300", "$400"],
        ticks_snap_bounds: 30,
    });
    slider = new Slider("#ex14", {
        ticks: [0, 100, 200, 300, 400],
        ticks_positions: [0, 30, 70, 90, 100],
        ticks_labels: ["$0", "$100", "$200", "$300", "$400"],
        ticks_snap_bounds: 30,
    });

    $("#ex15").slider({
        min: 1000,
        max: 10000000,
        scale: "logarithmic",
        step: 10,
    });
    slider = new Slider("#ex15", {
        min: 1000,
        max: 10000000,
        scale: "logarithmic",
        step: 10,
    });

    $("#ex16a").slider({ min: 0, max: 10, value: 0, focus: true });
    $("#ex16b").slider({ min: 0, max: 10, value: [0, 10], focus: true });
    sliderA = new Slider("#ex16a", { min: 0, max: 10, value: 0, focus: true });
    sliderB = new Slider("#ex16b", { min: 0, max: 10, value: [0, 10], focus: true });

    $("#ex17a").slider({
        min: 0,
        max: 10,
        value: 0,
        tooltip_position: "bottom",
    });
    $("#ex17b").slider({
        min: 0,
        max: 10,
        value: 0,
        orientation: "vertical",
        tooltip_position: "left",
    });
    sliderA = new Slider("#ex17a", {
        min: 0,
        max: 10,
        value: 0,
        tooltip_position: "bottom",
    });
    sliderB = new Slider("#ex17b", {
        min: 0,
        max: 10,
        value: 0,
        orientation: "vertical",
        tooltip_position: "left",
    });

    $("#ex18a").slider({
        min: 0,
        max: 10,
        value: 5,
        labelledby: "ex18-label-1",
    });
    $("#ex18b").slider({
        min: 0,
        max: 10,
        value: [3, 6],
        labelledby: ["ex18-label-2a", "ex18-label-2b"],
    });
    new Slider("#ex18a", {
        min: 0,
        max: 10,
        value: 5,
        labelledby: "ex18-label-1",
    });
    new Slider("#ex18b", {
        min: 0,
        max: 10,
        value: [3, 6],
        labelledby: ["ex18-label-2a", "ex18-label-2b"],
    });

    $("#ex22").slider({
        id: "slider22",
        min: 0,
        max: 20,
        step: 1,
        value: 14,
        rangeHighlights: [
            { start: 2, end: 5, class: "category1" },
            { start: 7, end: 8, class: "category2" },
            { start: 17, end: 19 },
            { start: 17, end: 24 },
            { start: -3, end: 19 },
        ],
    });
    slider = new Slider("#ex22", {
        id: "slider22",
        min: 0,
        max: 20,
        step: 1,
        value: 14,
        rangeHighlights: [
            { start: 2, end: 5, class: "category1" },
            { start: 7, end: 8, class: "category2" },
            { start: 17, end: 19 },
            { start: 17, end: 24 },
            { start: -3, end: 19 },
        ],
    });

    $("#ex23").slider({
        ticks: [0, 1, 2, 3, 4],
        ticks_positions: [0, 30, 60, 70, 90, 100],
        ticks_snap_bounds: 200,
        formatter(value) {
            return "Current value: " + value;
        },
        ticks_tooltip: true,
        step: 0.01,
    });
    new Slider("#ex23", {
        ticks: [0, 1, 2, 3, 4],
        ticks_positions: [0, 30, 70, 90, 100],
        ticks_snap_bounds: 200,
        formatter(value) {
            return "Current value: " + value;
        },
        ticks_tooltip: true,
        step: 0.01,
    });

    $("#ex25").slider({
        value: [1, 100],
        ticks: [1, 50, 100],
        lock_to_ticks: true,
    });

    $("#ex26").slider("refresh", { useCurrentValue: true });
    slider = new Slider("#ex26");
    slider.refresh({ useCurrentValue: true });

    // examples from https://github.com/seiyria/bootstrap-slider/blob/master/README.md

    {
        // Instantiate a slider
        const mySlider = $("input.slider").slider();

        // Call a method on the slider
        const value = mySlider.slider("getValue");

        // For non-getter methods, you can chain together commands
        mySlider
            .slider("setValue", 5)
            .slider("setValue", 7);
    }

    { // Instantiate a slider
        const mySlider = $("input.slider").bootstrapSlider();

        // Call a method on the slider
        const value = mySlider.bootstrapSlider("getValue");

        // For non-getter methods, you can chain together commands
        mySlider
            .bootstrapSlider("setValue", 5)
            .bootstrapSlider("setValue", 7);
    }

    {
        // Instantiate a slider
        const mySlider = $("input.slider").bootstrapSlider();

        // Call a method on the slider
        const value = mySlider.bootstrapSlider("getValue");

        // For non-getter methods, you can chain together commands
        mySlider
            .bootstrapSlider("setValue", 5)
            .bootstrapSlider("setValue", 7);
    }

    { // Instantiate a slider
        const mySlider = new Slider("input.slider", {
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
