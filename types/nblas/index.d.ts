// Type definitions for nblas 1.2
// Project: https://github.com/mateogianolio/nblas
// Definitions by: Erik Gerrits <https://github.com/erikgerrits>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const enum TRANS {
    NoTrans = 111,
    Trans = 112,
    ConjTrans = 113
}

export const enum UPLO {
    Upper = 121,
    Lower = 122
}

export const enum DIAG {
    NonUnit = 131,
    Unit = 132
}

export const enum SIDE {
    Left = 141,
    Right = 142
}

export const NoTrans: TRANS.NoTrans;
export const Trans: TRANS.Trans;
export const ConjTrans: TRANS.ConjTrans;

export const Upper: UPLO.Upper;
export const Lower: UPLO.Lower;

export const NonUnit: DIAG.NonUnit;
export const Unit: DIAG.Unit;

export const Left: SIDE.Left;
export const Right: SIDE.Right;

// BLAS Level 1 Routines and Functions
export function asum(x: Float32Array|Float64Array): number;
export function axpy(x: Float32Array, y: Float32Array, alpha?: number): void;
export function axpy(x: Float64Array, y: Float64Array, alpha?: number): void;
export function copy(x: Float32Array, y: Float32Array): void;
export function copy(x: Float64Array, y: Float64Array): void;
export function dot(x: Float32Array, y: Float32Array): number;
export function dot(x: Float64Array, y: Float64Array): number;
export function nrm2(x: Float32Array|Float64Array): number;
export function rot(x: Float32Array, y: Float32Array, c: number, s: number): void;
export function rot(x: Float64Array, y: Float64Array, c: number, s: number): void;
export function rotg(x: Float32Array, y: Float32Array, c: Float32Array, s: Float32Array): void;
export function rotg(x: Float64Array, y: Float64Array, c: Float64Array, s: Float64Array): void;
export function rotm(x: Float32Array, y: Float32Array, param: Float32Array): void;
export function rotm(x: Float64Array, y: Float64Array, param: Float64Array): void;
export function rotmg(d1: Float32Array, d2: Float32Array, x1: Float32Array, y1: number, param: Float32Array): void;
export function rotmg(d1: Float64Array, d2: Float64Array, x1: Float64Array, y1: number, param: Float64Array): void;
export function scal(x: Float32Array | Float64Array, alpha: number): void;
export function swap(x: Float32Array, y: Float32Array): void;
export function swap(x: Float64Array, y: Float64Array): void;
export function iamax(x: Float32Array | Float64Array): number;

