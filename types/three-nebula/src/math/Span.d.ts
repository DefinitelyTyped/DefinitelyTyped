export default class Span {
    /**
     * Span Class. Get a random Number from a to b. Or from c-a to c+b
     * @param {Number|Array?} a - min number
     * @param {Number?} b - max number
     * @param {Number?} center - the center's z value
     * @example
     * var span = new Span(0,30);
     * or
     * var span = new Span(["#fff","#ff0","#000"]);
     * or
     * var span = new Span(5,1,"center");
     * @extends {Zone}
     * @constructor
     */
    constructor(a?: number | [], b?: number, center?: number);
    protected _isArray: boolean;

    /**
     * @description The class type.
     * @type {string}
     */
    type: string;
    a: number | [] | undefined;
    b: number | undefined;
    protected _center: number | boolean | undefined;
    /**
     * Span.getValue function
     * @name get a random Number from a to b. Or get a random Number from c-a to c+b
     * @param {number} INT or int
     * @return {number} a random Number
     */
    getValue(INT?: number): number;
    getValue(): string;
}

export function createSpan(a: any, b: any, c: any): Span;
