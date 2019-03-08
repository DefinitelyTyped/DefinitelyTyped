// no tests yet
import Polygon from 'polygon';

const polygon1 = new Polygon([
    [0, 0],
    [5, 0],
    [5, 5],
    [0, 5],
    [0, 0],
]);
const shouldBeTrue = polygon1.contains({
    x: 3,
    y: 3,
    w: 4,
    h: 3,
});
