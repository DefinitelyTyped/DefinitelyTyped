// Type definitions for JS-quantities
// Project: http://gentooboontoo.github.io/js-quantities/
// Definitions by: William Rummler <https://github.com/wrummler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export declare const Qty: QtyClass;

export interface QtyClass {
    (value: QtySource): QtyInstance;
    (value: number, unit: string): QtyInstance;
    new (value: QtySource): QtyInstance;
    new (value: number, unit: string): QtyInstance;
    parse(value: string): QtyInstance;
    getKinds(): string[];
    getUnits(kind?: string): string[];
    getAliases(unit: string): string[];
    swiftConverter(sourceUnit: string, targetUnit: string): QtyConverter;
    formatter: QtyFormatter;
    readonly Error: any;
    mulSafe(n1: number, n2: number): number;
    divSafe(n1: number, n2: number): number;
}

export interface QtyInstance {
    readonly numerator: string[];
    readonly denominator: string[];
    readonly scalar: number;
    readonly baseScalar: number;
    readonly initValue: string;
    units(): string;
    isCompatible(value: QtyUnitSource): boolean;
    kind(): string;
    isUnitless(): boolean;
    isBase(): boolean;
    toBase(): QtyInstance;
    toFloat(): number;
    to(value: QtyUnitSource): QtyInstance;
    inverse(): QtyInstance;
    eq(value: QtyUnitSource): boolean;
    same(value: QtyUnitSource): boolean;
    lt(value: QtyUnitSource): boolean;
    lte(value: QtyUnitSource): boolean;
    gt(value: QtyUnitSource): boolean;
    gte(value: QtyUnitSource): boolean;
    compareTo(value: QtyInstance): QtyComparisonResult;
    add(value: QtySource): QtyInstance;
    sub(value: QtySource): QtyInstance;
    mul(value: QtySource): QtyInstance;
    div(value: QtySource): QtyInstance;
    toPrec(value: QtySource): QtyInstance;
    toString(valueOrPrecision?: QtySource): string;
    toString(value: string, precision: number): string;
    format(formatter?: QtyFormatter): string;
    format(value: string, formatter?: QtyFormatter): string;
}

export interface QtyConverter {
    (sourceValue: number): number;
    (sourceValues: number[]): number[];
}

export type QtyFormatter = (scalar: number, unit: string) => string;

export type QtyComparisonResult = -1 | 0 | 1;

type QtySource = QtyUnitSource | number;
type QtyUnitSource = QtyInstance | string;
