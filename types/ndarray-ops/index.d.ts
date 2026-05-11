import { Data, NdArray } from "ndarray";

////////////////
/// Assignment operations
////////////////
export function add(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function addeq(array1: NdArray, array2: NdArray): boolean;
export function adds(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function addseq(array: NdArray, scalar: number): boolean;

export function sub(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function subeq(array1: NdArray, array2: NdArray): boolean;
export function subs(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function subseq(array: NdArray, scalar: number): boolean;

export function mul(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function muleq(array1: NdArray, array2: NdArray): boolean;
export function muls(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function mulseq(array: NdArray, scalar: number): boolean;

export function div(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function diveq(array1: NdArray, array2: NdArray): boolean;
export function divs(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function divseq(array: NdArray, scalar: number): boolean;

export function mod(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function modeq(array1: NdArray, array2: NdArray): boolean;
export function mods(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function modseq(array: NdArray, scalar: number): boolean;

export function band(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function bandeq(array1: NdArray, array2: NdArray): boolean;
export function bands(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function bandseq(array: NdArray, scalar: number): boolean;

export function bor(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function boreq(array1: NdArray, array2: NdArray): boolean;
export function bors(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function borseq(array: NdArray, scalar: number): boolean;

export function bxor(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function bxoreq(array1: NdArray, array2: NdArray): boolean;
export function bxors(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function bxorseq(array: NdArray, scalar: number): boolean;

export function lshift(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function lshifteq(array1: NdArray, array2: NdArray): boolean;
export function lshifts(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function lshiftseq(array: NdArray, scalar: number): boolean;

export function rshift(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function rshifteq(array1: NdArray, array2: NdArray): boolean;
export function rshifts(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function rshiftseq(array: NdArray, scalar: number): boolean;

export function rrshift(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function rrshifteq(array1: NdArray, array2: NdArray): boolean;
export function rrshifts(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function rrshiftseq(array: NdArray, scalar: number): boolean;

////////////////
/// Unary operations
////////////////
export function not(array1: NdArray, array2: NdArray): NdArray;
export function noteq(array: NdArray): boolean;

export function bnot(array1: NdArray, array2: NdArray): NdArray;
export function bnoteq(array: NdArray): boolean;

export function neg(array1: NdArray, array2: NdArray): NdArray;
export function negeq(array: NdArray): boolean;

export function recip(array1: NdArray, array2: NdArray): NdArray;
export function recipeq(array: NdArray): boolean;

////////////////
/// Binary operations
////////////////
export function and(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function ands(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function andeq(array1: NdArray, array2: NdArray): boolean;
export function andseq(array: NdArray, scalar: number): boolean;

export function or(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function ors(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function oreq(array1: NdArray, array2: NdArray): boolean;
export function orseq(array: NdArray, scalar: number): boolean;

export function eq(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function eqs(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function eqeq(array1: NdArray, array2: NdArray): boolean;
export function eqseq(array: NdArray, scalar: number): boolean;

export function neq(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function neqs(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function neqeq(array1: NdArray, array2: NdArray): boolean;
export function neqseq(array: NdArray, scalar: number): boolean;

export function lt(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function lts(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function lteq(array1: NdArray, array2: NdArray): boolean;
export function ltseq(array: NdArray, scalar: number): boolean;

export function gt(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function gts(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function gteq(array1: NdArray, array2: NdArray): boolean;
export function gtseq(array: NdArray, scalar: number): boolean;

export function leq(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function leqs(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function leqeq(array1: NdArray, array2: NdArray): boolean;
export function leqseq(array: NdArray, scalar: number): boolean;

export function geq(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function geqs(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function geqeq(array1: NdArray, array2: NdArray): boolean;
export function geqseq(array: NdArray, scalar: number): boolean;

////////////////
/// Math unary operations
////////////////
export function abs(array1: NdArray, array2: NdArray): NdArray;
export function abseq(array: NdArray): boolean;

export function acos(array1: NdArray, array2: NdArray): NdArray;
export function acoseq(array: NdArray): boolean;

export function asin(array1: NdArray, array2: NdArray): NdArray;
export function asineq(array: NdArray): boolean;

export function atan(array1: NdArray, array2: NdArray): NdArray;
export function ataneq(array: NdArray): boolean;

export function ceil(array1: NdArray, array2: NdArray): NdArray;
export function ceileq(array: NdArray): boolean;

export function cos(array1: NdArray, array2: NdArray): NdArray;
export function coseq(array: NdArray): boolean;

export function exp(array1: NdArray, array2: NdArray): NdArray;
export function expeq(array: NdArray): boolean;

export function floor(array1: NdArray, array2: NdArray): NdArray;
export function flooreq(array: NdArray): boolean;

export function log(array1: NdArray, array2: NdArray): NdArray;
export function logeq(array: NdArray): boolean;

export function round(array1: NdArray, array2: NdArray): NdArray;
export function roundeq(array: NdArray): boolean;

export function sin(array1: NdArray, array2: NdArray): NdArray;
export function sineq(array: NdArray): boolean;

export function sqrt(array1: NdArray, array2: NdArray): NdArray;
export function sqrteq(array: NdArray): boolean;

export function tan(array1: NdArray, array2: NdArray): NdArray;
export function taneq(array: NdArray): boolean;

////////////////
/// Math common operations
////////////////
export function max(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function maxs(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function maxeq(array1: NdArray, array2: NdArray): boolean;
export function maxseq(array: NdArray, scalar: number): boolean;

export function min(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function mins(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function mineq(array1: NdArray, array2: NdArray): boolean;
export function minseq(array: NdArray, scalar: number): boolean;

export function atan2(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function atan2s(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function atan2eq(array1: NdArray, array2: NdArray): boolean;
export function atan2seq(array: NdArray, scalar: number): boolean;

export function pow(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function pows(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function poweq(array1: NdArray, array2: NdArray): boolean;
export function powseq(array: NdArray, scalar: number): boolean;

////////////////
/// Math non-common operations
////////////////
export function atan2op(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function atan2ops(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function atan2opeq(array1: NdArray, array2: NdArray): boolean;
export function atan2opseq(array: NdArray, scalar: number): boolean;

export function powop(array1: NdArray, array2: NdArray, array3: NdArray): NdArray;
export function powops(array1: NdArray, array2: NdArray, scalar: number): NdArray;
export function powopeq(array1: NdArray, array2: NdArray): boolean;
export function powopseq(array: NdArray, scalar: number): boolean;

export function any(array: NdArray): boolean;
export function all(array: NdArray): boolean;
export function sum(array: NdArray): number;
export function prod(array: NdArray): number;
export function norm2squared(array: NdArray): number;
export function norm2(array: NdArray): number;
export function norminf(array: NdArray): number;
export function norm1(array: NdArray): number;
export function sup(array: NdArray): number;
export function inf(array: NdArray): number;
export function argmin(index: number, array: NdArray, shape: NdArray): number;
export function argmax(index: number, array: NdArray, shape: NdArray): number;
export function random(array: NdArray): NdArray;
export function assign<D extends Data = Data<number>>(array: NdArray<D>, array2: NdArray<D>): NdArray<D>;
export function assigns(array: NdArray, scalar: number): NdArray;
export function equals(array1: NdArray, array2: NdArray): boolean;

export as namespace ops;
