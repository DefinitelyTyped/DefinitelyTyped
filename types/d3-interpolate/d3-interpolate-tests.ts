/**
 * Typescript definition tests for d3/d3-interpolate module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Color from 'd3-color';
import * as d3Interpolate from 'd3-interpolate';
import * as d3Hsv from 'd3-hsv';

// Preparatory steps -------------------------------------------------------------------

type Interpolator<T> = (t: number) => T;

interface Xyz {
    x: number;
    y: number;
    z: number;
}

class NumCoercible {
    a: number;

    constructor(a: number) {
        this.a = a;
    }
    valueOf() {
        return this.a;
    }
}

class StringCoercible {
    a: string;

    constructor(a: string) {
        this.a = a;
    }

    toString() {
        return this.a;
    }
}

let iNull: Interpolator<null>;
let iBoolean: Interpolator<boolean>;
let iNum: Interpolator<number>;
let iString: Interpolator<string>;
let iDate: Interpolator<Date>;
let iTypedArray: Interpolator<d3Interpolate.NumberArray>;
let iArrayNum: Interpolator<number[]>;
let iArrayStr: Interpolator<string[]>;
let iArrayMixed: Interpolator<[Date, string]>;
let iMix: Interpolator<Date | string>;
let iKeyVal: Interpolator<{ [key: string]: any }>;
let iXyz: Interpolator<Xyz>;
let iRGBColorObj: Interpolator<d3Color.RGBColor>;
let iZoom: d3Interpolate.ZoomInterpolator;

let num: number;
let str: string;
let arrNum: number[];
let arrStr: string[];
let objKeyVal: { [key: string]: any };
let xyz: Xyz;
let objRGBColor: d3Color.RGBColor;
let zoom: [number, number, number];

// test interpolate(a, b) signature ----------------------------------------------------

// $ExpectError
iNum = d3Interpolate.interpolate('1', 5); // fails, https://github.com/Microsoft/TypeScript/issues/4002#issuecomment-124201510

// null and boolean interpolator
iNull = d3Interpolate.interpolate(null, null);
iNull = d3Interpolate.interpolate(10, null);
iBoolean = d3Interpolate.interpolate(false, true);
iBoolean = d3Interpolate.interpolate("10", true);

// color interpolator returning a color string
iString = d3Interpolate.interpolate('seagreen', d3Color.rgb(100, 100, 100));
iString = d3Interpolate.interpolate('seagreen', d3Hsv.hsv(60, 1, 0.2, 0.4));
iString = d3Interpolate.interpolate('seagreen', 'steelblue'); // as used with valid color name string

// date interpolator
iDate = d3Interpolate.interpolate(new Date(2016, 6, 1), new Date(2016, 6, 31));

// regular string interpolator interpolating number strings (as the strings are not valid color strings)
iString = d3Interpolate.interpolate(1, '5');
iString = d3Interpolate.interpolate('a: 1', 'a: 5');
iString = d3Interpolate.interpolate(new StringCoercible('a: 1'), 'a: 5');

// Typed arrays
iTypedArray = d3Interpolate.interpolate([0, 1], Float64Array.from([0, 1]));
iTypedArray = d3Interpolate.interpolate(Float64Array.from([0, 1]), Float64Array.from([0, 1]));

iArrayNum = d3Interpolate.interpolate(['1', '2'], [4, 8]);
iArrayStr = d3Interpolate.interpolate(['1', '2'], ['4', '8']);
// two element array with first element date and second element string
iArrayMixed = d3Interpolate.interpolate<[Date, string]>([new Date(2016, 6, 1), 'b: 2'], [new Date(2016, 6, 31), 'b: 8']);

// Coercible to number

iNum = d3Interpolate.interpolate(12, new NumCoercible(20));
iNum = d3Interpolate.interpolate(new NumCoercible(2), new NumCoercible(20));

// Key Value

iKeyVal = d3Interpolate.interpolate({ x: 0, y: 1 }, { x: 1, y: 10, z: 100 });
iXyz = d3Interpolate.interpolate({ x: 0, y: 1 }, { x: 1, y: 10, z: 100 });
iXyz = d3Interpolate.interpolate<Xyz>({ x: 0, y: 1 }, { x: 1, y: 10, z: 100 });

d3Interpolate.interpolate<NumCoercible>(new NumCoercible(1), new NumCoercible(5));
d3Interpolate.interpolate<NumCoercible>({ a: 1 }, new NumCoercible(5));

// test interpolateNumber(a, b) signature ----------------------------------------------

iNum = d3Interpolate.interpolateNumber(0, 100);
iNum = d3Interpolate.interpolateNumber(new NumCoercible(0), new NumCoercible(100));
num = iNum(0.5);

// test interpolateNumber(a, b) signature ----------------------------------------------

iNum = d3Interpolate.interpolateRound(0, 100);
iNum = d3Interpolate.interpolateRound(new NumCoercible(0), new NumCoercible(100));
num = iNum(0.5);

// test interpolateString(a, b) signature ----------------------------------------------

iString = d3Interpolate.interpolateString('-1', '2');
str = iString(0.5);

// test interpolateDate(a, b) signature ------------------------------------------------

iDate = d3Interpolate.interpolateDate(new Date(2016, 6, 1), new Date(2016, 6, 31));

// test interpolateArray(a, b) signature -----------------------------------------------

iArrayNum = d3Interpolate.interpolateArray<number[]>([1, 2], [4, 8]); // explicit typing
arrNum = iArrayNum(0.5);

iArrayNum = d3Interpolate.interpolateArray<[number, number]>(['1', '2'], [4, 8]); // explicit typing
arrNum = iArrayNum(0.5);

iArrayStr = d3Interpolate.interpolateArray<string[]>(['1', '2'], ['4', '8']); // explicit typing
arrStr = iArrayStr(0.5);

iArrayStr = d3Interpolate.interpolateArray([1, 2], ['4', '8']); // inferred typing <string>
arrStr = iArrayStr(0.5);

// two element array with first element date and second element string
iArrayMixed = d3Interpolate.interpolateArray<[Date, string]>([new Date(2016, 6, 1), 'b: 1'], [new Date(2016, 6, 31), 'b: 8']);

iTypedArray = d3Interpolate.interpolateArray([0, 1], Float64Array.from([0, 1]));

// test interpolateNumberArray(a, b) signature -----------------------------------------

iArrayNum = d3Interpolate.interpolateNumberArray([0, 1], [0, 1]);
iTypedArray = d3Interpolate.interpolateNumberArray([0, 1], Float64Array.from([0, 1]));
iTypedArray = d3Interpolate.interpolateNumberArray(Float64Array.from([0, 1]), Float64Array.from([0, 1]));

// test interpolateObject(a, b) signature ----------------------------------------------

iKeyVal = d3Interpolate.interpolateObject({ x: 0, y: 1 }, { x: 1, y: 10, z: 100 });
objKeyVal = iKeyVal(0.5);

iXyz = d3Interpolate.interpolateObject({ x: 0, y: 1 }, { x: 1, y: 10, z: 100 });
iXyz = d3Interpolate.interpolateObject<Xyz>({ x: 0, y: 1 }, { x: 1, y: 10, z: 100 });
xyz = iXyz(0.5);

iRGBColorObj = d3Interpolate.interpolateObject<d3Color.RGBColor>(d3Color.rgb('steelblue'), d3Color.rgb('seagreen'));
objRGBColor = iRGBColorObj(0.5);

// test interpolateTransformCss(a, b) signature ----------------------------------------

iString = d3Interpolate.interpolateTransformCss('rotate(0deg)', 'rotate(60deg)');
str = iString(0.5);

// test interpolateTransformSvg(a, b) signature ----------------------------------------

iString = d3Interpolate.interpolateTransformSvg('rotate(0)', 'rotate(60)');
str = iString(0.5);

// test interpolateZoom(a, b) signature ------------------------------------------------

iZoom = d3Interpolate.interpolateZoom([50, 50, 300], [100, 100, 500]);
zoom = iZoom(0.5);

num = iZoom.duration;
console.log('Recommended transition duration = %d', iZoom.duration);

// test interpolateDiscrete(a, b) signature --------------------------------------------

iNum = d3Interpolate.interpolateDiscrete([1, 2, 3]);
iMix = d3Interpolate.interpolateDiscrete([new Date(2016, 6, 1), 'b: 2']);

// test quantize(interpolator, n) signature --------------------------------------------

arrNum = d3Interpolate.quantize(d3Interpolate.interpolateRound(-1, 2), 4); // inferred template parameter type
arrStr = d3Interpolate.quantize<string>(d3Interpolate.interpolateString('-1', '2'), 4); // explicit template parameter typing
// $ExpectError
arrStr = d3Interpolate.quantize<string>(d3Interpolate.interpolateRound(-1, 2), 4); // fails, due to explicit typing v argument type mismatch

// test interpolateRgb(a, b) signatures ------------------------------------------------

// without gamma correction
iString = d3Interpolate.interpolateRgb('seagreen', 'steelblue');
iString = d3Interpolate.interpolateRgb(d3Color.rgb('seagreen'), d3Color.hcl('steelblue'));
iString = d3Interpolate.interpolateRgb(d3Color.rgb('seagreen'), d3Hsv.hsv('steelblue'));
str = iString(0.5);

// with gamma correction
iString = d3Interpolate.interpolateRgb.gamma(2.2)('purple', 'orange');

// test interpolateRgbBasis(color) and  interpolateRgbBasisClosed(color) signatures ----

iString = d3Interpolate.interpolateRgbBasis(['seagreen', d3Color.rgb('steelblue'), 'rgb(100, 100, 100)']);
iString = d3Interpolate.interpolateRgbBasis(['seagreen', d3Hsv.hsv('steelblue'), 'rgb(100, 100, 100)']);
iString = d3Interpolate.interpolateRgbBasisClosed(['seagreen', d3Hsv.hsv('steelblue'), 'rgb(100, 100, 100)']);

// test interpolateHsl(a, b) and interpolateHslLong(a, b)-------------------------------

iString = d3Interpolate.interpolateHsl('seagreen', 'steelblue');
iString = d3Interpolate.interpolateHsl(d3Color.rgb('seagreen'), d3Color.hcl('steelblue'));
iString = d3Interpolate.interpolateHsl(d3Color.rgb('seagreen'), d3Hsv.hsv('steelblue'));

iString = d3Interpolate.interpolateHslLong('seagreen', 'steelblue');
iString = d3Interpolate.interpolateHslLong(d3Color.rgb('seagreen'), d3Color.hcl('steelblue'));
iString = d3Interpolate.interpolateHslLong(d3Color.rgb('seagreen'), d3Hsv.hsv('steelblue'));

// test interpolateLab(a, b) -----------------------------------------------------------

iString = d3Interpolate.interpolateLab('seagreen', 'steelblue');
iString = d3Interpolate.interpolateLab(d3Color.rgb('seagreen'), d3Color.hcl('steelblue'));
iString = d3Interpolate.interpolateLab(d3Color.rgb('seagreen'), d3Hsv.hsv('steelblue'));

// test interpolateHcl(a, b) and interpolateHclLong(a, b) ------------------------------

iString = d3Interpolate.interpolateHcl('seagreen', 'steelblue');
iString = d3Interpolate.interpolateHcl(d3Color.rgb('seagreen'), d3Color.hcl('steelblue'));
iString = d3Interpolate.interpolateHcl(d3Color.rgb('seagreen'), d3Hsv.hsv('steelblue'));

iString = d3Interpolate.interpolateHclLong('seagreen', 'steelblue');
iString = d3Interpolate.interpolateHclLong(d3Color.rgb('seagreen'), d3Color.hcl('steelblue'));
iString = d3Interpolate.interpolateHclLong(d3Color.rgb('seagreen'), d3Hsv.hsv('steelblue'));

// test interpolateCubehelix(a, b) and interpolateCubehelixLong(a, b) ------------------

// without gamma correction
iString = d3Interpolate.interpolateCubehelix('seagreen', 'steelblue');
iString = d3Interpolate.interpolateCubehelix(d3Color.rgb('seagreen'), d3Color.hcl('steelblue'));
iString = d3Interpolate.interpolateCubehelix(d3Color.rgb('seagreen'), d3Hsv.hsv('steelblue'));
str = iString(0.5);

// with gamma correction
iString = d3Interpolate.interpolateCubehelix.gamma(2.2)('purple', 'orange');

// without gamma correction
iString = d3Interpolate.interpolateCubehelixLong('seagreen', 'steelblue');
iString = d3Interpolate.interpolateCubehelixLong(d3Color.rgb('seagreen'), d3Color.hcl('steelblue'));
iString = d3Interpolate.interpolateCubehelixLong(d3Color.rgb('seagreen'), d3Hsv.hsv('steelblue'));
str = iString(0.5);

// with gamma correction
iString = d3Interpolate.interpolateCubehelixLong.gamma(2.2)('purple', 'orange');

// test interpolateBasis(splineNodes) and interpolateBasisClosed(splineNodes) ----------

iNum = d3Interpolate.interpolateBasis([1, 50, 30, 10]);

iNum = d3Interpolate.interpolateBasisClosed([1, 50, 30, 10]);

// test interpolateHue -----------------------------------------------------------------

iNum = d3Interpolate.interpolateHue(30, 90);

// test piecewise ----------------------------------------------------------------------

iZoom = d3Interpolate.piecewise(d3Interpolate.interpolateZoom, [[50, 50, 300], [100, 100, 500]]);

iString = d3Interpolate.piecewise(d3Interpolate.interpolateRgb.gamma(2.2), ['red', 'green', 'blue']);
iString = d3Interpolate.piecewise(d3Interpolate.interpolateCubehelix, ['red', 'green', 'blue']);
iNum = d3Interpolate.piecewise(d3Interpolate.interpolateNumber, [1, 2, 3]);
iNum = d3Interpolate.piecewise(d3Interpolate.interpolateRound, [1.1, 2.2, 3.3]);
iString = d3Interpolate.piecewise(d3Interpolate.interpolateString, ['2px', '3px', '5px']);
iDate = d3Interpolate.piecewise(d3Interpolate.interpolateDate, [new Date(2018, 5, 1), new Date(2018, 5, 2), new Date(2018, 5, 3)]);
iString = d3Interpolate.piecewise(d3Interpolate.interpolateTransformCss, ['rotate(0deg)', 'rotate(60deg)']);
iString = d3Interpolate.piecewise(d3Interpolate.interpolateTransformSvg, ['rotate(0)', 'rotate(60)']);

iArrayNum = d3Interpolate.piecewise<number[]>(d3Interpolate.interpolateArray, [[1, 2], [4, 8]]);
iArrayStr = d3Interpolate.piecewise<string[]>(d3Interpolate.interpolateArray, [['2px', '1em'], ['3px', '1.2em']]);
iArrayMixed = d3Interpolate.piecewise<[Date, string]>(d3Interpolate.interpolateArray, [[new Date(2016, 6, 1), 'b: 1']]);
