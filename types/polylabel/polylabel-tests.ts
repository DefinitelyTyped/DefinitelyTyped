import polylabel from 'polylabel';

const polygon:Array<Array<[number, number]>> = [[[3116, 3071], [3118, 3068], [3108, 3102], [3751, 927]]];
polylabel(polygon);
polylabel(polygon, 1.0);
polylabel(polygon, 1.0, true);
polylabel(polygon, 1.0, false);
