// Type definitions for JS-quantities
// Project: http://gentooboontoo.github.io/js-quantities/
// Definitions by: William Comartin <https://github.com/wcomartin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var Qty: QtyModule.QtyStatic;

declare namespace QtyModule {
  interface QtyStatic {
    (value: string): Qty;
    (value: number): Qty;
    (value: number, unit: string): Qty;
    (value: Qty): Qty;
  }

  interface Qty {
    version: string;

    scalar: number;
    baseScalar: number;

    parse(value: string): Qty;

    swiftConverter(srcUnits:string, dstUnits:string): (value:number) => number;

    getkinds(): string[];

    getUnits(kind:string): string[];

    getAliases(unitName:string): string[];

    formatter(scalar:number, units:string):string;

    toFloat(): number;

    isUnitless(): boolean;

    isCompatible(other:string|Qty): boolean;

    isInverse(other:string|Qty): boolean

    kind(): string;

    isBase(): boolean;

    toBase(): Qty;

    units(): string;

    eq(other:Qty): boolean;
    lt(other:Qty): boolean;
    lte(other:Qty): boolean;
    gt(other:Qty): boolean;
    gte(other:Qty): boolean;

    toPrec(precQuantity: Qty|string|number): Qty;

    toString(targetUnitsOrMaxDecimalsOrPrec?:number|string|Qty, maxDecimals?: number): string;

    format(targetUnits?:string, formatter?:(scalar:number, units:string) => string): string;

    compareTo(other:Qty|string): number;

    same(other: Qty): boolean;

    inverse(): Qty;

    isDegrees(): boolean;

    isTemperature(): boolean;

    to(other:string|Qty): Qty;

    add(other:string|Qty): Qty;
    sub(other:string|Qty): Qty;
    mul(other:number|string|Qty): Qty;
    div(other:number|string|Qty): Qty;
  }
}