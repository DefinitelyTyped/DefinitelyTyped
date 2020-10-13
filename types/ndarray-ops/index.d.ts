// Type definitions for ndarray-ops 1.2
// Project: https://github.com/mikolalysenko/ndarray-ops
// Definitions by: Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import ndarray = require("ndarray");

////////////////
/// Assignment operations
////////////////
export function add(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function addeq(array1: ndarray, array2: ndarray): boolean;
export function adds(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function addseq(array: ndarray, scalar: number): boolean;

export function sub(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function subeq(array1: ndarray, array2: ndarray): boolean;
export function subs(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function subseq(array: ndarray, scalar: number): boolean;

export function mul(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function muleq(array1: ndarray, array2: ndarray): boolean;
export function muls(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function mulseq(array: ndarray, scalar: number): boolean;

export function div(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function diveq(array1: ndarray, array2: ndarray): boolean;
export function divs(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function divseq(array: ndarray, scalar: number): boolean;

export function mod(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function modeq(array1: ndarray, array2: ndarray): boolean;
export function mods(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function modseq(array: ndarray, scalar: number): boolean;

export function band(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function bandeq(array1: ndarray, array2: ndarray): boolean;
export function bands(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function bandseq(array: ndarray, scalar: number): boolean;

export function bor(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function boreq(array1: ndarray, array2: ndarray): boolean;
export function bors(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function borseq(array: ndarray, scalar: number): boolean;

export function bxor(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function bxoreq(array1: ndarray, array2: ndarray): boolean;
export function bxors(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function bxorseq(array: ndarray, scalar: number): boolean;

export function lshift(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function lshifteq(array1: ndarray, array2: ndarray): boolean;
export function lshifts(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function lshiftseq(array: ndarray, scalar: number): boolean;

export function rshift(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function rshifteq(array1: ndarray, array2: ndarray): boolean;
export function rshifts(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function rshiftseq(array: ndarray, scalar: number): boolean;

export function rrshift(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function rrshifteq(array1: ndarray, array2: ndarray): boolean;
export function rrshifts(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function rrshiftseq(array: ndarray, scalar: number): boolean;

////////////////
/// Unary operations
////////////////
export function not(array1: ndarray, array2: ndarray): ndarray;
export function noteq(array: ndarray): boolean;

export function bnot(array1: ndarray, array2: ndarray): ndarray;
export function bnoteq(array: ndarray): boolean;

export function neg(array1: ndarray, array2: ndarray): ndarray;
export function negeq(array: ndarray): boolean;

export function recip(array1: ndarray, array2: ndarray): ndarray;
export function recipeq(array: ndarray): boolean;

////////////////
/// Binary operations
////////////////
export function and(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function ands(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function andeq(array1: ndarray, array2: ndarray): boolean;
export function andseq(array: ndarray, scalar: number): boolean;

export function or(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function ors(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function oreq(array1: ndarray, array2: ndarray): boolean;
export function orseq(array: ndarray, scalar: number): boolean;

export function eq(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function eqs(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function eqeq(array1: ndarray, array2: ndarray): boolean;
export function eqseq(array: ndarray, scalar: number): boolean;

export function neq(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function neqs(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function neqeq(array1: ndarray, array2: ndarray): boolean;
export function neqseq(array: ndarray, scalar: number): boolean;

export function lt(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function lts(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function lteq(array1: ndarray, array2: ndarray): boolean;
export function ltseq(array: ndarray, scalar: number): boolean;

export function gt(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function gts(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function gteq(array1: ndarray, array2: ndarray): boolean;
export function gtseq(array: ndarray, scalar: number): boolean;

export function leq(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function leqs(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function leqeq(array1: ndarray, array2: ndarray): boolean;
export function leqseq(array: ndarray, scalar: number): boolean;

export function geq(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function geqs(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function geqeq(array1: ndarray, array2: ndarray): boolean;
export function geqseq(array: ndarray, scalar: number): boolean;

////////////////
/// Math unary operations
////////////////
export function abs(array1: ndarray, array2: ndarray): ndarray;
export function abseq(array: ndarray): boolean;

export function acos(array1: ndarray, array2: ndarray): ndarray;
export function acoseq(array: ndarray): boolean;

export function asin(array1: ndarray, array2: ndarray): ndarray;
export function asineq(array: ndarray): boolean;

export function atan(array1: ndarray, array2: ndarray): ndarray;
export function ataneq(array: ndarray): boolean;

export function ceil(array1: ndarray, array2: ndarray): ndarray;
export function ceileq(array: ndarray): boolean;

export function cos(array1: ndarray, array2: ndarray): ndarray;
export function coseq(array: ndarray): boolean;

export function exp(array1: ndarray, array2: ndarray): ndarray;
export function expeq(array: ndarray): boolean;

export function floor(array1: ndarray, array2: ndarray): ndarray;
export function flooreq(array: ndarray): boolean;

export function log(array1: ndarray, array2: ndarray): ndarray;
export function logeq(array: ndarray): boolean;

export function round(array1: ndarray, array2: ndarray): ndarray;
export function roundeq(array: ndarray): boolean;

export function sin(array1: ndarray, array2: ndarray): ndarray;
export function sineq(array: ndarray): boolean;

export function sqrt(array1: ndarray, array2: ndarray): ndarray;
export function sqrteq(array: ndarray): boolean;

export function tan(array1: ndarray, array2: ndarray): ndarray;
export function taneq(array: ndarray): boolean;

////////////////
/// Math common operations
////////////////
export function max(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function maxs(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function maxeq(array1: ndarray, array2: ndarray): boolean;
export function maxseq(array: ndarray, scalar: number): boolean;

export function min(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function mins(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function mineq(array1: ndarray, array2: ndarray): boolean;
export function minseq(array: ndarray, scalar: number): boolean;

export function atan2(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function atan2s(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function atan2eq(array1: ndarray, array2: ndarray): boolean;
export function atan2seq(array: ndarray, scalar: number): boolean;

export function pow(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function pows(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function poweq(array1: ndarray, array2: ndarray): boolean;
export function powseq(array: ndarray, scalar: number): boolean;

////////////////
/// Math non-common operations
////////////////
export function atan2op(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function atan2ops(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function atan2opeq(array1: ndarray, array2: ndarray): boolean;
export function atan2opseq(array: ndarray, scalar: number): boolean;

export function powop(array1: ndarray, array2: ndarray, array3: ndarray): ndarray;
export function powops(array1: ndarray, array2: ndarray, scalar: number): ndarray;
export function powopeq(array1: ndarray, array2: ndarray): boolean;
export function powopseq(array: ndarray, scalar: number): boolean;

export function any(array: ndarray): boolean;
export function all(array: ndarray): boolean;
export function sum(array: ndarray): boolean;
export function prod(array: ndarray): boolean;
export function norm2squared(array: ndarray): boolean;
export function norm2(array: ndarray): boolean;
export function norminf(array: ndarray): boolean;
export function norm1(array: ndarray): boolean;
export function sup(array: ndarray): boolean;
export function inf(array: ndarray): boolean;
export function argmin(index: number, array: ndarray, shape: ndarray): boolean;
export function argmax(index: number, array: ndarray, shape: ndarray): boolean;
export function random(array: ndarray): ndarray;
export function assign(array: ndarray, array2: ndarray): ndarray;
export function assigns(array: ndarray, scalar: number): ndarray;
export function equals(array1: ndarray, array2: ndarray): boolean;

export as namespace ops;
