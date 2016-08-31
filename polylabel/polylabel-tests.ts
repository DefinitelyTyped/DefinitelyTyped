/// <reference path="./polylabel.d.ts" />
/// <reference path="../node/node.d.ts" />
import polylabel = require('polylabel');

const polygon = [[[3116,3071],[3118,3068],[3108,3102],[3751,927]]]
let p: number[]
p = polylabel(polygon)
p = polylabel(polygon, 1.0)
p = polylabel(polygon, 1.0, true)
p = polylabel(polygon, 1.0, false)
