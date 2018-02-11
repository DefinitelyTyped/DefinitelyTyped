// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface Random {
    /**
     * Produces a random number between min and max (inclusive). If only one argument is provided a number between
     * 0 and the given number is returned. If floating is true, or either min or max are floats, a floating-point
     * number is returned instead of an integer.
     *
     * @param min The minimum possible value.
     * @param max The maximum possible value.
     * @param floating Specify returning a floating-point number.
     * @return Returns the random number.
     */
    (): Random;
    /**
     * Produces a random number between min and max (inclusive). If only one argument is provided a number between
     * 0 and the given number is returned. If floating is true, or either min or max are floats, a floating-point
     * number is returned instead of an integer.
     *
     * @param min The minimum possible value.
     * @param max The maximum possible value.
     * @param floating Specify returning a floating-point number.
     * @return Returns the random number.
     */
    (maxOrMin: number): Random1x1;
    /**
     * Produces a random number between min and max (inclusive). If only one argument is provided a number between
     * 0 and the given number is returned. If floating is true, or either min or max are floats, a floating-point
     * number is returned instead of an integer.
     *
     * @param min The minimum possible value.
     * @param max The maximum possible value.
     * @param floating Specify returning a floating-point number.
     * @return Returns the random number.
     */
    (maxOrMin: number, floatingOrMax: boolean | number): number;
}
interface Random1x1 {
    /**
     * Produces a random number between min and max (inclusive). If only one argument is provided a number between
     * 0 and the given number is returned. If floating is true, or either min or max are floats, a floating-point
     * number is returned instead of an integer.
     *
     * @param min The minimum possible value.
     * @param max The maximum possible value.
     * @param floating Specify returning a floating-point number.
     * @return Returns the random number.
     */
    (): Random1x1;
    /**
     * Produces a random number between min and max (inclusive). If only one argument is provided a number between
     * 0 and the given number is returned. If floating is true, or either min or max are floats, a floating-point
     * number is returned instead of an integer.
     *
     * @param min The minimum possible value.
     * @param max The maximum possible value.
     * @param floating Specify returning a floating-point number.
     * @return Returns the random number.
     */
    (floatingOrMax: boolean | number): number;
}

declare const random: Random;
export = random;