// BLAS Level 2 Routines
export function gbmv(a: Float32Array, x: Float32Array, y: Float32Array, kl?: number, ku?: number, alpha?: number, beta?: number, trans?: TRANS): void;
export function gbmv(a: Float64Array, x: Float64Array, y: Float64Array, kl?: number, ku?: number, alpha?: number, beta?: number, trans?: TRANS): void;
export function gemv(a: Float32Array, x: Float32Array, y: Float32Array, alpha?: number, beta?: number, trans?: TRANS): void;
export function gemv(a: Float64Array, x: Float64Array, y: Float64Array, alpha?: number, beta?: number, trans?: TRANS): void;
export function ger(a: Float32Array, x: Float32Array, y: Float32Array, alpha?: number): void;
export function ger(a: Float64Array, x: Float64Array, y: Float64Array, alpha?: number): void;
export function sbmv(a: Float32Array, x: Float32Array, y: Float32Array, k?: number, uplo?: UPLO, alpha?: number, beta?: number): void;
export function sbmv(a: Float64Array, x: Float64Array, y: Float64Array, k?: number, uplo?: UPLO, alpha?: number, beta?: number): void;
export function spmv(ap: Float32Array, x: Float32Array, y: Float32Array, uplo?: UPLO, alpha?: number, beta?: number): void;
export function spmv(ap: Float64Array, x: Float64Array, y: Float64Array, uplo?: UPLO, alpha?: number, beta?: number): void;
export function spr(ap: Float32Array, x: Float32Array, uplo?: UPLO, alpha?: number): void;
export function spr(ap: Float64Array, x: Float64Array, uplo?: UPLO, alpha?: number): void;
export function spr2(ap: Float32Array, x: Float32Array, y: Float32Array, uplo?: UPLO, alpha?: number): void;
export function spr2(ap: Float64Array, x: Float64Array, y: Float64Array, uplo?: UPLO, alpha?: number): void;
export function symv(a: Float32Array, x: Float32Array, y: Float32Array, uplo?: UPLO, alpha?: number, beta?: number): void;
export function symv(a: Float64Array, x: Float64Array, y: Float64Array, uplo?: UPLO, alpha?: number, beta?: number): void;
export function syr(a: Float32Array, x: Float32Array, uplo?: UPLO, alpha?: number): void;
export function syr(a: Float64Array, x: Float64Array, uplo?: UPLO, alpha?: number): void;
export function syr2(a: Float32Array, x: Float32Array, y: Float32Array, uplo?: UPLO, alpha?: number): void;
export function syr2(a: Float64Array, x: Float64Array, y: Float64Array, uplo?: UPLO, alpha?: number): void;
export function tbmv(a: Float32Array, x: Float32Array, y: Float32Array, uplo?: UPLO, trans?: TRANS, diag?: DIAG): void;
export function tbmv(a: Float64Array, x: Float64Array, y: Float64Array, uplo?: UPLO, trans?: TRANS, diag?: DIAG): void;
export function tbsv(a: Float32Array, x: Float32Array, uplo?: UPLO, trans?: TRANS, diag?: DIAG): void;
export function tbsv(a: Float64Array, x: Float64Array, uplo?: UPLO, trans?: TRANS, diag?: DIAG): void;
export function tpmv(ap: Float32Array, x: Float32Array, uplo?: UPLO, trans?: TRANS, diag?: DIAG): void;
export function tpmv(ap: Float64Array, x: Float64Array, uplo?: UPLO, trans?: TRANS, diag?: DIAG): void;
export function tpsv(ap: Float32Array, x: Float32Array, uplo?: UPLO, trans?: TRANS, diag?: DIAG): void;
export function tpsv(ap: Float64Array, x: Float64Array, uplo?: UPLO, trans?: TRANS, diag?: DIAG): void;
export function trmv(a: Float32Array, x: Float32Array, uplo?: UPLO, trans?: TRANS, diag?: DIAG): void;
export function trmv(a: Float64Array, x: Float64Array, uplo?: UPLO, trans?: TRANS, diag?: DIAG): void;
export function trsv(a: Float32Array, x: Float32Array, uplo?: UPLO, trans?: TRANS, diag?: DIAG): void;
export function trsv(a: Float64Array, x: Float64Array, uplo?: UPLO, trans?: TRANS, diag?: DIAG): void;

// BLAS Level 3 Routines
export function gemm(a: Float32Array, b: Float32Array, c: Float32Array, m: number, n: number, k: number, transa?: TRANS, transb?: TRANS, alpha?: number, beta?: number): void;
export function gemm(a: Float64Array, b: Float64Array, c: Float64Array, m: number, n: number, k: number, transa?: TRANS, transb?: TRANS, alpha?: number, beta?: number): void;
export function symm(a: Float32Array, b: Float32Array, c: Float32Array, m: number, n: number, side: SIDE, uplo?: UPLO, alpha?: number, beta?: number): void;
export function symm(a: Float64Array, b: Float64Array, c: Float64Array, m: number, n: number, side: SIDE, uplo?: UPLO, alpha?: number, beta?: number): void;
export function syrk(a: Float32Array, c: Float32Array, n: number, k: number, uplo?: UPLO, trans?: TRANS, alpha?: number, beta?: number): void;
export function syrk(a: Float64Array, c: Float64Array, n: number, k: number, uplo?: UPLO, trans?: TRANS, alpha?: number, beta?: number): void;
export function syr2k(a: Float32Array, b: Float32Array, c: Float32Array, n: number, k: number, uplo?: UPLO, trans?: TRANS, alpha?: number, beta?: number): void;
export function syr2k(a: Float64Array, b: Float64Array, c: Float64Array, n: number, k: number, uplo?: UPLO, trans?: TRANS, alpha?: number, beta?: number): void;
export function trmm(a: Float32Array, b: Float32Array, m: number, n: number, side: SIDE, uplo?: UPLO, transa?: TRANS, diag?: DIAG, alpha?: number): void;
export function trmm(a: Float64Array, b: Float64Array, m: number, n: number, side: SIDE, uplo?: UPLO, transa?: TRANS, diag?: DIAG, alpha?: number): void;
export function trsm(a: Float32Array, b: Float32Array, m: number, n: number, side: SIDE, uplo?: UPLO, transa?: TRANS, diag?: DIAG, alpha?: number): void;
export function trsm(a: Float64Array, b: Float64Array, m: number, n: number, side: SIDE, uplo?: UPLO, transa?: TRANS, diag?: DIAG, alpha?: number): void;
