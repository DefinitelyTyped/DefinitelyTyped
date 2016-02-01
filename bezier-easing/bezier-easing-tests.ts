/// <reference path="bezier-easing.d.ts" />

function test_create_from_array() {
    let easing: BezierEasing = BezierEasing([0, 0, 1, 0.5]);
}

function test_create_from_params() {
    let easing: BezierEasing = BezierEasing(0, 0, 1, 0.5);
}

function test_create_from_builtins() {
    let easing: BezierEasing = BezierEasing.css['ease-in'];
}

function test_methods() {
    let easing: BezierEasing = BezierEasing.css['ease-in'];
    let easedRatio: number = easing.get(0.5);
    let points: Array<number> = easing.getPoints();
    let stringified: string = easing.toString();
    let asCSS: string = easing.toCSS();
}
