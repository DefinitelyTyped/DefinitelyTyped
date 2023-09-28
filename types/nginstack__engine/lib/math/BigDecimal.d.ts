export = BigDecimal;
declare function BigDecimal(value: number | BigDecimal | string): void;
declare class BigDecimal {
    constructor(value: number | BigDecimal | string);
    plus(value: number | BigDecimal | string): BigDecimal;
    minus(value: number | BigDecimal | string): BigDecimal;
    times(value: number | BigDecimal | string): BigDecimal;
    dividedBy(value: number | BigDecimal | string): BigDecimal;
    dividedToIntegerBy(value: number | BigDecimal | string): BigDecimal;
    modulo(value: number | BigDecimal | string): BigDecimal;
    equals(value: number | BigDecimal | string): boolean;
    compareTo(value: number | BigDecimal | string): number;
    greaterThan(value: number | BigDecimal | string): boolean;
    greaterThanOrEqualTo(value: number | BigDecimal | string): boolean;
    lessThan(value: number | BigDecimal | string): boolean;
    lessThanOrEqualTo(value: number | BigDecimal | string): boolean;
    pow(value: number | BigDecimal | string): BigDecimal;
    abs(): BigDecimal;
    negate(): BigDecimal;
    isInfinite(): boolean;
    isNaN(): boolean;
    isPositive(): boolean;
    isNegative(): boolean;
    isZero(): boolean;
    sqrt(): BigDecimal;
    floor(): BigDecimal;
    ceil(): BigDecimal;
    toDecimalPlaces(places: number): BigDecimal;
    quantize(value: number | BigDecimal | string): BigDecimal;
}
declare namespace BigDecimal {
    function config(params: {
        rounding?: number;
        precision?: number;
        emax?: number;
        emin?: number;
    }): void;
    function add(a: string | number | BigDecimal, b: string | number | BigDecimal): BigDecimal;
    function sub(a: string | number | BigDecimal, b: string | number | BigDecimal): BigDecimal;
    function div(a: string | number | BigDecimal, b: string | number | BigDecimal): BigDecimal;
    function mul(a: string | number | BigDecimal, b: string | number | BigDecimal): BigDecimal;
}
