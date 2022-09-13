import { polygonBox, pointLine, circleEllipse } from 'intersects';

const res = polygonBox([2, 0, 4, 2, 0, 2], 1, 1, 2, 2);
if (res) {
    // do something
}

if (pointLine(0, 8, -5, 4, 7, 6)) {
    // do agian something
}

const isGood = circleEllipse(0, 6, 9, 2, 4, 5, 1) ? 'yes' : 'no';
