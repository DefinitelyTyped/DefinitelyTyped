import BezierEasing = require("bezier-easing");

const easing: BezierEasing.Easing = BezierEasing(0, 0, 1, 0.5);
const eased: number = easing(1);
