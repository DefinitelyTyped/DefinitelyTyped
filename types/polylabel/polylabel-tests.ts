import polylabel from "polylabel";

// Simple polygon (outer ring only)
const polygon: Array<Array<[number, number]>> = [
    [
        [3116, 3071],
        [3118, 3068],
        [3108, 3102],
        [3751, 927],
    ],
];

// Polygon with a hole (outer ring + one inner ring)
const polygonWithHole: Array<Array<[number, number]>> = [
    [
        [0, 0],
        [100, 0],
        [100, 100],
        [0, 100],
        [0, 0],
    ],
    [
        [20, 20],
        [20, 80],
        [80, 80],
        [80, 20],
        [20, 20],
    ],
];

polylabel(polygon);
polylabel(polygon, 1.0);
polylabel(polygon, 1.0, true);
polylabel(polygon, 1.0, false);
polylabel(polygonWithHole, 0.1);

// $ExpectType [number, number] & { distance: number; }
const result = polylabel(polygon);

// $ExpectType number
result[0];
// $ExpectType number
result[1];
// $ExpectType number
result.distance;

// Tuple destructuring
const [x, y] = polylabel(polygon);
// $ExpectType number
x;
// $ExpectType number
y;
