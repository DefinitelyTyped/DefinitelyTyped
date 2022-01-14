export default Matrix;
/**
 * Matrix module for DataFrame, providing basic mathematical matrix computations.
 */
declare class Matrix {
    /**
     * Start the Matrix module.
     * @param {DataFrame} df An instance of DataFrame.
     */
    constructor(df: DataFrame);
    df: DataFrame;
    name: string;
    /**
     * Check if two DataFrames are commutative, if both have the same dimensions.
     * @param {DataFrame} df The second DataFrame to check.
     * @param {Boolean} [reverse = false] Revert the second DataFrame before the comparison.
     * @returns {Boolean} True if they are commutative, else false.
     * @example
     * df.matrix.isCommutative(df2)
     */
    isCommutative(df: DataFrame, reverse?: boolean): boolean;
    /**
     * Provide an elements pairwise addition of two DataFrames having the same dimensions.
     * @param {DataFrame} df The second DataFrame to add.
     * @returns {DataFrame} A new DataFrame resulting to the addition two DataFrames.
     * @example
     * df.matrix.add(df2)
     */
    add(df: DataFrame): DataFrame;
    /**
     * Provide a scalar product between a number and a DataFrame.
     * @param {Number} number The number to multiply.
     * @returns {DataFrame} A new DataFrame resulting to the scalar product.
     * @example
     * df.matrix.product(6)
     */
    product(number: number): DataFrame;
    /**
     * Multiply one DataFrame n x p and a second p x n.
     * @param {DataFrame} df The second DataFrame to multiply.
     * @returns {DataFrame} A new n x n DataFrame resulting to the product of two DataFrame.
     * @example
     * df.matrix.dot(df)
     */
    dot(df: DataFrame): DataFrame;
}
import DataFrame from "../dataframe";
