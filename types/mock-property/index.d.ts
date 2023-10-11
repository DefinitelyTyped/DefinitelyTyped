// Type definitions for mock-property 1.0
// Project: https://github.com/ljharb/mock-property#readme
// Definitions by: Jordan Harband <https://github.com/ljharb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type RestoreFunction = () => void;

declare function mockProperty(
    obj: object,
    prop: PropertyKey,
    options?: (
        | { delete: true }
        | (
            { nonEnumerable?: boolean, delete?: false }
            & (
                | { nonWritable?: boolean, value?: unknown }
                | { get?: (() => unknown) | undefined, set?: ((v: unknown) => void) | undefined }
            )
        )
    ),
): RestoreFunction;

export = mockProperty;
