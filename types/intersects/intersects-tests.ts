import { circleEllipse, pointLine, polygonBox } from "intersects";
import * as box from "intersects/box";
import * as line from "intersects/line";
import circleOutlineCircle = require("intersects/circleOutline-circle");

const res = polygonBox([2, 0, 4, 2, 0, 2], 1, 1, 2, 2);
if (res) {
    // do something
}

if (pointLine(0, 8, -5, 4, 7, 6)) {
    // do agian something
}

if (box.point(1, 2, 3, 4, 5, 6)) {
    // do something else
}

if (circleOutlineCircle(1, 2, 3, 4, 5, 6, 7)) {
    // do something
}

if (line.line(1, 2, 3, 4, 5, 6, 7, 8, 100, 200)) {
    // do something
} else if (line.line(1, 2, 3, 4, 5, 6, 7, 8)) {
    // do something else
}

const isGood = circleEllipse(0, 6, 9, 2, 4, 5, 1) ? "yes" : "no";
