import shallowEqual_require = require('shallowequal');
import * as shallowEqual_splat from 'shallowequal';

const a = {};
const b = {};
function compare(a: any, b: any, indexOrKey?: number | string) {
    return false;
}

shallowEqual_require(a, b);
shallowEqual_require(a, b, compare);
shallowEqual_require(a, b, compare, {});

shallowEqual_splat(a, b);
shallowEqual_splat(a, b, compare);
shallowEqual_splat(a, b, compare, {});
