/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */

type ESAbstractDescriptor =
    & {
        "[[Configurable]]"?: boolean;
        "[[Enumerable]]"?: boolean;
    }
    & (
        | Partial<{
            "[[Writable]]": boolean;
            "[[Value]]": unknown;
        }>
        | Partial<{
            "[[Get]]"?: () => unknown;
            "[[Set]]"?: (value: unknown) => void;
        }>
    );

type Func = (...args: unknown[]) => unknown;

interface CoercibleObject {
    valueOf: Func;
    toString: Func;
}

declare const fixtures: {
    primitives: ReadonlyArray<string | number | bigint | boolean | symbol | null | undefined>;
    booleans: readonly boolean[];
    coercibleFnObject: readonly CoercibleObject[];
    coercibleObject: readonly CoercibleObject[];
    falsies: ReadonlyArray<null | undefined | false | number | "" | 0n>;
    hasSymbols: boolean;
    infinities: readonly number[];
    int32s: readonly number[];
    integerNumbers: readonly number[];
    nonArrays: readonly unknown[];
    bigints: ReadonlyArray<bigint>;
    nonBigInts: ReadonlyArray<null | undefined | boolean | number | string | symbol | object>;
    nonBooleans: ReadonlyArray<null | undefined | number | string | symbol | object | bigint>;
    nonFunctions: readonly unknown[];
    arrowFunctions: readonly Func[];
    generatorFunctions: readonly Func[];
    asyncFunctions: readonly Func[];
    nonConstructorFunctions: readonly Func[];
    nonIntegerNumbers: readonly number[];
    notNonNegativeIntegers: readonly number[];
    nonNullPrimitives: ReadonlyArray<boolean | number | string | symbol | bigint>;
    nonNumberPrimitives: ReadonlyArray<null | undefined | boolean | string | symbol>;
    nonNumbers: ReadonlyArray<null | undefined | boolean | string | symbol | object>;
    nonPropertyKeys: ReadonlyArray<null | undefined | boolean | number | bigint | object>;
    nonStrings: ReadonlyArray<null | undefined | boolean | number | symbol | bigint | object>;
    nonSymbolPrimitives: ReadonlyArray<null | undefined | boolean | number | string | bigint>;
    nonUndefinedPrimitives: ReadonlyArray<null | boolean | number | string | symbol | bigint>;
    nullPrimitives: ReadonlyArray<null | undefined>;
    numbers: readonly number[];
    objects: readonly object[];
    propertyKeys: ReadonlyArray<string | symbol>;
    strings: readonly string[];
    symbols: readonly symbol[];
    wellKnownSymbols: readonly symbol[];
    timestamps: readonly number[];
    toStringOnlyObject: readonly CoercibleObject[];
    truthies: ReadonlyArray<true | number | string | symbol | object>;
    uncoercibleFnObject: readonly CoercibleObject[];
    uncoercibleObject: readonly CoercibleObject[];
    valueOfOnlyObject: readonly CoercibleObject[];
    zeroes: ReadonlyArray<0 | -0>;
    bothDescriptor: () => ESAbstractDescriptor;
    bothDescriptorWritable: () => ESAbstractDescriptor;
    accessorDescriptor: () => ESAbstractDescriptor;
    mutatorDescriptor: () => ESAbstractDescriptor;
    dataDescriptor: () => ESAbstractDescriptor;
    genericDescriptor: () => ESAbstractDescriptor;
    assignedDescriptor: () => ESAbstractDescriptor;
    descriptors: {
        configurable: (descriptor: ESAbstractDescriptor) => ESAbstractDescriptor;
        nonConfigurable: (descriptor: ESAbstractDescriptor) => ESAbstractDescriptor;
        enumerable: (descriptor: ESAbstractDescriptor) => ESAbstractDescriptor;
        nonEnumerable: (descriptor: ESAbstractDescriptor) => ESAbstractDescriptor;
        writable: (descriptor: ESAbstractDescriptor) => ESAbstractDescriptor;
        nonWritable: (descriptor: ESAbstractDescriptor) => ESAbstractDescriptor;
    };
};

export = fixtures;
