

function get_easing() {
    let easing: Easing = BezierEasing(0, 0, 1, 0.5);
}

function use_easing() {
    let easing: Easing = BezierEasing(0, 0, 1, 0.5);
    let eased: number = easing(1);
}