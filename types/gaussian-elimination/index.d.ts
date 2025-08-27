/**
 * Solves a linear equation system and returns the values of the missing variables.
 * @param mat The matrix (the linear equation system) holding the coefficiants of the missing variables in the system; the last element of the nested arrays being the solution to each equation.
 */

declare function gauss(mat: number[][]): number[];

export = gauss;
