/**
 * Docs: https://github.com/suryapratapsinghsuryavanshi/solverjs/blob/main/src/matrix/matrix.js
 */
declare namespace SolverJS {
    interface Static {
        /**
         * Addition of two matrix is the result of adding the corresponding elements of two matrices.
         */
        matAdd(mat1: number[][], mat2: number[][]): number[][];

        /**
         * Subtraction of two matrix is the result of subtracting the corresponding elements of two matrices.
         */
        matSub(mat1: number[][], mat2: number[][]): number[][];

        /**
         * The spiral print of a matrix is the order in which the elements are printed in a square matrix in a spiral order.
         */
        matSpiralPrint(mat1: number[][]): string;

        /**
         * The transpose of a matrix is the matrix that results from exchanging the rows and columns of the original matrix.
         */
        matTrans(mat: number[][]): number[][];
    }
}
