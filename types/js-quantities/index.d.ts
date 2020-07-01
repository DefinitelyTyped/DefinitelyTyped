// Type definitions for JS-quantities 1.6
// Project: http://gentooboontoo.github.io/js-quantities/
// Definitions by: William Rummler <https://github.com/wrummler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const Qty: Qty.Type;

interface Qty {
    readonly numerator: string[];
    readonly denominator: string[];
    readonly scalar: number;
    readonly baseScalar: number;
    readonly initValue: string;
    units(): string;
    isCompatible(value: Qty.UnitSource): boolean;
    kind(): string;
    isUnitless(): boolean;
    isBase(): boolean;
    toBase(): Qty;
    toFloat(): number;
    to(value: Qty.UnitSource): Qty;
    inverse(): Qty;
    eq(value: Qty.UnitSource): boolean;
    same(value: Qty.UnitSource): boolean;
    lt(value: Qty.UnitSource): boolean;
    lte(value: Qty.UnitSource): boolean;
    gt(value: Qty.UnitSource): boolean;
    gte(value: Qty.UnitSource): boolean;
    compareTo(value: Qty): Qty.ComparisonResult;
    add(value: Qty.Source): Qty;
    sub(value: Qty.Source): Qty;
    mul(value: Qty.Source): Qty;
    div(value: Qty.Source): Qty;
    toPrec(value: Qty.Source): Qty;
    toString(valueOrPrecision?: Qty.Source): string;
    toString(value: string, precision: number): string;
    format(formatter?: Qty.Formatter): string;
    format(value: string, formatter?: Qty.Formatter): string;
}

declare namespace Qty {
    interface Type {
        (value: Source): Qty;
        (value: number, unit: string): Qty;
        new (value: Source): Qty;
        new (value: number, unit: string): Qty;
        parse(value: string): Qty;
        getKinds(): string[];
        getUnits(kind?: string): string[];
        getAliases(unit: string): string[];
        swiftConverter(sourceUnit: string, targetUnit: string): Converter;
        formatter: Formatter;
        readonly Error: any;
        mulSafe(n1: number, n2: number): number;
        divSafe(n1: number, n2: number): number;
    }

    interface Converter {
        (sourceValue: number): number;
        (sourceValues: number[]): number[];
    }

    type Formatter = (scalar: number, unit: string) => string;

    type ComparisonResult = -1 | 0 | 1;

    type Source = UnitSource | number;

    type UnitSource = Qty | string;
}

export = Qty;
