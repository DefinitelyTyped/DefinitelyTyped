// Type definitions for fill-range 7.0
// Project: https://github.com/jonschlinkert/fill-range
// Definitions by: Richie Bendall <https://github.com/Richienb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace fill {
    interface Options<ValueType, TransformValueType> {
        step?: number;
        strictRanges?: boolean;
        stringify?: boolean;
        toRegex?: boolean;
        transform?: (value: ValueType) => TransformValueType;
    }
}

type FilledArray<ValueType, TransformValueType> = ValueType extends TransformValueType ? ValueType[] : TransformValueType[];

declare function fill<
    ValueType = string | number,
    TransformValueType = unknown
>(
    start: ValueType,
    end?: ValueType | null,
    step?: number,
    options?: fill.Options<ValueType, TransformValueType>
): FilledArray<ValueType, TransformValueType>;

declare function fill<
    ValueType = string | number,
    TransformValueType = unknown
>(
    start: ValueType,
    end?: ValueType | null,
    transformOrOptions?: fill.Options<ValueType, TransformValueType>['transform'] | fill.Options<ValueType, TransformValueType>
): FilledArray<ValueType, TransformValueType>;

export = fill;
