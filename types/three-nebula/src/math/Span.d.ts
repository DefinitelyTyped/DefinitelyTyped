export default class Span {
    /**
     * Span Class. Get a random Number from a to b. Or from c-a to c+b
     * @example
     * var span = new Span(0,30);
     * or
     * var span = new Span(["#fff","#ff0","#000"]);
     * or
     * var span = new Span(5,1,"center");
     */
    constructor(a?: number | [], b?: number, center?: number);
    protected _isArray: boolean;

    /**
     * @description The class type.
     */
    type: string;
    a: number | [] | undefined;
    b: number | undefined;
    protected _center: number | boolean | undefined;
    /**
     * Span.getValue function
     */
    getValue(INT?: number): number;
    getValue(): string;
}

export function createSpan(a: any, b: any, c: any): Span;
