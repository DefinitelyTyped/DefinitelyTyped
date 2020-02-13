/**
 * Typescript definition tests for d3/d3-scale module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Scale from 'd3-scale';
import { interpolateCubehelix, interpolateRound } from 'd3-interpolate';
import { timeHour } from 'd3-time';
import {
    schemePuRd,
    interpolateCool,
    interpolateInferno,
    interpolateRainbow,
    interpolateSpectral,
} from 'd3-scale-chromatic';

// -------------------------------------------------------------------------------
// Preparatory Steps
// -------------------------------------------------------------------------------

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
    txt: string;

    constructor(txt: string) {
        this.txt = txt;
    }
    toString() {
        return this.txt;
    }
}

let num: number;
let date: Date;

let clampFlag: boolean;

let outputNumber: number;
let outputString: string;

let domainNumbers: number[] = [1, 100];
const domainNumeric: NumCoercible[] = [new NumCoercible(0), new NumCoercible(100)];
let domainStrings: string[];
let domainDates: Date[] = [new Date(2016, 0, 15), new Date(2016, 5, 15)];

let ticksNumbers: number[];
let ticksDates: Date[];

let tickFormatNumberFn: ((d: number | { valueOf(): number }) => string);
let tickFormatDateFn: ((d: Date) => string);

let rangeNumbers: number[] = [2, 200];
let rangeStrings: string[] = ['2px', '200px'];

let numExtent: [number, number];
let numOrUndefinedExtent: [number | undefined, number | undefined];

let outputNumberMaybe: number | undefined;

// -------------------------------------------------------------------------------
// Linear Scale Factory
// -------------------------------------------------------------------------------

// scaleLinear() -----------------------------------------------------------------

let linearScaleNumber: d3Scale.ScaleLinear<number, number>;
let linearScaleString: d3Scale.ScaleLinear<string, string>;
let linearScaleNumString: d3Scale.ScaleLinear<number, string>;

linearScaleNumber = d3Scale.scaleLinear();
linearScaleString = d3Scale.scaleLinear<string>();
linearScaleNumString = d3Scale.scaleLinear<number, string>();

// ScaleLinear Interface ========================================================

// domain(...) -----------------------------------------------------------------

linearScaleNumber = linearScaleNumber.domain(domainNumeric);
linearScaleNumber = linearScaleNumber.domain(domainNumbers);
domainNumbers = linearScaleNumber.domain();

linearScaleString = linearScaleString.domain(domainNumeric);
linearScaleString = linearScaleString.domain([10, 100]);
domainNumbers = linearScaleString.domain();

linearScaleNumString = linearScaleNumString.domain(domainNumeric);
linearScaleNumString = linearScaleNumString.domain(domainNumbers);
domainNumbers = linearScaleNumString.domain();

// range(...) -----------------------------------------------------------------

linearScaleNumber = linearScaleNumber.range(rangeNumbers);
rangeNumbers = linearScaleNumber.range();

linearScaleString = linearScaleString.range(['steelblue', 'brown']);
rangeStrings = linearScaleString.range();

linearScaleNumString = linearScaleNumString.range(rangeNumbers);
rangeNumbers = linearScaleNumString.range();

// invert(...) -----------------------------------------------------------------

num = linearScaleNumber.invert(500); // has number range, so inversion is possible
num = linearScaleNumber.invert(new NumCoercible(500)); // has number range, so inversion is possible

num = linearScaleNumString.invert(500); // has number range, so inversion is possible
num = linearScaleNumString.invert(new NumCoercible(500)); // has number range, so inversion is possible

// rangeRound(...) -----------------------------------------------------------------

linearScaleNumber = linearScaleNumber.rangeRound(rangeNumbers);

// clamp(...) -----------------------------------------------------------------

linearScaleNumber = linearScaleNumber.clamp(true);
clampFlag = linearScaleNumber.clamp();

// interpolate(...) -----------------------------------------------------------------

linearScaleString = linearScaleString.interpolate(interpolateCubehelix.gamma(3));

linearScaleNumString = linearScaleNumString.interpolate((a, b) => {
    // take two numbers
    return (t: number) => (a * (1 - t) + b * t) + 'px'; // a and b are numbers based on Range Type, return value of interpolator is string based on Output type
});

// Changes scale output type (inferred generic)
linearScaleNumString = linearScaleNumber.interpolate((a, b) => {
    // take two numbers
    return (t: number) => (a * (1 - t) + b * t) + 'px'; // a and b are numbers based on Range Type, return value of interpolator is string based on Output type
});

// nice(...) -----------------------------------------------------------------------

// chainable
linearScaleNumber = linearScaleNumber.nice();
linearScaleNumber = linearScaleNumber.nice(5);

// ticks(...) -----------------------------------------------------------------

ticksNumbers = linearScaleNumber.ticks();
ticksNumbers = linearScaleNumber.ticks(5);

// tickFormat(...) -----------------------------------------------------------------

tickFormatNumberFn = linearScaleNumber.tickFormat();
tickFormatNumberFn = linearScaleNumber.tickFormat(5);
tickFormatNumberFn = linearScaleNumber.tickFormat(5, '+%');

// (...) value mapping from domain to output -----------------------------------

outputNumber = linearScaleNumber(10);

outputString = linearScaleString(10);

outputString = linearScaleNumString(10);

// copy(...) -----------------------------------------------------------------

const copiedLinearScale: d3Scale.ScaleLinear<number, string> = linearScaleNumString.copy();

// -------------------------------------------------------------------------------
// Power Scale Factories
// -------------------------------------------------------------------------------

// scalePow() and scaleSqrt() ----------------------------------------------------

let powerScaleNumber: d3Scale.ScalePower<number, number>;
let powerScaleString: d3Scale.ScalePower<string, string>;
let powerScaleNumString: d3Scale.ScalePower<number, string>;

powerScaleNumber = d3Scale.scalePow();
powerScaleString = d3Scale.scalePow<string>();
powerScaleNumString = d3Scale.scalePow<number, string>();

let squarerootScaleNumber: d3Scale.ScalePower<number, number>;
let squarerootScaleString: d3Scale.ScalePower<string, string>;
let squarerootScaleNumString: d3Scale.ScalePower<number, string>;

squarerootScaleNumber = d3Scale.scaleSqrt();
squarerootScaleString = d3Scale.scaleSqrt<string>();
squarerootScaleNumString = d3Scale.scaleSqrt<number, string>();

// ScalePower Interface ========================================================

// exponent --------------------------------------------------------------------

const exponent: number = squarerootScaleNumber.exponent();

powerScaleNumber = powerScaleNumber.exponent(5);

// domain(...) -----------------------------------------------------------------

powerScaleNumber = powerScaleNumber.domain(domainNumeric);
powerScaleNumber = powerScaleNumber.domain(domainNumbers);
domainNumbers = powerScaleNumber.domain();

powerScaleString = powerScaleString.domain(domainNumeric);
powerScaleString = powerScaleString.domain([10, 100]);
domainNumbers = powerScaleString.domain();

powerScaleNumString = powerScaleNumString.domain(domainNumeric);
powerScaleNumString = powerScaleNumString.domain(domainNumbers);
domainNumbers = powerScaleNumString.domain();

// range(...) -----------------------------------------------------------------

powerScaleNumber = powerScaleNumber.range(rangeNumbers);
rangeNumbers = powerScaleNumber.range();

powerScaleString = powerScaleString.range(['steelblue', 'brown']);
rangeStrings = powerScaleString.range();

powerScaleNumString = powerScaleNumString.range(rangeNumbers);
rangeNumbers = powerScaleNumString.range();

// invert(...) -----------------------------------------------------------------

num = powerScaleNumber.invert(500); // has number range, so inversion is possible
num = powerScaleNumber.invert(new NumCoercible(500)); // has number range, so inversion is possible

num = powerScaleNumString.invert(500); // has number range, so inversion is possible
num = powerScaleNumString.invert(new NumCoercible(500)); // has number range, so inversion is possible

// rangeRound(...) -----------------------------------------------------------------

powerScaleNumber = powerScaleNumber.rangeRound(rangeNumbers);

// clamp(...) -----------------------------------------------------------------

powerScaleNumber = powerScaleNumber.clamp(true);
clampFlag = powerScaleNumber.clamp();

// interpolate(...) -----------------------------------------------------------------

powerScaleString = powerScaleString.interpolate(interpolateCubehelix.gamma(3));

powerScaleNumString = powerScaleNumString.interpolate((a, b) => {
    // take two numbers
    return (t: number) => (a * (1 - t) + b * t) + 'px'; // a and b are numbers based on Range Type, return value of interpolator is string based on Output type
});

// nice(...) -----------------------------------------------------------------------

// chainable
powerScaleNumber = powerScaleNumber.nice();
powerScaleNumber = powerScaleNumber.nice(5);

// ticks(...) -----------------------------------------------------------------

ticksNumbers = powerScaleNumber.ticks();
ticksNumbers = powerScaleNumber.ticks(5);

// tickFormat(...) -----------------------------------------------------------------

tickFormatNumberFn = powerScaleNumber.tickFormat();
tickFormatNumberFn = powerScaleNumber.tickFormat(5);
tickFormatNumberFn = powerScaleNumber.tickFormat(5, '+%');

// (...) value mapping from domain to output -----------------------------------

outputNumber = powerScaleNumber(10);

outputString = powerScaleString(10);

outputString = powerScaleNumString(10);

// copy(...) -----------------------------------------------------------------

const copiedPowerScale: d3Scale.ScalePower<number, string> = powerScaleNumString.copy();

// -------------------------------------------------------------------------------
// Logarithmic Scale Factory
// -------------------------------------------------------------------------------

// scaleLog() ---------------------------------------------------------------------

let logScaleNumber: d3Scale.ScaleLogarithmic<number, number>;
let logScaleString: d3Scale.ScaleLogarithmic<string, string>;
let logScaleNumString: d3Scale.ScaleLogarithmic<number, string>;

logScaleNumber = d3Scale.scaleLog();
logScaleString = d3Scale.scaleLog<string>();
logScaleNumString = d3Scale.scaleLog<number, string>();

// ScaleLogarithmic Interface ========================================================

// base --------------------------------------------------------------------

const base: number = logScaleNumber.base();

logScaleNumber = logScaleNumber.base(42);

// domain(...) -----------------------------------------------------------------

logScaleNumber = logScaleNumber.domain(domainNumeric);
logScaleNumber = logScaleNumber.domain(domainNumbers);
domainNumbers = logScaleNumber.domain();

logScaleString = logScaleString.domain(domainNumeric);
logScaleString = logScaleString.domain([10, 100]);
domainNumbers = logScaleString.domain();

logScaleNumString = logScaleNumString.domain(domainNumeric);
logScaleNumString = logScaleNumString.domain(domainNumbers);
domainNumbers = logScaleNumString.domain();

// range(...) -----------------------------------------------------------------

logScaleNumber = logScaleNumber.range(rangeNumbers);
rangeNumbers = logScaleNumber.range();

logScaleString = logScaleString.range(['steelblue', 'brown']);
rangeStrings = logScaleString.range();

logScaleNumString = logScaleNumString.range(rangeNumbers);
rangeNumbers = logScaleNumString.range();

// invert(...) -----------------------------------------------------------------

num = logScaleNumber.invert(500); // has number range, so inversion is possible
num = logScaleNumber.invert(new NumCoercible(500)); // has number range, so inversion is possible

num = logScaleNumString.invert(500); // has number range, so inversion is possible
num = logScaleNumString.invert(new NumCoercible(500)); // has number range, so inversion is possible

// rangeRound(...) -----------------------------------------------------------------

logScaleNumber = logScaleNumber.rangeRound(rangeNumbers);

// clamp(...) -----------------------------------------------------------------

logScaleNumber = logScaleNumber.clamp(true);
clampFlag = logScaleNumber.clamp();

// interpolate(...) -----------------------------------------------------------------

logScaleString = logScaleString.interpolate(interpolateCubehelix.gamma(3));

logScaleNumString = logScaleNumString.interpolate((a, b) => {
    // take two numbers
    return (t: number) => (a * (1 - t) + b * t) + 'px'; // a and b are numbers based on Range Type, return value of interpolator is string based on Output type
});

// nice(...) -----------------------------------------------------------------------

// chainable
logScaleNumber = logScaleNumber.nice();
// $ExpectError
logScaleNumber = logScaleNumber.nice(5); // fails, logarithmic scale does not support count parameter.

// ticks(...) -----------------------------------------------------------------

ticksNumbers = logScaleNumber.ticks();
ticksNumbers = logScaleNumber.ticks(5);

// tickFormat(...) -----------------------------------------------------------------

tickFormatNumberFn = logScaleNumber.tickFormat();
tickFormatNumberFn = logScaleNumber.tickFormat(5);
tickFormatNumberFn = logScaleNumber.tickFormat(5, '+%');

// (...) value mapping from domain to output -----------------------------------

outputNumber = logScaleNumber(10);

outputString = logScaleString(10);

outputString = logScaleNumString(10);

// copy(...) -----------------------------------------------------------------

const copiedLogScale: d3Scale.ScaleLogarithmic<number, string> = logScaleNumString.copy();

// -------------------------------------------------------------------------------
// Identity Scale Factory
// -------------------------------------------------------------------------------

// scaleIdentity -----------------------------------------------------------------

let identityScale: d3Scale.ScaleIdentity;

identityScale = d3Scale.scaleIdentity();

// ScaleIdentity Interface ========================================================

// domain(...) -----------------------------------------------------------------

identityScale = identityScale.domain(domainNumeric);
identityScale = identityScale.domain(domainNumbers);
domainNumbers = identityScale.domain();

// range(...) -----------------------------------------------------------------

identityScale = identityScale.range(rangeNumbers);
rangeNumbers = identityScale.range();

// invert(...) -----------------------------------------------------------------

num = identityScale.invert(500); // has number range, so inversion is possible
num = identityScale.invert(new NumCoercible(500)); // has number range, so inversion is possible

// nice(...) -----------------------------------------------------------------------

// chainable
identityScale = identityScale.nice();
identityScale = identityScale.nice(5);

// ticks(...) -----------------------------------------------------------------

ticksNumbers = identityScale.ticks();
ticksNumbers = identityScale.ticks(5);

// tickFormat(...) -----------------------------------------------------------------

tickFormatNumberFn = identityScale.tickFormat();
tickFormatNumberFn = identityScale.tickFormat(5);
tickFormatNumberFn = identityScale.tickFormat(5, '+%');

// (...) value mapping from domain to output -----------------------------------

outputNumber = identityScale(10);

// copy(...) -----------------------------------------------------------------

const copiedIdentityScale: d3Scale.ScaleIdentity = identityScale.copy();

// -------------------------------------------------------------------------------
// Time Scale Factories
// -------------------------------------------------------------------------------

// scaleTime() and scaleUtc() ----------------------------------------------------

let localTimeScaleNumber: d3Scale.ScaleTime<number, number>;
let localTimeScaleString: d3Scale.ScaleTime<string, string>;
let localTimeScaleNumString: d3Scale.ScaleTime<number, string>;

localTimeScaleNumber = d3Scale.scaleTime();
localTimeScaleString = d3Scale.scaleTime<string>();
localTimeScaleNumString = d3Scale.scaleTime<number, string>();

let utcScaleNumber: d3Scale.ScaleTime<number, number>;
let utcScaleString: d3Scale.ScaleTime<string, string>;
let utcScaleNumString: d3Scale.ScaleTime<number, string>;

utcScaleNumber = d3Scale.scaleUtc();
utcScaleString = d3Scale.scaleUtc<string>();
utcScaleNumString = d3Scale.scaleUtc<number, string>();

// domain(...) -----------------------------------------------------------------

localTimeScaleNumber = localTimeScaleNumber.domain(domainDates);

domainDates = localTimeScaleNumber.domain();

localTimeScaleString = localTimeScaleString.domain([new Date(2016, 6, 1), Date.now()]);
domainDates = localTimeScaleString.domain();

localTimeScaleNumString = localTimeScaleNumString.domain(domainDates);
domainDates = localTimeScaleNumString.domain();

// range(...) -----------------------------------------------------------------

localTimeScaleNumber = localTimeScaleNumber.range(rangeNumbers);
rangeNumbers = localTimeScaleNumber.range();

localTimeScaleString = localTimeScaleString.range(['steelblue', 'brown']);
rangeStrings = localTimeScaleString.range();

localTimeScaleNumString = localTimeScaleNumString.range(rangeNumbers);
rangeNumbers = localTimeScaleNumString.range();

// invert(...) -----------------------------------------------------------------

date = localTimeScaleNumber.invert(500); // has number range, so inversion is possible
date = localTimeScaleNumber.invert(new NumCoercible(500)); // has number range, so inversion is possible

date = localTimeScaleNumString.invert(500); // has number range, so inversion is possible
date = localTimeScaleNumString.invert(new NumCoercible(500)); // has number range, so inversion is possible

// rangeRound(...) -----------------------------------------------------------------

localTimeScaleNumber = localTimeScaleNumber.rangeRound(rangeNumbers);

// clamp(...) -----------------------------------------------------------------

localTimeScaleNumber = localTimeScaleNumber.clamp(true);
clampFlag = localTimeScaleNumber.clamp();

// interpolate(...) -----------------------------------------------------------------

localTimeScaleString = localTimeScaleString.interpolate(interpolateCubehelix.gamma(3));

localTimeScaleNumString = localTimeScaleNumString.interpolate((a, b) => {
    // take two numbers
    return (t: number) => (a * (1 - t) + b * t) + 'px'; // a and b are numbers based on Range Type, return value of interpolator is string based on Output type
});

// nice(...) -----------------------------------------------------------------------

// chainable
localTimeScaleNumber = localTimeScaleNumber.nice();
localTimeScaleNumber = localTimeScaleNumber.nice(5);
localTimeScaleNumber = localTimeScaleNumber.nice(timeHour);
localTimeScaleNumber = localTimeScaleNumber.nice(timeHour, 5);

// $ExpectError
localTimeScaleNumber = localTimeScaleNumber.nice(timeHour.every(5)); // fails, requires CountableTimeInterval

// ticks(...) -----------------------------------------------------------------

const timeInterval = timeHour.every(5);

ticksDates = localTimeScaleNumber.ticks();
ticksDates = localTimeScaleNumber.ticks(50);

if (timeInterval !== null) {
    ticksDates = localTimeScaleNumString.ticks(timeInterval);
}

// tickFormat(...) -----------------------------------------------------------------

tickFormatDateFn = localTimeScaleNumber.tickFormat();
tickFormatDateFn = localTimeScaleNumber.tickFormat(50, '%I %p');
if (timeInterval !== null) {
    tickFormatDateFn = localTimeScaleNumber.tickFormat(timeInterval, '%I %p');
}

// (...) value mapping from domain to output -----------------------------------

outputNumber = localTimeScaleNumber(new Date(2016, 6, 4));

outputString = localTimeScaleString(new Date(2016, 6, 4));

outputString = localTimeScaleNumString(new Date(2016, 6, 4));

// copy(...) -----------------------------------------------------------------

const copiedTimeScale: d3Scale.ScaleTime<number, string> = localTimeScaleNumString.copy();

// -------------------------------------------------------------------------------
// Sequential Scale Factory
// -------------------------------------------------------------------------------

// scaleSequential() -----------------------------------------------------------------

let sequentialScaleColorString: d3Scale.ScaleSequential<string>;

sequentialScaleColorString = d3Scale.scaleSequential<string>(interpolateRainbow);
sequentialScaleColorString = d3Scale.scaleSequential(interpolateCool); // inferred Output type string

// ScaleSequential Interface ========================================================

// domain(...) -----------------------------------------------------------------

sequentialScaleColorString = sequentialScaleColorString.domain([0, 1]);
sequentialScaleColorString = sequentialScaleColorString.domain([new NumCoercible(0), new NumCoercible(100)]);
const domainSequential: [number, number] = sequentialScaleColorString.domain();

// clamp(...) -----------------------------------------------------------------

sequentialScaleColorString = sequentialScaleColorString.clamp(true);
clampFlag = sequentialScaleColorString.clamp();

// interpolate(...) -----------------------------------------------------------------

sequentialScaleColorString = sequentialScaleColorString.interpolator(interpolateInferno);

let sequentialInterpolator: (t: number) => string;
sequentialInterpolator = sequentialScaleColorString.interpolator();

// (...) value mapping from domain to output -----------------------------------

outputString = sequentialScaleColorString(10);

// copy(...) -----------------------------------------------------------------

const copiedSequentialScale: d3Scale.ScaleSequential<string> = sequentialScaleColorString.copy();

// -------------------------------------------------------------------------------
// Diverging Scale Factory
// -------------------------------------------------------------------------------

// scaleQuantize() -----------------------------------------------------------------

const interpolateDouble = (t: number) => t * 2;
let divergingScaleNumber: d3Scale.ScaleDiverging<number>;
let divergingScaleString: d3Scale.ScaleDiverging<string>;

// $ExpectError
d3Scale.scaleDiverging(); // fails, Expected 1 arguments, but got 0.

divergingScaleNumber = d3Scale.scaleDiverging<number>(interpolateRound(0, 1));
divergingScaleNumber = d3Scale.scaleDiverging<number>(interpolateDouble);
divergingScaleString = d3Scale.scaleDiverging<string>(interpolateSpectral);

// ScaleDiverging Interface =======================================================

// (...) value mapping from domain to output -----------------------------------

outputNumber = divergingScaleNumber(1);
outputString = divergingScaleString(1);

// domain(...) -----------------------------------------------------------------

let domainDivergingScale: [number, number, number];

divergingScaleNumber = divergingScaleNumber.domain([0, 0.5, 1]);
divergingScaleNumber = divergingScaleNumber.domain([new NumCoercible(0), 0.5, new NumCoercible(1)]);
domainDivergingScale = divergingScaleNumber.domain();

// $ExpectError
divergingScaleNumber.domain([0, 1]);
// $ExpectError
divergingScaleNumber.domain([new NumCoercible(0), new NumCoercible(0.5)]);

divergingScaleString = divergingScaleString.domain([0, 0.5, 1]);
divergingScaleString = divergingScaleString.domain([new NumCoercible(0), 0.5, new NumCoercible(1)]);
domainDivergingScale = divergingScaleString.domain();

// $ExpectError
divergingScaleString.domain([0, 1]);
// $ExpectError
divergingScaleString.domain([new NumCoercible(0), new NumCoercible(0.5)]);

// clamp(...) -----------------------------------------------------------------

clampFlag = divergingScaleNumber.clamp();
clampFlag = divergingScaleString.clamp();

divergingScaleNumber = divergingScaleNumber.clamp(true);
divergingScaleString = divergingScaleString.clamp(true);

// interpolator(...) -----------------------------------------------------------------

const inum: (t: number) => number = divergingScaleNumber.interpolator();
const istr: (t: number) => string = divergingScaleString.interpolator();

divergingScaleNumber = divergingScaleNumber.interpolator((t) => t + 2);
divergingScaleNumber = divergingScaleNumber.interpolator(interpolateRound(2, 3));
divergingScaleString = divergingScaleString.interpolator(sequentialInterpolator);

// copy(...) -----------------------------------------------------------------

const copiedDivergingScaleNumber: d3Scale.ScaleDiverging<number> = divergingScaleNumber.copy();
const copiedDivergingScaleString: d3Scale.ScaleDiverging<string> = divergingScaleString.copy();

// -------------------------------------------------------------------------------
// Quantize Scale Factory
// -------------------------------------------------------------------------------

// scaleQuantize() -----------------------------------------------------------------

let quantizeScaleNumber: d3Scale.ScaleQuantize<number>;
let quantizeScaleString: d3Scale.ScaleQuantize<string>;

quantizeScaleNumber = d3Scale.scaleQuantize();
quantizeScaleString = d3Scale.scaleQuantize<string>();

// ScaleQuantize Interface ========================================================

// domain(...) -----------------------------------------------------------------

quantizeScaleNumber = quantizeScaleNumber.domain([0, 1]);
quantizeScaleNumber = quantizeScaleNumber.domain([new NumCoercible(0), new NumCoercible(100)]);
const domainQuantize: [number, number] = quantizeScaleNumber.domain();

// range(...) -----------------------------------------------------------------

quantizeScaleNumber = quantizeScaleNumber.range(rangeNumbers);
rangeNumbers = quantizeScaleNumber.range();

quantizeScaleString = quantizeScaleString.range(['steelblue', 'brown']);
rangeStrings = quantizeScaleString.range();

// invertExtent(...) -----------------------------------------------------------------

numExtent = quantizeScaleNumber.invertExtent(500);

numExtent = quantizeScaleString.invertExtent('steelblue');

// nice(...) -----------------------------------------------------------------------

// chainable
quantizeScaleNumber = quantizeScaleNumber.nice();
quantizeScaleNumber = quantizeScaleNumber.nice(5);

// ticks(...) -----------------------------------------------------------------

ticksNumbers = quantizeScaleNumber.ticks();
ticksNumbers = quantizeScaleNumber.ticks(5);

// tickFormat(...) -----------------------------------------------------------------

tickFormatNumberFn = quantizeScaleNumber.tickFormat();
tickFormatNumberFn = quantizeScaleNumber.tickFormat(5);
tickFormatNumberFn = quantizeScaleNumber.tickFormat(5, '+%');

// (...) value mapping from domain to output -----------------------------------

outputNumber = quantizeScaleNumber(0.51);

// copy(...) -----------------------------------------------------------------

const copiedQuantizeScale: d3Scale.ScaleQuantize<number> = quantizeScaleNumber.copy();

// -------------------------------------------------------------------------------
// Quantile Scale Factory
// -------------------------------------------------------------------------------

// scaleQuantile() -----------------------------------------------------------------

let quantileScaleNumber: d3Scale.ScaleQuantile<number>;
let quantileScaleString: d3Scale.ScaleQuantile<string>;

quantileScaleNumber = d3Scale.scaleQuantile();
quantileScaleString = d3Scale.scaleQuantile<string>();

// ScaleQuantile Interface ========================================================

// domain(...) -----------------------------------------------------------------

quantileScaleNumber = quantileScaleNumber.domain(domainNumbers);

domainNumbers = quantileScaleNumber.domain();

quantileScaleString = quantileScaleString.domain(domainNumeric);

// range(...) -----------------------------------------------------------------

quantileScaleNumber = quantileScaleNumber.range([1, 2, 3, 4]);
rangeNumbers = quantileScaleNumber.range();

quantileScaleString = quantileScaleString.range(['q25', 'q50', 'q75']);
rangeStrings = quantileScaleString.range();

// invertExtent(...) -----------------------------------------------------------------

numExtent = quantileScaleNumber.invertExtent(2);

numExtent = quantileScaleString.invertExtent('q50');

// quantile() -----------------------------------------------------------------------

const quantiles: number[] = quantileScaleNumber.quantiles();

// (...) value mapping from domain to output -----------------------------------

outputNumber = quantileScaleNumber(0.51);

// copy(...) -----------------------------------------------------------------

const copiedQuantileScale: d3Scale.ScaleQuantile<number> = quantileScaleNumber.copy();

// -------------------------------------------------------------------------------
// Threshold Scale Factory
// -------------------------------------------------------------------------------

// scaleThreshold() -----------------------------------------------------------------

let thresholdScaleNumberNumber: d3Scale.ScaleThreshold<number, number>;
let thresholdScaleNumberString: d3Scale.ScaleThreshold<number, string>;

thresholdScaleNumberNumber = d3Scale.scaleThreshold();
thresholdScaleNumberString = d3Scale.scaleThreshold<number, string>();

// ScaleThreshold Interface ========================================================

// domain(...) -----------------------------------------------------------------

thresholdScaleNumberNumber = thresholdScaleNumberNumber.domain([0.5]);
domainNumbers = thresholdScaleNumberNumber.domain();

thresholdScaleNumberString = thresholdScaleNumberString.domain([0.2, 0.8]);

// range(...) -----------------------------------------------------------------

thresholdScaleNumberNumber = thresholdScaleNumberNumber.range([100, 200]);
rangeNumbers = thresholdScaleNumberNumber.range();

thresholdScaleNumberString = thresholdScaleNumberString.range(['steelblue', 'seagreen', 'brown']);
rangeStrings = thresholdScaleNumberString.range();

// invertExtent(...) -----------------------------------------------------------------

numOrUndefinedExtent = thresholdScaleNumberNumber.invertExtent(100);

numOrUndefinedExtent = thresholdScaleNumberString.invertExtent('seagreen');

// (...) value mapping from domain to output -----------------------------------

outputNumber = thresholdScaleNumberNumber(0.51);

outputString = thresholdScaleNumberString(0.9);

// copy(...) -----------------------------------------------------------------

const copiedThresholdScale: d3Scale.ScaleThreshold<number, string> = thresholdScaleNumberString.copy();

// -------------------------------------------------------------------------------
// Ordinal Scale Factory
// -------------------------------------------------------------------------------

// scaleOrdinal() -----------------------------------------------------------------

let ordinalScaleStringString: d3Scale.ScaleOrdinal<string, string>;
let ordinalScaleStringNumber: d3Scale.ScaleOrdinal<string, number>;

ordinalScaleStringString = d3Scale.scaleOrdinal<string>();
ordinalScaleStringString = d3Scale.scaleOrdinal<string>(schemePuRd[3]);
ordinalScaleStringNumber = d3Scale.scaleOrdinal<string, number>();
ordinalScaleStringString = d3Scale.scaleOrdinal<string, string>(schemePuRd[3]);

// ScaleOrdinal Interface ========================================================

// domain(...) -----------------------------------------------------------------

ordinalScaleStringString = ordinalScaleStringString.domain(['negative', 'neutral', 'positive']);
domainStrings = ordinalScaleStringString.domain();

ordinalScaleStringNumber = ordinalScaleStringNumber.domain(['negative', 'neutral', 'positive']);

// range(...) -----------------------------------------------------------------

ordinalScaleStringString = ordinalScaleStringString.range(['crimson', 'midnightblue', 'seagreen']);
ordinalScaleStringString = ordinalScaleStringString.range(schemePuRd[3]);
rangeStrings = ordinalScaleStringString.range();

ordinalScaleStringNumber = ordinalScaleStringNumber.range([-1, 0, 1]);
rangeNumbers = ordinalScaleStringNumber.range();

// unknown(...) and d3Scale.scaleImplicit --------------------------------------

const implicit: { name: 'implicit' } = d3Scale.scaleImplicit;

ordinalScaleStringString = ordinalScaleStringString.unknown(d3Scale.scaleImplicit);

ordinalScaleStringNumber = ordinalScaleStringNumber.unknown(0);

const unknownValue: string | { name: 'implicit' } = ordinalScaleStringString.unknown();

if (typeof unknownValue === 'string') {
    console.log(unknownValue);
} else {
    console.log(unknownValue.name);
}

// (...) value mapping from domain to output -----------------------------------

outputString = ordinalScaleStringString('neutral');

outputNumber = ordinalScaleStringNumber('negative');

// copy(...) -----------------------------------------------------------------

const copiedOrdinalScale: d3Scale.ScaleOrdinal<string, number> = ordinalScaleStringNumber.copy();

// -------------------------------------------------------------------------------
// Band Scale Factory
// -------------------------------------------------------------------------------

// scaleBand() -----------------------------------------------------------------

let bandScaleString: d3Scale.ScaleBand<string>;
let bandScaleCoercible: d3Scale.ScaleBand<StringCoercible>;

bandScaleString = d3Scale.scaleBand();
bandScaleCoercible = d3Scale.scaleBand<StringCoercible>();

// ScaleBand Interface ========================================================

// domain(...) -----------------------------------------------------------------

bandScaleString = bandScaleString.domain(['negative', 'neutral', 'positive']);
domainStrings = bandScaleString.domain();

bandScaleCoercible = bandScaleCoercible.domain([new StringCoercible('negative'), new StringCoercible('neutral'), new StringCoercible('positive')]);

// range(...) -----------------------------------------------------------------

bandScaleString = bandScaleString.range([0, 300]);
let rangeExtent: [number, number] = bandScaleString.range();

bandScaleCoercible = bandScaleCoercible.range([0, 300]);
rangeExtent = bandScaleCoercible.range();

// rangeRound(...) -----------------------------------------------------------------

bandScaleString = bandScaleString.rangeRound([0, 300]);

// round(...) -----------------------------------------------------------------

bandScaleCoercible = bandScaleCoercible.round(true);
let roundingFlag: boolean = bandScaleCoercible.round();

// paddingInner(...) -----------------------------------------------------------------

bandScaleString = bandScaleString.paddingInner(0.1);
num = bandScaleString.paddingInner();

// paddingOuter(...) -----------------------------------------------------------------

bandScaleString = bandScaleString.paddingOuter(0.1);
num = bandScaleString.paddingOuter();

// padding(...) -----------------------------------------------------------------

bandScaleString = bandScaleString.padding(0.1);
num = bandScaleString.padding();

// align(...) -----------------------------------------------------------------

bandScaleString = bandScaleString.align(0.5);
num = bandScaleString.align();

// bandwidth(...) -----------------------------------------------------------------

num = bandScaleString.bandwidth();

// step(...) -----------------------------------------------------------------

num = bandScaleString.step();

// (...) value mapping from domain to output -----------------------------------

outputNumberMaybe = bandScaleString('neutral');

outputNumberMaybe = bandScaleCoercible(new StringCoercible('negative'));

// copy(...) -----------------------------------------------------------------

const copiedBandScale: d3Scale.ScaleBand<StringCoercible> = bandScaleCoercible.copy();

// -------------------------------------------------------------------------------
// Point Scale Factory
// -------------------------------------------------------------------------------

// scalePoint() -----------------------------------------------------------------

let pointScaleString: d3Scale.ScalePoint<string>;
let pointScaleCoercible: d3Scale.ScalePoint<StringCoercible>;

pointScaleString = d3Scale.scalePoint();
pointScaleCoercible = d3Scale.scalePoint<StringCoercible>();

// ScalePoint Interface ========================================================

// domain(...) -----------------------------------------------------------------

pointScaleString = pointScaleString.domain(['negative', 'neutral', 'positive']);
domainStrings = pointScaleString.domain();

pointScaleCoercible = pointScaleCoercible.domain([new StringCoercible('negative'), new StringCoercible('neutral'), new StringCoercible('positive')]);

// range(...) -----------------------------------------------------------------

pointScaleString = pointScaleString.range([0, 300]);
rangeExtent = pointScaleString.range();

pointScaleCoercible = pointScaleCoercible.range([0, 300]);
rangeExtent = pointScaleCoercible.range();

// rangeRound(...) -----------------------------------------------------------------

pointScaleString = pointScaleString.rangeRound([0, 300]);

// round(...) -----------------------------------------------------------------

pointScaleCoercible = pointScaleCoercible.round(true);
roundingFlag = pointScaleCoercible.round();

// padding(...) -----------------------------------------------------------------

pointScaleString = pointScaleString.padding(0.1);
num = pointScaleString.padding();

// align(...) -----------------------------------------------------------------

pointScaleString = pointScaleString.align(0.5);
num = pointScaleString.align();

// bandwidth(...) -----------------------------------------------------------------

num = pointScaleString.bandwidth();

// step(...) -----------------------------------------------------------------

num = pointScaleString.step();

// (...) value mapping from domain to output -----------------------------------

outputNumberMaybe = pointScaleString('neutral');

outputNumberMaybe = pointScaleCoercible(new StringCoercible('negative'));

// copy(...) -----------------------------------------------------------------

const copiedPointScale: d3Scale.ScalePoint<StringCoercible> = pointScaleCoercible.copy();
