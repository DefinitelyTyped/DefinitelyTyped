declare namespace fill {
    interface Options<ValueType, TransformValueType> {
        step?: number;
        strictRanges?: boolean;
        stringify?: boolean;
        toRegex?: boolean;
        transform?: (value: ValueType) => TransformValueType;
    }
}

type FilledArray<ValueType, TransformValueType> = ValueType extends TransformValueType ? ValueType[]
    : TransformValueType[];

declare function fill<
    ValueType = string | number,
    TransformValueType = unknown,
>(
    start: ValueType,
    end?: ValueType | null,
    step?: number,
    options?: fill.Options<ValueType, TransformValueType>,
): FilledArray<ValueType, TransformValueType>;

declare function fill<
    ValueType = string | number,
    TransformValueType = unknown,
>(
    start: ValueType,
    end?: ValueType | null,
    transformOrOptions?:
        | fill.Options<ValueType, TransformValueType>["transform"]
        | fill.Options<ValueType, TransformValueType>,
): FilledArray<ValueType, TransformValueType>;

export = fill;
