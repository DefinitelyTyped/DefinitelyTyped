/**
 * 2D Rectangle class.
 * @class
 * @param {number} [left] - Left coordinate. 0 - default.
 * @param {number} [top] - Top coordinate. 0 - default.
 * @param {number} [right] - Right coordinate. 0 - default.
 * @param {number} [bottom] - Bottom coordinate. 0 - default.
*/
export class Rectangle {
    constructor(left: any, top: any, right: any, bottom: any);
    /**
     * Left coordinate.
     * @public
     * @type {number}
     */
    public left: number;
    /**
     * Right coordinate.
     * @public
     * @type {number}
     */
    public right: number;
    /**
     * Top coordinate.
     * @public
     * @type {number}
     */
    public top: number;
    /**
     * Top coordinate.
     * @public
     * @type {number}
     */
    public bottom: number;
    /**
     * Clone rectangle object.
     * @public
     * @returns {og.Rectangle}
     */
    public clone(): any;
    /**
     * Returns rectangle width.
     * @public
     * @type {number}
     */
    public getWidth(): number;
    /**
     * Returns rectangle height.
     * @public
     * @type {number}
     */
    public getHeight(): number;
    /**
     * Returns rectangle area.
     * @public
     * @type {number}
     */
    public getSquare(): number;
    /**
     * Returns rectangle diagonal size.
     * @public
     * @type {number}
     */
    public getDiagonal(): number;
    /**
     * Returns true if rectangle fits their size in width and height.
     * @public
     * @param {number} width - Width.
     * @param {number} height - Height.
     * @type {boolean}
     */
    public fit(width: number, height: number): boolean;
    isInside(x: any, y: any): boolean;
}
