import * as nblas from "nblas";

const a = new Float32Array(0);
const n = 1;
let res: number;

function test() {
    // BLAS Level 1 Routines and Functions
    res = nblas.asum(a);
    nblas.axpy(a, a, n);
    nblas.copy(a, a);
    res = nblas.dot(a, a);
    res = nblas.nrm2(a);
    nblas.rot(a, a, n, n);
    nblas.rotg(a, a, a, a);
    nblas.rotm(a, a, a);
    nblas.rotmg(a, a, a, n, a);
    nblas.scal(a, n);
    nblas.swap(a, a);
    res = nblas.iamax(a);
    // nblas.iamin(a);

    // BLAS Level 2 Routines
    nblas.gbmv(a, a, a, n, n, n, n, nblas.Trans);
    nblas.gemv(a, a, a, n, n, nblas.Trans);
    nblas.ger(a, a, a, n);
    nblas.sbmv(a, a, a, n, nblas.Lower, n, n);
    nblas.spmv(a, a, a, nblas.Lower, n, n);
    nblas.spr(a, a, nblas.Lower, n);
    nblas.spr2(a, a, a, nblas.Lower, n);
    nblas.symv(a, a, a, nblas.Lower, n, n);
    nblas.syr(a, a, nblas.Lower, n);
    nblas.syr2(a, a, a, nblas.Lower, n);
    nblas.tbmv(a, a, a, nblas.Lower, nblas.Trans, nblas.Unit);
    nblas.tbsv(a, a, nblas.Lower, nblas.Trans, nblas.Unit);
    nblas.tpmv(a, a, nblas.Lower, nblas.Trans, nblas.Unit);
    nblas.tpsv(a, a, nblas.Lower, nblas.Trans, nblas.Unit);
    nblas.trmv(a, a, nblas.Lower, nblas.Trans, nblas.Unit);
    nblas.trsv(a, a, nblas.Lower, nblas.Trans, nblas.Unit);

    // BLAS Level 3 Routines
    nblas.gemm(a, a, a, n, n, n, nblas.Trans, nblas.Trans, n, n);
    nblas.symm(a, a, a, n, n, nblas.Right, nblas.Lower, n, n);
    nblas.syrk(a, a, n, n, nblas.Lower, nblas.Trans, n, n);
    nblas.syr2k(a, a, a, n, n, nblas.Lower, nblas.Trans, n, n);
    nblas.trmm(a, a, n, n, nblas.Right, nblas.Lower, nblas.Trans, nblas.Unit, n);
    nblas.trsm(a, a, n, n, nblas.Right, nblas.Lower, nblas.Trans, nblas.Unit, n);
}
