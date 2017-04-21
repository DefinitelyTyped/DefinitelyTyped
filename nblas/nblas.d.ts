// Type definitions for nblas 1.2.2
// Project: https://github.com/mateogianolio/nblas
// Definitions by: Erik Gerrits <https://github.com/erikgerrits>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare enum TRANS {

    NoTrans = 111,
    Trans = 112,
    ConjTrans = 113
}

declare enum UPLO {

    Upper = 121,
    Lower = 122
}

declare enum DIAG {
    NonUnit = 131,
    Unit = 132
}

declare enum SIDE {
    Left = 141,
    Right = 142
}

declare class nblas {

    NoTrans: TRANS.NoTrans;
    Trans: TRANS.Trans;
    ConjTrans: TRANS.ConjTrans;

    Upper: UPLO.Upper;
    Lower: UPLO.Lower;

    NonUnit: DIAG.NonUnit;
    Unit: DIAG.Unit;

    Left: SIDE.Left;
    Right: SIDE.Right;

    // BLAS Level 1 Routines and Functions

    asum (x: Float32Array): number;
    axpy (x: Float32Array, y: Float32Array, alpha?: number): void;
    copy (x: Float32Array, y: Float32Array): void;
    dot (x: Float32Array, y: Float32Array): number;
    nrm2 (x: Float32Array): number;
    rot (x: Float32Array, y: Float32Array, c: number, s: number): void;
    rotg (x: Float32Array, y: Float32Array, c: Float32Array, s: Float32Array): void;
    rotm (x: Float32Array, y: Float32Array, param: Float32Array): void;
    rotmg (d1: Float32Array, d2:Float32Array, x1:Float32Array, y1: number, param:Float32Array): void;
    scal (x: Float32Array, alpha: number): void;
    swap (x: Float32Array, y: Float32Array): void;
    iamax (x: Float32Array): number;
    //iamin (x: Float32Array);

    // BLAS Level 2 Routines
    gbmv (a: Float32Array, x: Float32Array, y: Float32Array, kl?: number, ku?: number, alpha?: number, beta?: number, trans?: TRANS): void;
    gemv (a: Float32Array, x: Float32Array, y: Float32Array, alpha?: number, beta?: number, trans?: TRANS): void;
    ger (a: Float32Array, x: Float32Array, y: Float32Array, alpha?: number): void;
    sbmv (a: Float32Array, x: Float32Array, y: Float32Array, k?: number, uplo?: UPLO, alpha?: number, beta?: number): void;
    spmv (ap: Float32Array, x: Float32Array, y: Float32Array, uplo?: UPLO, alpha?: number, beta?: number): void;
    spr (ap: Float32Array, x: Float32Array, uplo?: UPLO, alpha?: number): void;
    spr2 (ap: Float32Array, x: Float32Array, y: Float32Array, uplo?: UPLO, alpha?: number): void;
    symv (a: Float32Array, x: Float32Array, y: Float32Array, uplo?: UPLO, alpha?: number, beta?: number): void;
    syr (a: Float32Array, x: Float32Array, uplo?: UPLO, alpha?: number): void;
    syr2 (a: Float32Array, x: Float32Array, y: Float32Array, uplo?: UPLO, alpha?: number): void;
    tbmv (a: Float32Array, x: Float32Array, y: Float32Array, uplo?: UPLO, trans?: TRANS, diag?: DIAG): void;
    tbsv (a: Float32Array, x: Float32Array, uplo?: UPLO, trans?: TRANS, diag?: DIAG): void;
    tpmv (ap: Float32Array, x: Float32Array, uplo?: UPLO, trans?: TRANS, diag?: DIAG): void;
    tpsv (ap: Float32Array, x: Float32Array, uplo?: UPLO, trans?: TRANS, diag?: DIAG): void;
    trmv (a: Float32Array, x: Float32Array, uplo?: UPLO, trans?: TRANS, diag?: DIAG): void;
    trsv (a: Float32Array, x: Float32Array, uplo?: UPLO, trans?: TRANS, diag?: DIAG): void;

    // BLAS Level 3 Routines
    gemm (a: Float32Array, b: Float32Array, c: Float32Array, m: number, n: number, k: number, transa?: TRANS, transb?: TRANS, alpha?: number, beta?: number): void;
    symm (a: Float32Array, b: Float32Array, c: Float32Array, m: number, n: number, side: SIDE, uplo?: UPLO, alpha?: number, beta?: number): void;
    syrk (a: Float32Array, c: Float32Array, n: number, k: number, uplo?: UPLO, trans?: TRANS, alpha?: number, beta?: number): void;
    syr2k (a: Float32Array, b: Float32Array, c: Float32Array, n: number, k: number, uplo?: UPLO, trans?: TRANS, alpha?: number, beta?: number): void;
    trmm (a: Float32Array, b: Float32Array, m: number, n: number, side: SIDE, uplo?: UPLO, transa?: TRANS, diag?: DIAG, alpha?: number): void;
    trsm (a: Float32Array, b: Float32Array, m: number, n: number, side: SIDE, uplo?: UPLO, transa?: TRANS, diag?: DIAG, alpha?: number): void;
}

export default new nblas();